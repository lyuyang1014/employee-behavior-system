// 员工异常行为排查系统 - 应用主逻辑
class BehaviorApp {
    constructor() {
        this.currentView = 'main';
        this.currentCategory = null;
        this.currentSubcategory = null;
        this.currentBehavior = null;
        this.searchKeyword = '';
        this.init();
    }

    // 初始化应用
    init() {
        this.bindEvents();
        this.updateBreadcrumb(['首页']);
        console.log('员工异常行为排查系统初始化完成');
    }

    // 绑定事件
    bindEvents() {
        // 搜索事件
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.search());
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.search();
                }
            });
        }

        // 筛选按钮事件
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterByRisk(btn.dataset.filter);
            });
        });

        // 清除搜索
        const clearBtn = document.getElementById('clearSearch');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearSearch());
        }
    }

    // 显示主视图
    showMainView() {
        this.hideAllViews();
        document.getElementById('mainView').style.display = 'block';
        this.currentView = 'main';
        this.currentCategory = null;
        this.currentSubcategory = null;
        this.updateBreadcrumb(['首页']);
    }

    // 显示分类视图
    showCategory(categoryKey) {
        this.hideAllViews();
        document.getElementById('categoryView').style.display = 'block';
        this.currentView = 'category';
        this.currentCategory = categoryKey;
        this.currentSubcategory = null;

        const category = behaviorData[categoryKey];
        if (!category) return;

        // 更新标题
        document.getElementById('categoryTitle').textContent = category.title;
        
        // 更新面包屑
        this.updateBreadcrumb(['首页', category.title]);

        // 渲染子分类
        this.renderSubcategories(categoryKey);
    }

    // 渲染子分类
    renderSubcategories(categoryKey) {
        const category = behaviorData[categoryKey];
        const container = document.getElementById('categoryContent');
        
        let html = `
            <div class="category-overview">
                <p>${category.description}</p>
                <div class="category-stats">
                    <span class="stat-badge">共 ${category.totalCount} 项异常行为</span>
                    <span class="risk-badge ${category.riskLevel}">
                        ${category.riskLevel === 'high' ? '高风险' : 
                          category.riskLevel === 'medium' ? '中风险' : 
                          category.riskLevel === 'mixed' ? '混合风险' : '低风险'}
                    </span>
                </div>
            </div>
            <div class="subcategory-grid">
        `;

        Object.keys(category.subcategories).forEach(subKey => {
            const sub = category.subcategories[subKey];
            const behaviorCount = sub.behaviors.length;
            
            html += `
                <div class="subcategory-card" onclick="app.showSubcategory('${categoryKey}', '${subKey}')">
                    <h4>${sub.title}</h4>
                    <p>${sub.description}</p>
                    <div class="subcategory-meta">
                        <span class="behavior-count">${behaviorCount}项</span>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
    }

    // 显示子分类视图
    showSubcategory(categoryKey, subcategoryKey) {
        this.hideAllViews();
        document.getElementById('subcategoryView').style.display = 'block';
        this.currentView = 'subcategory';
        this.currentCategory = categoryKey;
        this.currentSubcategory = subcategoryKey;

        const category = behaviorData[categoryKey];
        const subcategory = category.subcategories[subcategoryKey];
        
        if (!subcategory) return;

        // 更新标题
        document.getElementById('subcategoryTitle').textContent = subcategory.title;
        
        // 更新面包屑
        this.updateBreadcrumb(['首页', category.title, subcategory.title]);

        // 渲染行为列表
        this.renderBehaviorList(categoryKey, subcategoryKey);
    }

    // 渲染行为列表
    renderBehaviorList(categoryKey, subcategoryKey) {
        const category = behaviorData[categoryKey];
        const subcategory = category.subcategories[subcategoryKey];
        const container = document.getElementById('subcategoryContent');
        
        let html = `
            <div class="subcategory-overview">
                <p>${subcategory.description}</p>
                <div class="behavior-stats">
                    <span class="stat-badge">共 ${subcategory.behaviors.length} 项异常行为</span>
                </div>
            </div>
            <div class="behavior-list">
        `;

        subcategory.behaviors.forEach((behavior, index) => {
            const riskColor = this.getRiskColor(behavior.riskLevel);
            
            html += `
                <div class="behavior-item" style="--risk-color: ${riskColor}" 
                     onclick="app.showBehaviorDetail('${categoryKey}', '${subcategoryKey}', ${index})">
                    <h4>${behavior.title}</h4>
                    <p>${behavior.description}</p>
                    <div class="behavior-meta">
                        <span class="risk-badge ${behavior.riskLevel}">
                            ${behavior.riskLevel === 'high' ? '高风险' : 
                              behavior.riskLevel === 'medium' ? '中风险' : '低风险'}
                        </span>
                        <span class="behavior-id">${behavior.id}</span>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
    }

    // 显示行为详情
    showBehaviorDetail(categoryKey, subcategoryKey, behaviorIndex) {
        this.hideAllViews();
        document.getElementById('behaviorView').style.display = 'block';
        this.currentView = 'behavior';

        const category = behaviorData[categoryKey];
        const subcategory = category.subcategories[subcategoryKey];
        const behavior = subcategory.behaviors[behaviorIndex];
        
        if (!behavior) return;

        // 更新面包屑
        this.updateBreadcrumb(['首页', category.title, subcategory.title, behavior.title]);

        // 渲染行为详情
        this.renderBehaviorDetail(behavior);
    }

    // 渲染行为详情
    renderBehaviorDetail(behavior) {
        const container = document.getElementById('behaviorContent');
        const riskText = behavior.riskLevel === 'high' ? '高风险' : 
                        behavior.riskLevel === 'medium' ? '中风险' : '低风险';
        
        let html = `
            <div class="behavior-header">
                <h1>${behavior.title}</h1>
                <div class="behavior-badges">
                    <span class="risk-badge ${behavior.riskLevel}">${riskText}</span>
                    <span class="behavior-id-badge">${behavior.id}</span>
                </div>
            </div>

            <div class="detail-section behavior-description">
                <div class="section-title">
                    <i class="fas fa-info-circle"></i>
                    行为描述
                </div>
                <div class="section-content">
                    ${behavior.description}
                </div>
            </div>
        `;

        // 真实案例（如果有）
        if (behavior.realCase) {
            html += `
                <div class="detail-section case-study" style="--section-color: #e74c3c">
                    <div class="section-title">
                        <i class="fas fa-newspaper"></i>
                        真实案例分析
                    </div>
                    <div class="section-content">
                        <h4>${behavior.realCase.title}</h4>
                        <p>${behavior.realCase.content}</p>
                        ${behavior.realCase.impact ? `<div class="case-impact"><strong>案例影响：</strong>${behavior.realCase.impact}</div>` : ''}
                        <div class="case-source">
                            <i class="fas fa-external-link-alt"></i>
                            来源：${behavior.realCase.source}
                        </div>
                    </div>
                </div>
            `;
        }

        // 排查方法
        html += `
            <div class="detail-section investigation-methods" style="--section-color: #3498db">
                <div class="section-title">
                    <i class="fas fa-search"></i>
                    排查方法
                </div>
                <div class="section-content">
                    <div class="investigation-item">
                        <h5><i class="fas fa-user"></i> 个人排查</h5>
                        <p>${behavior.personalScreening}</p>
                    </div>
                    <div class="investigation-item">
                        <h5><i class="fas fa-building"></i> 部门排查</h5>
                        <p>${behavior.departmentScreening}</p>
                    </div>
                    <div class="investigation-item">
                        <h5><i class="fas fa-check-circle"></i> 核实阶段</h5>
                        <p>${behavior.verification}</p>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    // 搜索功能
    search() {
        const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
        
        if (keyword === this.searchKeyword) return;
        this.searchKeyword = keyword;

        if (keyword.length === 0) {
            this.clearSearch();
            return;
        }

        if (keyword.length < 2) {
            return;
        }

        this.hideAllViews();
        document.getElementById('searchView').style.display = 'block';
        this.currentView = 'search';
        
        this.updateBreadcrumb(['首页', `搜索：${keyword}`]);
        this.performSearch(keyword);
    }

    // 执行搜索
    performSearch(keyword) {
        const results = [];
        
        // 搜索所有分类中的行为
        Object.keys(behaviorData).forEach(categoryKey => {
            const category = behaviorData[categoryKey];
            
            Object.keys(category.subcategories).forEach(subKey => {
                const subcategory = category.subcategories[subKey];
                
                subcategory.behaviors.forEach((behavior, index) => {
                    if (this.matchesBehavior(behavior, keyword)) {
                        results.push({
                            behavior,
                            categoryKey,
                            subcategoryKey: subKey,
                            behaviorIndex: index,
                            categoryTitle: category.title,
                            subcategoryTitle: subcategory.title
                        });
                    }
                });
            });
        });

        this.renderSearchResults(results, keyword);
    }

    // 检查行为是否匹配关键词
    matchesBehavior(behavior, keyword) {
        const searchFields = [
            behavior.title,
            behavior.description,
            behavior.id
        ].join(' ').toLowerCase();
        
        return searchFields.includes(keyword);
    }

    // 渲染搜索结果
    renderSearchResults(results, keyword) {
        const container = document.getElementById('searchContent');
        
        if (results.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>未找到包含 "${keyword}" 的异常行为</p>
                    <div class="search-suggestions">
                        <p>建议尝试以下关键词：</p>
                        <div class="suggestion-tags">
                            <span onclick="app.searchSuggestion('赌博')">赌博</span>
                            <span onclick="app.searchSuggestion('洗钱')">洗钱</span>
                            <span onclick="app.searchSuggestion('泄露')">泄露</span>
                            <span onclick="app.searchSuggestion('违规')">违规</span>
                            <span onclick="app.searchSuggestion('挪用')">挪用</span>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        let html = `
            <div class="search-summary">
                <p>找到 <strong>${results.length}</strong> 个包含 "<strong>${keyword}</strong>" 的异常行为</p>
            </div>
            <div class="search-results">
        `;

        results.forEach(result => {
            const riskText = result.behavior.riskLevel === 'high' ? '高风险' : 
                           result.behavior.riskLevel === 'medium' ? '中风险' : '低风险';
            
            html += `
                <div class="search-result-item" 
                     onclick="app.showBehaviorDetail('${result.categoryKey}', '${result.subcategoryKey}', ${result.behaviorIndex})">
                    <div class="search-result-title">${result.behavior.title}</div>
                    <div class="search-result-category">
                        ${result.categoryTitle} > ${result.subcategoryTitle}
                    </div>
                    <div class="search-result-description">${result.behavior.description}</div>
                    <div class="search-result-meta">
                        <span class="risk-badge ${result.behavior.riskLevel}">${riskText}</span>
                        <span class="behavior-id">${result.behavior.id}</span>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
    }

    // 搜索建议
    searchSuggestion(keyword) {
        document.getElementById('searchInput').value = keyword;
        this.search();
    }

    // 清除搜索
    clearSearch() {
        document.getElementById('searchInput').value = '';
        this.searchKeyword = '';
        this.showMainView();
    }

    // 按风险等级筛选
    filterByRisk(riskLevel) {
        if (this.currentView !== 'main') return;
        
        const cards = document.querySelectorAll('.category-card');
        
        cards.forEach(card => {
            if (riskLevel === 'all') {
                card.style.display = 'block';
            } else {
                const cardRisk = this.getCategoryRisk(card);
                card.style.display = cardRisk === riskLevel ? 'block' : 'none';
            }
        });
    }

    // 获取分类风险等级
    getCategoryRisk(cardElement) {
        const className = cardElement.className;
        if (className.includes('violations')) return 'high';
        if (className.includes('economic')) return 'medium';
        if (className.includes('business')) return 'mixed';
        return 'low';
    }

    // 返回上级分类
    goBackToCategory() {
        if (this.currentCategory) {
            this.showCategory(this.currentCategory);
        } else {
            this.showMainView();
        }
    }

    // 返回子分类
    goBackToSubcategory() {
        if (this.currentCategory && this.currentSubcategory) {
            this.showSubcategory(this.currentCategory, this.currentSubcategory);
        } else if (this.currentCategory) {
            this.showCategory(this.currentCategory);
        } else {
            this.showMainView();
        }
    }

    // 隐藏所有视图
    hideAllViews() {
        const views = ['mainView', 'categoryView', 'subcategoryView', 'behaviorView', 'searchView'];
        views.forEach(viewId => {
            const element = document.getElementById(viewId);
            if (element) {
                element.style.display = 'none';
            }
        });
    }

    // 更新面包屑导航
    updateBreadcrumb(breadcrumbs) {
        const container = document.getElementById('breadcrumb');
        if (!container) return;

        let html = '';
        breadcrumbs.forEach((item, index) => {
            if (index === breadcrumbs.length - 1) {
                html += `<span class="breadcrumb-item active">${item}</span>`;
            } else {
                html += `<span class="breadcrumb-item">${item}</span>`;
            }
        });

        container.innerHTML = html;
    }

    // 获取风险等级颜色
    getRiskColor(riskLevel) {
        switch (riskLevel) {
            case 'high': return '#e74c3c';
            case 'medium': return '#f39c12';
            case 'low': return '#27ae60';
            default: return '#3498db';
        }
    }

    // 统计信息
    getStats() {
        let totalBehaviors = 0;
        let highRiskCount = 0;
        let mediumRiskCount = 0;
        let lowRiskCount = 0;

        Object.values(behaviorData).forEach(category => {
            totalBehaviors += category.totalCount;
            
            Object.values(category.subcategories).forEach(subcategory => {
                subcategory.behaviors.forEach(behavior => {
                    switch (behavior.riskLevel) {
                        case 'high': highRiskCount++; break;
                        case 'medium': mediumRiskCount++; break;
                        case 'low': lowRiskCount++; break;
                    }
                });
            });
        });

        return {
            total: totalBehaviors,
            highRisk: highRiskCount,
            mediumRisk: mediumRiskCount,
            lowRisk: lowRiskCount
        };
    }

    // 导出数据
    exportData(format = 'json') {
        const stats = this.getStats();
        const exportData = {
            metadata: {
                title: '员工异常行为排查系统数据',
                version: '1.0',
                exportTime: new Date().toISOString(),
                totalBehaviors: stats.total,
                statistics: stats
            },
            data: behaviorData
        };

        if (format === 'json') {
            const blob = new Blob([JSON.stringify(exportData, null, 2)], 
                                { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'behavior_data.json';
            a.click();
            URL.revokeObjectURL(url);
        }
    }
}

// 全局函数（用于HTML onclick）
function showMainView() {
    if (window.app) {
        window.app.showMainView();
    }
}

function showCategory(categoryKey) {
    if (window.app) {
        window.app.showCategory(categoryKey);
    }
}

function showSubcategory(categoryKey, subcategoryKey) {
    if (window.app) {
        window.app.showSubcategory(categoryKey, subcategoryKey);
    }
}

function showBehaviorDetail(categoryKey, subcategoryKey, behaviorIndex) {
    if (window.app) {
        window.app.showBehaviorDetail(categoryKey, subcategoryKey, behaviorIndex);
    }
}

function goBackToCategory() {
    if (window.app) {
        window.app.goBackToCategory();
    }
}

function goBackToSubcategory() {
    if (window.app) {
        window.app.goBackToSubcategory();
    }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BehaviorApp;
}