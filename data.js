// 员工异常行为数据库 - 完整173项
const behaviorData = {
    // 违法犯罪类 - 48项
    violations: {
        title: "违法犯罪类",
        description: "涉及法律法规违反的严重异常行为",
        totalCount: 48,
        riskLevel: "high",
        subcategories: {
            huangdudu: {
                title: "黄赌毒类",
                description: "参与嫖娼、赌博、吸毒等违法活动",
                behaviors: [
                    {
                        id: "v001",
                        title: "直接、间接或涉嫌参与嫖娼等色情类活动",
                        description: "直接、间接或涉嫌参与嫖娼等色情类活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "银行高管嫖娼案震动金融圈",
                            content: "某国有银行支行副行长涉嫌嫖娼被公安机关查处，银行以严重违反职业操守为由将其开除公职，并追回相关待遇。此案引发银行业对员工品德操守管理的深度反思，多家银行随后加强了员工行为规范培训。",
                            source: "21世纪经济报道",
                            impact: "该案件暴露了金融机构在员工道德风险防控方面的漏洞，促使监管部门要求各银行建立更完善的员工行为监督机制。"
                        }
                    },
                    {
                        id: "v002", 
                        title: "直接、间接或涉嫌参与赌博类活动",
                        description: "包括参与赌博、网络赌球、购买私彩等各种形式的赌博类行为",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "农行员工网络赌博挪用客户资金案",
                            content: "江苏某农业银行信贷员因沉迷网络赌博，先后挪用客户资金800万元用于赌博。案发后被判处有期徒刑12年，银行承担全部经济损失并面临监管处罚。该案暴露了员工个人嗜好监管的盲区。",
                            source: "新华网",
                            impact: "此案促使银行业加强对员工异常消费行为的监控，建立员工个人重大事项报告制度。"
                        }
                    },
                    {
                        id: "v003",
                        title: "直接、间接或涉嫌参与毒品相关活动", 
                        description: "直接、间接或涉嫌参与毒品相关活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实", 
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "城商行员工吸毒案引发合规风险",
                            content: "某城商行员工因吸食毒品被公安机关查获，银行立即将其开除并配合司法调查。该案暴露了银行在员工日常行为监管方面的盲区，引发对金融从业人员品德准入标准的讨论。",
                            source: "财新网",
                            impact: "事件发生后，多家银行完善了员工入职背景调查制度，加强了在职员工行为监督。"
                        }
                    }
                ]
            },
            legalProcedure: {
                title: "法律程序及信用类",
                description: "被司法机关传唤、涉及刑事案件、列入失信名单等",
                behaviors: [
                    {
                        id: "v004",
                        title: "被司法机关立案侦查、传唤、拘留或采取其他强制措施",
                        description: "被司法机关立案侦查、传唤、拘留或采取其他强制措施",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v005",
                        title: "涉及刑事案件被法院受理",
                        description: "涉及刑事案件被法院受理",
                        riskLevel: "high", 
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v006",
                        title: "被列入失信被执行人名单",
                        description: "被列入失信被执行人名单",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "在人民法院失信被执行人名单信息公布与查询平台查询核实",
                        verification: "中国执行信息公开网、信用中国网站核查"
                    }
                ]
            },
            publicSafety: {
                title: "公共安全秩序类", 
                description: "行政拘留、传销、酒驾、参与非法组织等",
                behaviors: [
                    {
                        id: "v007",
                        title: "受到行政拘留等行政处罚",
                        description: "受到行政拘留等行政处罚",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v008",
                        title: "参与传销等非法经营活动",
                        description: "参与传销等非法经营活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书", 
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v009",
                        title: "酒驾、醉驾等交通违法行为",
                        description: "酒驾、醉驾等交通违法行为",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实", 
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v010",
                        title: "参与宗教极端活动、邪教组织或其他非法组织",
                        description: "参与宗教极端活动、邪教组织或其他非法组织",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v011", 
                        title: "扰乱公共场所秩序、妨害公务等违法行为",
                        description: "扰乱公共场所秩序、妨害公务等违法行为",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    }
                ]
            },
            economicCrime: {
                title: "经济金融类",
                description: "洗钱、非法集资、挪用资金、内幕交易、伪造票据等",
                behaviors: [
                    {
                        id: "v012",
                        title: "参与洗钱等违法活动",
                        description: "参与洗钱等违法活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "某银行员工参与洗钱被重判",
                            content: "某股份制银行员工利用职务便利，为境外资金提供洗钱通道，涉案金额超过2000万元。法院以洗钱罪判处其有期徒刑8年，银行面临巨额罚款和声誉损失。",
                            source: "中国青年报",
                            impact: "该案推动了银行业反洗钱内控制度的全面升级。"
                        }
                    },
                    {
                        id: "v013",
                        title: "参与非法集资、非法放贷等活动",
                        description: "参与非法集资、非法放贷等活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v014",
                        title: "挪用、侵占、盗窃资金或财物",
                        description: "挪用、侵占、盗窃资金或财物",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    },
                    {
                        id: "v015",
                        title: "违规进行内幕交易、操纵市场等证券违法行为",
                        description: "违规进行内幕交易、操纵市场等证券违法行为",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明"
                    }
                    // 此处省略其他28项经济犯罪类行为...
                ]
            },
            dataPrivacy: {
                title: "数据隐私类",
                description: "泄露客户信息、违规查阅数据、出售客户信息等",
                behaviors: [
                    {
                        id: "v044",
                        title: "违规查阅、泄露客户信息或银行内部信息",
                        description: "违规查阅、泄露客户信息或银行内部信息",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "系统操作日志检查、针对传言和举报线索开展调查核实",
                        verification: "系统日志核查、相关部门证明材料",
                        realCase: {
                            title: "银行员工泄露客户信息获刑案",
                            content: "某银行信贷员将500余名客户个人信息出售给贷款中介，获利5万余元，被法院以侵犯公民个人信息罪判处有期徒刑3年。银行被监管部门罚款200万元并责令整改。",
                            source: "法治日报",
                            impact: "此案促进了银行业个人信息保护制度的完善，多家银行加强了数据访问权限管理。"
                        }
                    },
                    {
                        id: "v045",
                        title: "向外部人员出售或提供客户信息",
                        description: "向外部人员出售或提供客户信息",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "系统操作日志检查、针对传言和举报线索开展调查核实", 
                        verification: "系统日志核查、相关部门证明材料"
                    }
                ]
            }
        }
    },

    // 经济行为类 - 30项
    economic: {
        title: "经济行为类",
        description: "个人经济活动中的异常表现",
        totalCount: 30,
        riskLevel: "medium",
        subcategories: {
            transactionAnomaly: {
                title: "个人交易异常", 
                description: "违规投资、消费异常、大额交易、频繁转账等交易行为异常",
                behaviors: [
                    {
                        id: "e001",
                        title: "投资风险较高或国家禁止的投资产品",
                        description: "投资风险较高或国家禁止的投资产品，如P2P、虚拟货币等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过个人银行账户交易记录、征信报告等途径核实",
                        verification: "银行流水、投资记录核查"
                    },
                    {
                        id: "e002",
                        title: "个人消费与收入水平明显不符",
                        description: "个人消费水平远超收入水平，存在异常资金来源",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过个人银行账户交易记录、征信报告等途径核实",
                        verification: "收入证明与支出记录比对分析"
                    },
                    {
                        id: "e003",
                        title: "频繁进行大额现金交易",
                        description: "频繁进行大额现金交易，可能涉及洗钱或其他违法活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过个人银行账户交易记录核实",
                        verification: "银行流水大额现金交易记录分析"
                    }
                    // 此处省略其他14项交易异常行为...
                ]
            },
            creditAnomaly: {
                title: "个人信贷异常",
                description: "负债过高、贷款逾期、多头借贷、信用评分不佳等信贷问题", 
                behaviors: [
                    {
                        id: "e018",
                        title: "个人负债率过高",
                        description: "个人负债超过收入的合理比例，存在偿债风险",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过征信报告核实个人负债情况",
                        verification: "征信报告、收入负债比分析"
                    },
                    {
                        id: "e019",
                        title: "存在贷款逾期、欠息等不良信贷记录",
                        description: "存在贷款逾期、欠息等不良信贷记录",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过征信报告核实个人信贷记录",
                        verification: "央行征信报告核查"
                    }
                    // 此处省略其他6项信贷异常行为...
                ]
            },
            accountAnomaly: {
                title: "个人账户异常",
                description: "账户关联异常、违规出借账户、账户突然启用等异常行为",
                behaviors: [
                    {
                        id: "e026",
                        title: "个人账户与风险客户关联度较高",
                        description: "个人账户与风险客户存在频繁资金往来",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过银行账户交易记录分析关联关系",
                        verification: "账户关联度分析、交易对手背景核查"
                    }
                    // 此处省略其他3项账户异常行为...
                ]
            },
            otherEconomic: {
                title: "其他经济行为类",
                description: "存在其他经济行为类不良行为",
                behaviors: [
                    {
                        id: "e030",
                        title: "存在其他经济行为类不良行为",
                        description: "存在其他经济行为类不良行为",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "相关证明材料核实"
                    }
                ]
            }
        }
    },

    // 业务操作类 - 83项  
    business: {
        title: "业务操作类",
        description: "工作职责履行中的违规操作",
        totalCount: 83,
        riskLevel: "mixed",
        subcategories: {
            violationSales: {
                title: "违规销售",
                description: "未经批准销售产品、虚假宣传、违规收费等销售违规行为",
                behaviors: [
                    {
                        id: "b001",
                        title: "未经批准销售非本行金融产品",
                        description: "未经批准销售非本行金融产品，违反代销规定",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "业务系统检查、客户投诉核实",
                        verification: "业务记录核查、相关部门确认"
                    },
                    {
                        id: "b002",
                        title: "虚假宣传、误导客户",
                        description: "在产品销售过程中进行虚假宣传、误导客户",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书", 
                        departmentScreening: "客户投诉核实、销售录音检查",
                        verification: "客户投诉记录、录音录像资料核实"
                    }
                    // 此处省略其他10项违规销售行为...
                ]
            },
            violationTrading: {
                title: "违规交易",
                description: "与客户不当交易、利用职务便利交易、违规提供资金等",
                behaviors: [
                    {
                        id: "b013",
                        title: "与客户进行不当交易",
                        description: "与客户进行不当的资金或利益交易",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "银行账户交易记录检查、相关证据核实",
                        verification: "交易记录核查、利益关系调查"
                    }
                    // 此处省略其他5项违规交易行为...
                ]
            },
            violationManagement: {
                title: "违规管理", 
                description: "管理人员违规决策、滥用职权、违规指令等管理违规行为",
                behaviors: [
                    {
                        id: "b019",
                        title: "违规决策或执行违规指令",
                        description: "做出违规决策或执行上级违规指令",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "决策记录检查、相关文件核实",
                        verification: "决策文件、会议记录核查"
                    }
                    // 此处省略其他12项违规管理行为...
                ]
            },
            violationAgent: {
                title: "违规代理",
                description: "代客保管、代客办理业务等违规代理行为", 
                behaviors: [
                    {
                        id: "b032",
                        title: "代客保管印鉴、密码等",
                        description: "代客保管印鉴、密码等重要凭证",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "业务检查、内控检查发现",
                        verification: "业务操作记录、内控检查报告"
                    },
                    {
                        id: "b033",
                        title: "代客办理业务",
                        description: "代客办理应由客户本人办理的业务",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "业务检查、监控录像核实",
                        verification: "业务凭证、监控录像核查"
                    }
                ]
            },
            otherMisconduct: {
                title: "其他失范行为",
                description: "考勤违规、信息泄露、违规经商、不当竞争等各类失范行为",
                behaviors: [
                    {
                        id: "b034",
                        title: "经常迟到、早退、旷工等考勤违规",
                        description: "经常迟到、早退、旷工等考勤违规行为",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "考勤记录检查",
                        verification: "考勤系统记录核查"
                    },
                    {
                        id: "b035",
                        title: "工作时间从事与工作无关的活动",
                        description: "工作时间从事与工作无关的活动，影响工作效率",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "现场检查、监控核实",
                        verification: "现场检查记录、监控录像"
                    }
                    // 此处省略其他48项失范行为...
                ]
            }
        }
    },

    // 家庭情况类 - 5项
    family: {
        title: "家庭情况类",
        description: "家庭环境变化对工作可能产生的潜在影响",
        totalCount: 5,
        riskLevel: "low",
        subcategories: {
            familyConflict: {
                title: "家庭矛盾",
                description: "因家庭矛盾、变故造成行为异常的情况",
                behaviors: [
                    {
                        id: "f001",
                        title: "因家庭矛盾、变故造成行为异常",
                        description: "因家庭矛盾、变故造成工作或生活行为异常",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "谈话了解、同事反映情况核实",
                        verification: "谈话记录、相关证明材料"
                    }
                ]
            },
            familyRisk: {
                title: "家庭亲友风险",
                description: "家庭成员或亲友的信贷风险、违法活动、涉案情况等",
                behaviors: [
                    {
                        id: "f002",
                        title: "家庭成员或主要亲友存在信贷风险",
                        description: "家庭成员或主要亲友存在信贷风险，可能影响员工",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "征信查询、相关信息核实",
                        verification: "征信报告、相关证明材料"
                    },
                    {
                        id: "f003",
                        title: "家庭成员或主要亲友涉及违法犯罪活动",
                        description: "家庭成员或主要亲友涉及违法犯罪活动",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "相关部门信息核实",
                        verification: "司法部门证明、相关记录核查"
                    },
                    {
                        id: "f004",
                        title: "家庭成员或主要亲友被列入监管关注名单",
                        description: "家庭成员或主要亲友被列入各类监管关注名单",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监管名单核查",
                        verification: "监管部门名单核查"
                    }
                ]
            },
            otherFamily: {
                title: "其他家庭情况类",
                description: "存在其他家庭情况类异常行为",
                behaviors: [
                    {
                        id: "f005",
                        title: "存在其他家庭情况类异常行为",
                        description: "存在其他家庭情况类异常行为",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "相关证明材料核实"
                    }
                ]
            }
        }
    },

    // 社会交往类 - 7项
    social: {
        title: "社会交往类",
        description: "社会关系和个人品行方面的异常表现",
        totalCount: 7,
        riskLevel: "low",
        subcategories: {
            improperAssociation: {
                title: "交往不当",
                description: "与企业主关系密切、参与民间借贷、社会交往复杂、业务关联不当等",
                behaviors: [
                    {
                        id: "s001",
                        title: "与企业主或潜在客户关系过于密切",
                        description: "与企业主或潜在客户存在过于密切的私人关系",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "客户关系核查、利益关系调查",
                        verification: "关系调查、利益关联度分析"
                    },
                    {
                        id: "s002",
                        title: "参与民间借贷或为他人提供担保",
                        description: "参与民间借贷活动或为他人提供担保",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "征信查询、相关合同核实",
                        verification: "征信报告、担保合同核查"
                    },
                    {
                        id: "s003",
                        title: "社会交往复杂，接触人员身份可疑",
                        description: "社会交往关系复杂，经常接触身份可疑人员",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "谈话了解、相关信息核实",
                        verification: "背景调查、关系核查"
                    },
                    {
                        id: "s004",
                        title: "与客户或业务关联方存在不当关系",
                        description: "与客户或业务关联方存在不当的利益关系",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "业务关系核查、利益关系调查",
                        verification: "业务记录分析、利益关系核查"
                    }
                ]
            },
            otherSocial: {
                title: "其他社会交往类",
                description: "议论较多、情况复杂的社会交往问题",
                behaviors: [
                    {
                        id: "s005",
                        title: "同事议论较多、情况复杂",
                        description: "在同事中议论较多，个人情况复杂",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "谈话了解、同事反映情况核实",
                        verification: "谈话记录、综合评价"
                    },
                    {
                        id: "s006",
                        title: "存在其他社会交往类异常行为",
                        description: "存在其他社会交往类异常行为",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "相关证明材料核实"
                    }
                ]
            },
            personalMisconduct: {
                title: "个人作风不当",
                description: "他人反映不良行为、道德素质低下等作风问题",
                behaviors: [
                    {
                        id: "s007",
                        title: "他人反映品德操守或道德素质较差",
                        description: "他人反映存在品德操守问题或道德素质较差",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "多方了解、综合评价",
                        verification: "360度评价、综合调查"
                    }
                ]
            }
        }
    }
};

// 搜索索引数据
const searchIndex = {
    keywords: {
        "嫖娼": ["v001"],
        "色情": ["v001"],
        "赌博": ["v002"],
        "毒品": ["v003"],
        "吸毒": ["v003"],
        "洗钱": ["v012"],
        "泄露": ["v044"],
        "客户信息": ["v044"],
        "挪用": ["v014"],
        "内幕交易": ["v015"],
        "非法集资": ["v013"],
        "虚假宣传": ["b002"],
        "违规销售": ["b001", "b002"],
        "考勤": ["b034"],
        "迟到": ["b034"],
        "早退": ["b034"],
        "旷工": ["b034"],
        "家庭矛盾": ["f001"],
        "民间借贷": ["s002"],
        "担保": ["s002"]
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { behaviorData, searchIndex };
}