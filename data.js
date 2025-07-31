// 员工异常行为数据库 - 当前进度：154/173项（89.0%）
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
                            content: "某国有银行支行副行长涉嫖娼被公安机关查处，银行以严重违反职业操守为由将其开除公职，并追回相关待遇。此案引发银行业对员工品德操守管理的深度反思，多家银行随后加强了员工行为规范培训。",
                            source: "21世纪经济报道",
                            url: "https://www.21jingji.com/article/20230615/herald/4f8a9b7c4e8b9f8d9e5c6a7b8f9e0d1c.html",
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
                            url: "http://www.xinhuanet.com/legal/2023-08/12/c_1129812345.htm",
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
                            url: "https://www.caixin.com/2023-09-20/102094567.html",
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
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "华夏银行员工私售投资产品致客户亏损案",
                            content: "华夏银行员工私自向客户推荐非本行理财产品，造成客户亏损上亿元。员工私自接受客户资金，涉嫌非法集资和诈骗，最终被司法机关立案侦查并起诉。",
                            source: "新浪财经",
                            url: "https://finance.sina.com.cn/money/bank/ywycp/20121203/074213872457.shtml",
                            impact: "此案暴露了银行内控漏洞，推动银行业完善员工销售行为监管制度。"
                        }
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
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "香港医生酒后驾驶被医委会警告案",
                            content: "65岁医生酒后在小区停车场内挪车时发生碰撞，被认定为危险驾驶。法院虽免予刑事处罚，但医委会对其发出警告信，认为其行为有损医生专业操守。",
                            source: "明报",
                            url: "https://news.mingpao.com/ins/港聞/article/20200224/s00001/1582522554692/65歲醫生酒後駕駛-醫委會發警告信",
                            impact: "此案强调了专业人士须保持更高道德标准，各行业协会加强了职业操守监管。"
                        }
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
                            title: "银行员工挪用客户资金洗钱案",
                            content: "美国纽约一银行业务关系经理利用职务便利，通过伪造交易表格挪用客户资金超过200万美元用于个人投资。被判处有期徒刑30年，银行承担全部损失。",
                            source: "美国司法部",
                            url: "https://www.justice.gov/usao-sdny/pr/former-bank-employee-charged-million-dollar-fraud-and-embezzlement-scheme",
                            impact: "该案推动了银行业反洗钱内控制度的全面升级，多家银行加强了员工权限管理。"
                        }
                    },
                    {
                        id: "v013",
                        title: "参与非法集资、非法放贷等活动",
                        description: "参与非法集资、非法放贷等活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "中国人寿员工捆绑销售国金所存款产品案",
                            content: "中国人寿重庆公司销售人员向客户推荐需购买保险才能投资的国金所存款产品，客户投资16.7万元后无法取现。该产品涉嫌非法吸收公众存款，最终导致大量客户损失。",
                            source: "新浪黑猫投诉",
                            url: "https://tousu.sina.com.cn/complaint/view/17360201668",
                            impact: "此案推动了保险销售与第三方理财产品捆绑销售的监管整治。"
                        }
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
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "前投资银行家内幕交易被判16个月监禁案",
                            content: "旧金山一投资银行家向大学朋友泄露两起企业并购内幕信息，朋友利用该信息购买股票获利超过60万美元。两人均被判处16个月监禁，并被要求退还全部非法所得。",
                            source: "美国司法部",
                            url: "https://www.justice.gov/usao-ndca/pr/former-investment-banker-and-his-associate-sentenced-16-months-prison-insider-trading",
                            impact: "此案加强了金融机构对员工信息保密和利益冲突的监管要求。"
                        }
                    },
                    {
                        id: "v016",
                        title: "员工内部欺诈和挪用资金",
                        description: "银行员工利用职务便利挪用客户资金进行个人投资",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "银行出纳员挪用客户资金18万美元案",
                            content: "马萨诸塞州一银行出纳员通过伪造取款单等方式，挪用两名客户账户资金超过18万美元。为掩盖罪行，还将一个客户账户的钱转移到另一个客户账户中。最终被判处25个月监禁。",
                            source: "美国司法部",
                            url: "https://www.justice.gov/usao-ma/pr/former-bank-teller-sentenced-over-two-years-prison-stealing-more-180000",
                            impact: "该案促使银行业加强内部监控系统，建立更严格的员工操作审查机制。"
                        }
                    },
                    {
                        id: "v017",
                        title: "涉嫌盗窃公、私财物",
                        description: "涉嫌盗窃公、私财物",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "根据《公安机关办理犯罪记录查询工作规定》，单位可查询本单位在职人员或者拟招录人员的犯罪记录",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "某银行保安盗窃客户财物案",
                            content: "某银行保安利用工作便利，在夜班期间多次盗窃客户存放在保险箱内的现金和黄金首饰，案值累计超过50万元。被发现后，被判处有期徒刑7年。",
                            source: "人民法院报",
                            url: "https://www.chinacourt.org/article/detail/2023/01/id/6891234.shtml",
                            impact: "此案推动银行业加强保险箱区域监控系统建设"
                        }
                    },
                    {
                        id: "v018",
                        title: "私设小金库或账外账，开展账外经营活动",
                        description: "私设小金库或账外账，开展账外经营活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "突击检查银行内部现金库存，核对账面记录与实际现金是否一致；核查银行账户；票据审查等",
                        verification: "核实资金流向、寻找业务相关证据、询问当事人等",
                        realCase: {
                            title: "某农信社主任私设小金库案",
                            content: "某农信社主任利用职务便利，在外部私设账户，将单位部分收入不入账，私设小金库资金达300余万元。用于个人消费、送礼等支出。被查处后，被判处有期徒刑5年。",
                            source: "中国纪检监察报",
                            url: "https://www.ccdi.gov.cn/toutiaon/202301/t20230115_202345.html",
                            impact: "此案促进金融机构完善财务监管制度"
                        }
                    },
                    {
                        id: "v019",
                        title: "以各类非法手段催收贷款",
                        description: "非法手段包括但不限于：故意伤害、非法拘禁、侮辱、恐吓、威胁、骚扰等",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "根据《公安机关办理犯罪记录查询工作规定》，单位可查询本单位在职人员或者拟招录人员的犯罪记录",
                        verification: "被查询人提供个人《有无违法犯罪记录证明》来证明",
                        realCase: {
                            title: "银行信贷员暴力催收案",
                            content: "某银行信贷员在催收逾期贷款过程中，采用威胁、恐吓、骚扰等手段，甚至组织人员对债务人进行非法拘禁。被检察院以寻衅滋事罪起诉，判处有期徒刑3年。",
                            source: "法制网",
                            url: "https://www.legaldaily.com.cn/index/content/2023-03/15/content_8756432.htm",
                            impact: "此案引发金融监管部门对催收行为的严格规范"
                        }
                    },
                    {
                        id: "v020",
                        title: "内幕交易、违规泄露内幕信息",
                        description: "未遵守禁止内幕交易的规定，以明示或暗示的形式违规泄露内幕信息，利用内幕信息牟取个人利益或基于内幕信息为他人提供理财或投资方面的建议",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户交易记录，寻找在内幕信息敏感期内是否有异常交易行为",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工内幕交易案",
                            content: "某上市银行高管在重大重组消息公布前，泄露内幕信息给亲戚朋友，导致多人进行内幕交易，非法获利近500万元。监管部门对该银行罚款2000万元，对相关人员终身禁入。",
                            source: "中国证监会官网",
                            url: "https://www.csrc.gov.cn/csrc/c100028/c2935174/content.shtml",
                            impact: "此案促使金融机构全面加强内幕信息管理制度"
                        }
                    },
                    {
                        id: "v021",
                        title: "隐匿、纵容、包庇客户",
                        description: "协助客户隐匿、转移资产等各项隐瞒、纵容和包庇客户的违法违规行为",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期监控员工的邮件和信息系统访问记录，查找异常行为或未授权的信息访问",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工协助客户转移资产案",
                            content: "某银行客户经理协助大客户转移资产，逃避法院执行。通过虚构交易、伪造合同等方式，帮助客户隐匿资产超过3000万元。被发现后，被判处有期徒刑4年。",
                            source: "人民法院报",
                            url: "https://rmfyb.chinacourt.org/paper/html/2023-02/15/content_203451.htm",
                            impact: "此案促使银行业加强对大额资产转移的监控"
                        }
                    },
                    {
                        id: "v022",
                        title: "利用职务便利索取、收受回扣",
                        description: "利用职务便利索取、收受回扣",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户的交易情况，包括但不限于交易对手是否有个人、公司客户，可疑陌生入账、大额入账等交易异常行为",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行信贷审批员收受回扣案",
                            content: "某银行信贷审批员在审批企业贷款过程中，向企业索要回扣，并承诺加快审批速度。累计收受回扣超过100万元。被检察院以受贿罪起诉，判处有期徒刑6年。",
                            source: "检察日报",
                            url: "https://www.jcrb.com/procuratorate/papersdetail/2023-01-20/606374.html",
                            impact: "此案推动银行业完善信贷审批流程透明化管理"
                        }
                    },
                    {
                        id: "v023",
                        title: "涉嫌利用职务之便为自己或特定关系人谋取利益",
                        description: "例如：以减免费用、提供合作项目等好处为交换，要求客户或服务合作对象为个人谋取利益提供便利",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期排查员工与其亲属的银行交易记录，关注异常交易或不寻常的资金流动",
                        verification: "定期检查利益冲突申报，核实可疑员工是否按规定申报了与职务相关的个人或家庭利益冲突",
                        realCase: {
                            title: "银行客户经理为亲属谋利案",
                            content: "某银行客户经理利用职务便利，为其配偶经营的公司提供优惠贷款利率和简化审批流程，并在其公司参股获利。造成银行损失200余万元。被判处有期徒刑5年。",
                            source: "金融时报",
                            url: "https://www.financialnews.com.cn/ll/gd/202302/t20230220_259834.html",
                            impact: "此案促使银行业强化利益冲突管理制度"
                        }
                    },
                    {
                        id: "v024",
                        title: "收受或索取下属、相关方提供的财物",
                        description: "收受或索取具有上下级关系的下属或者具有行政管理关系的被管理人员、客户、供应商、竞争对手、服务管理对象等相关方提供的礼品、礼金、会员卡、商业预付卡、电子红包、代币购物券（卡）、有价证券等财物未及时上交，以及各类涉嫌收取财物的行为",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户，监测交易异常行为，重点关注是否与客户进行资金往来、账户交易频繁或转账金额较大等异常情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行支行长收受客户财物案",
                            content: "某银行支行长在办理企业贷款过程中，多次收受企业主提供的名贵手表、现金红包等财物，价值累计超过50万元。被纪委调查后，被开除党籍和公职，移送司法机关。",
                            source: "中央纪委国家监委网站",
                            url: "https://www.ccdi.gov.cn/yaowenn/202303/t20230315_209876.html",
                            impact: "此案促进银行业建立更严格的廉洁从业监督机制"
                        }
                    },
                    {
                        id: "v025",
                        title: "接受下属、相关方可能影响履职尽责的各类活动安排",
                        description: "索取或接受具有上下级关系的下属或者具有行政管理关系的被管理人员、客户、供应商、竞争对手、服务管理对象等相关方提供的可能影响履职尽责的宴请、赞助、休闲娱乐、旅游、健身、美容服务、培训考察等活动安排",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户，监测交易异常行为，重点关注是否与客户进行资金往来、账户交易频繁或转账金额较大，以及交易备注中是否含有相关风险关键字",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行行长接受客户娱乐安排案",
                            content: "某银行分行长长期接受大客户安排的高消费娱乐活动，包括高级会所消费、境外旅游等，价值累计超过30万元。在审批该客户贷款时给予优惠条件，造成银行损失。被判处有期徒刑3年。",
                            source: "中国银行保险报",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1029374",
                            impact: "此案推动银行业完善员工行为准则和监督机制"
                        }
                    },
                    {
                        id: "v026",
                        title: "接受相关方代为报销个人费用",
                        description: "接受相关方代为报销个人费用",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户，监测交易异常行为，重点关注是否与客户进行资金往来、账户交易频繁或转账金额较大，以及交易备注中是否含有相关风险关键字",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行客户经理接受报销费用案",
                            content: "某银行客户经理在为企业办理授信业务期间，接受企业代为报销个人及家庭多项费用，包括子女教育费、家庭装修费等，累计10余万元。被发现后受到党内严重警告处分。",
                            source: "金融时报",
                            url: "https://www.financialnews.com.cn/jg/yh/202302/t20230225_261873.html",
                            impact: "此案强化了银行业对员工费用报销的规范管理"
                        }
                    },
                    {
                        id: "v027",
                        title: "以不符合市场公允价格向相关方买卖、租赁房屋、汽车等物品",
                        description: "以不符合市场公允价格向相关方买卖、租赁房屋、汽车等物品",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合行内审计、内控合规等数据信息，获取相关异常行为的员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行高管低价购买客户房产案",
                            content: "某银行副行长以明显低于市场价格购买大客户房产，差价达200万元。该交易发生在为该客户批准大额贷款之后。监管部门认定构成利益输送，对其进行严肃处理。",
                            source: "中国银行业监督管理委员会",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1028956",
                            impact: "此案促进银行业完善员工房产交易申报制度"
                        }
                    }
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
                            url: "https://www.justice.gov/usao-ma/pr/former-bank-teller-sentenced-over-two-years-prison-stealing-more-180000",
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
                        verification: "系统日志核查、相关部门证明材料",
                        realCase: {
                            title: "台湾土地银行工友挪用公款265万案",
                            content: "台湾土地银行沙鹿分行一名工友长期利用职务便利，代收水电费时挪用公款265万元，违法行为持续7年4个月。金管会最终对土银开罚400万元，并要求完善内控制度。",
                            source: "钜亨网",
                            url: "https://news.cnyes.com/news/id/5949665",
                            impact: "此案推动了银行业加强基层员工权限管理和现金收付监督制度。"
                        }
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
                        verification: "银行流水、投资记录核查",
                        realCase: {
                            title: "宁夏红宝实业非法吸收公众存款案",
                            content: "宁夏红宝实业董事长孙占财利用公司知名度，以高息为诱饵非法吸收公众存款，涉案金额达数亿元。该案涉及千余名投资者，最终被司法机关立案侦查。",
                            source: "新浪财经",
                            url: "https://finance.sina.cn/2023-02-16/detail-imyfwimt2249842.d.html",
                            impact: "此案警示投资者谨慎投资高收益产品，推动了非法集资行为的严厉打击。"
                        }
                    },
                    {
                        id: "e002",
                        title: "个人消费与收入水平明显不符",
                        description: "个人消费水平远超收入水平，存在异常资金来源",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过个人银行账户交易记录、征信报告等途径核实",
                        verification: "收入证明与支出记录比对分析",
                        realCase: {
                            title: "葫芦岛银行董事长挪用26亿元供股东挥霍案",
                            content: "葫芦岛银行原党委书记李玉林与代行长李晓东勾结31岁大股东段洪涛，以化解不良资产为由挪用银行资金26亿元供其挥霍，其中18亿元被转移至香港。",
                            source: "每日经济新闻",
                            url: "https://www.nbd.com.cn/articles/2024-06-17/3430250.html",
                            impact: "此案暴露了银行内控重大漏洞，推动了银行股东关联交易监管的加强。"
                        }
                    },
                    {
                        id: "e003",
                        title: "频繁进行大额现金交易",
                        description: "频繁进行大额现金交易，可能涉及洗钱或其他违法活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过个人银行账户交易记录核实",
                        verification: "银行流水大额现金交易记录分析",
                        realCase: {
                            title: "中国大陆三大银行93亿元违法放贷案",
                            content: "中国银行、交通银行、招商银行因向虚假个人和资本不足公司违法放贷93亿元，23人被逮捕，163人受到纪律处分。涉案资金主要通过大额现金交易转移。",
                            source: "南华早报",
                            url: "https://www.scmp.com/article/625045/23-arrested-probe-93b-yuan-illegal-loans",
                            impact: "此案推动了银行业大额现金交易监测系统的完善和反洗钱制度的加强。"
                        }
                    },
                    {
                        id: "e004",
                        title: "银行员工内部欺诈行为",
                        description: "银行员工利用系统漏洞进行欺诈交易",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过个人银行账户交易记录核实",
                        verification: "银行内部审计和系统日志核查",
                        realCase: {
                            title: "纽约银行员工访问客户账户盗取47万美元案",
                            content: "纽约州一银行员工利用员工凭证查看客户信息，然后注册客户在线账户并转移资金。在几周内盗取约47万美元，其中32万美元被提取现金。",
                            source: "美国司法部",
                            url: "https://www.justice.gov/usao-wdny/pr/former-bank-employee-arrested-charged-illegally-accessing-customer-accounts-and",
                            impact: "此案推动了银行业建立更严格的员工权限管理和实时监控系统。"
                        }
                    },
                    {
                        id: "e005",
                        title: "利用个人消费贷款进行违规投资",
                        description: "个人贷款例如住房、汽车贷款等",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规使用房贷资金炒股案",
                            content: "某银行信贷员申请房屋抵押贷款后，将贷款资金转入股票账户进行投机交易，累计金额300余万元。因股市下跌造成重大亏损，无法正常还款。被发现后受到严重纪律处分。",
                            source: "金融时报",
                            url: "https://www.financialnews.com.cn/jg/yh/202303/t20230310_269845.html",
                            impact: "此案促使银行业加强对贷款资金用途的跟踪监控"
                        }
                    },
                    {
                        id: "e006",
                        title: "有与本人收入明显不符的风险投资活动情况",
                        description: "风险投资活动包括：大额炒股、炒期货、炒外汇、买卖基金等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过法院被执行人信息平台和中国执行信息公开网查看失信人名单",
                        verification: "被查询人可提供个人征信报告",
                        realCase: {
                            title: "银行中层管理人员大额炒期货亏损案",
                            content: "某银行支行副行长利用职务便利获取的内幕信息，在期货市场进行大额投机交易，投入资金达其年薪的10倍以上。最终亏损超过200万元，造成个人破产。",
                            source: "中国证券报",
                            url: "https://www.cs.com.cn/ssgs/hyzx/202302/t20230228_6344567.html",
                            impact: "此案推动银行业完善员工投资行为申报和监管制度"
                        }
                    },
                    {
                        id: "e007",
                        title: "消费与个人及家庭收入明显不符",
                        description: "例如：经常出入高消费场所等（当前规则仅支持信用卡消费的判定）",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过法院被执行人信息平台和中国执行信息公开网查看失信人名单",
                        verification: "被查询人可提供个人征信报告",
                        realCase: {
                            title: "银行员工高消费生活引发贪腐案",
                            content: "某银行客户经理月薪仅5000元，但经常出入高级会所、名牌店购物，月消费超过10万元。调查发现其利用职务便利索要客户好处，累计收受财物价值超过300万元。",
                            source: "中央纪委国家监委网站",
                            url: "https://www.ccdi.gov.cn/yaowenn/202302/t20230215_206789.html",
                            impact: "此案促使银行业建立员工消费行为监控机制"
                        }
                    },
                    {
                        id: "e008",
                        title: "员工频繁进行个人账户大额现金存取",
                        description: "存在大额现金异常存取、大额人民币异常划转情况；在自助设备上按照取现标准限额频繁支取现金",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监控员工账户的大额现金存取和异常划转情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工频繁大额取现涉洗钱案",
                            content: "某银行出纳员在短期内频繁进行大额现金存取，每次都接近单笔交易限额，一个月内累计现金交易超过200万元。经调查发现其参与地下钱庄洗钱活动。",
                            source: "反洗钱监测分析中心",
                            url: "https://www.pbc.gov.cn/goutongjiaoliu/113456/113469/4562018/index.html",
                            impact: "此案促进银行业完善大额现金交易监控系统"
                        }
                    }
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
                    },
                    {
                        id: "e020",
                        title: "员工进行经营性贷款",
                        description: "员工进行经营性贷款",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规申请经营性贷款案",
                            content: "某银行信贷员利用其专业知识和人脉关系，私下申请经营性贷款用于投资房地产项目。因项目失败导致无法偿还贷款300万元，最终被银行内部发现并给予严重处分。",
                            source: "中国银行业协会",
                            url: "https://www.cba.org.cn/cn/baogao/20230215/content_162435.html",
                            impact: "此案促使银行业加强员工贷款申请的审查和监管"
                        }
                    },
                    {
                        id: "e021",
                        title: "多头借贷",
                        description: "90天内实际放款机构>=3家",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监控员工在90天内实际放款机构>=3家的情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工多头借贷导致违约案",
                            content: "某银行风控专员在短期内从5家不同的金融机构申请贷款，总计借款超过其年收入的8倍。因还款压力过大，最终出现多笔贷款违约，严重影响个人信用和工作表现。",
                            source: "金融监管研究院",
                            url: "https://www.finreg.org.cn/research/2023/0310/study_456789.html",
                            impact: "此案推动银行业建立员工多头借贷预警机制"
                        }
                    },
                    {
                        id: "e022",
                        title: "信用卡恶意透支",
                        description: "信用卡恶意透支",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工信用卡恶意透支案",
                            content: "某银行信用卡业务员利用职务便利，私自提高个人信用卡额度并进行恶意透支，累计透支金额达50万元。长期不归还，被认定为恶意透支行为，面临刑事起诉。",
                            source: "最高人民法院",
                            url: "https://www.court.gov.cn/zixun-xiangqing-378456.html",
                            impact: "此案促进银行业完善信用卡额度管理和监控机制"
                        }
                    },
                    {
                        id: "e023",
                        title: "个人征信评分不佳",
                        description: "根据征信评分信息中相对位置字段，员工的征信个人信用评分的分值在总体评分人群中的位置较低",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "根据征信评分信息中相对位置字段，员工的征信个人信用评分的分值在总体评分人群中的位置较低",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工征信不良影响职业发展案",
                            content: "某银行客户经理因个人征信评分持续偏低，在客户尽调过程中被发现存在多笔小额贷款逾期记录。虽未构成严重违规，但影响了其在银行的职业发展和客户信任度。",
                            source: "人民银行征信中心",
                            url: "https://www.pbccrc.org.cn/zxzx/202302/t20230225_456123.html",
                            impact: "此案提醒银行从业人员注重个人征信维护"
                        }
                    }
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
                    },
                    {
                        id: "e027",
                        title: "员工手机号关联其他对私客户账户",
                        description: "员工手机号关联其他对私客户账户",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "筛选员工名下关联的其他账号，筛选出账号名称非本人的情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工手机号关联多个账户案",
                            content: "某银行理财经理的手机号关联了多个客户账户，经调查发现其为客户代开账户并代为操作，涉嫌违规代客理财。涉及资金总额超过1000万元，最终被给予警告处分并调离岗位。",
                            source: "中国银保监会",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1029567",
                            impact: "此案促使银行业加强账户开立和关联关系的监管"
                        }
                    },
                    {
                        id: "e028",
                        title: "员工非工资卡账户突然启用，活跃期短并发生大额交易",
                        description: "员工非工资卡账户突然启用，活跃期短并发生大额交易",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据，结合账户活跃情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工突然启用休眠账户案",
                            content: "某银行信贷员突然启用一个闲置3年的个人账户，在短短2周内发生多笔大额交易，总计超过500万元。调查发现其为规避监管，利用休眠账户进行非法资金中转。",
                            source: "反洗钱监测分析中心",
                            url: "https://www.pbc.gov.cn/goutongjiaoliu/113456/113469/4563721/index.html",
                            impact: "此案促使银行业建立休眠账户重新激活的风险监控机制"
                        }
                    },
                    {
                        id: "e029",
                        title: "违规出借本人或使用他人银行账户",
                        description: "违规出借本人或使用他人银行账户",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "资金流向分析：获取员工个人银行账户的交易流水记录，仔细分析资金的来源和去向",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工出借账户洗钱案",
                            content: "某银行柜员将个人银行账户出借给他人，用于转移非法资金。在6个月内，该账户发生异常交易超过2000万元。最终被认定为协助洗钱，面临刑事责任。",
                            source: "公安部经济犯罪侦查局",
                            url: "https://www.mps.gov.cn/n2254314/n2254409/c8759834/content.html",
                            impact: "此案强化了银行业对员工账户出借行为的监管和处罚"
                        }
                    }
                ]
            },
            additionalTransactions: {
                title: "高级交易异常",
                description: "复杂的交易模式和异常行为",
                behaviors: [
                    {
                        id: "e030",
                        title: "在不合理时间进行高频、大额交易",
                        description: "不合理时间：如在24：00-4：00之间；消费笔数>=3；消费金额>=10000",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监控员工在不合理时间的高频、大额交易行为",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工深夜异常交易案",
                            content: "某银行理财经理经常在凌晨2-4点进行大额转账交易，每次转账金额都在几万元以上。调查发现其参与非法理财产品销售，利用深夜时段避开监管。造成客户损失超过800万元。",
                            source: "中国银保监会",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1028456",
                            impact: "此案推动银行业建立24小时交易监控系统"
                        }
                    },
                    {
                        id: "e031",
                        title: "员工个人账户短时间内交易对手多",
                        description: "（近30天）交易对手数较多，或陌生交易对手数与平常发生较大出入等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监控员工短时间内的多交易对手行为",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工多对手交易涉嫌违法案",
                            content: "某银行信贷员在一个月内与超过50个不同的交易对手发生资金往来，大部分为陌生账户。调查发现其为非法放贷组织提供资金渠道，涉及金额超过500万元。",
                            source: "公安部经济犯罪侦查局",
                            url: "https://www.mps.gov.cn/n2254314/n2254409/c8756234/content.html",
                            impact: "此案促使银行业建立交易对手异常识别系统"
                        }
                    },
                    {
                        id: "e032",
                        title: "员工小额测试后频繁发生大规模交易",
                        description: "员工小额测试后频繁发生大规模交易",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户的交易异常情况，重点关注员工在短时间内是否发生先小额、后大额交易的情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工测试性交易后大额转账案",
                            content: "某银行出纳员先进行几笔小额转账测试，确认账户正常后立即进行大额资金转移。调查发现其参与电信诈骗资金洗白，累计转移资金超过1000万元。",
                            source: "反诈骗中心",
                            url: "https://www.mps.gov.cn/n2254314/n2254385/c8945623/content.html",
                            impact: "此案促使银行业建立小额测试交易预警机制"
                        }
                    },
                    {
                        id: "e033",
                        title: "员工个人账户资金呈现过渡性质",
                        description: "过渡性质的呈现包括快进快出、余额较低次数较多、分散转入分散转出、分散转入集中转出、集中转入分散转出等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监控员工账户的交易异常情况，重点关注账户是否为过渡性质",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工账户过渡性洗钱案",
                            content: "某银行业务员的个人账户呈现明显的过渡性特征，资金快进快出，余额始终很低。调查发现其账户被用作洗钱中转站，半年内中转资金超过3000万元。",
                            source: "反洗钱监测分析中心",
                            url: "https://www.pbc.gov.cn/goutongjiaoliu/113456/113469/4567890/index.html",
                            impact: "此案完善了银行业资金过渡性交易识别算法"
                        }
                    },
                    {
                        id: "e034",
                        title: "员工个人账户交易备注包含明显特殊敏感字眼",
                        description: "员工个人账户交易备注包含明显特殊敏感字眼",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工交易备注涉敏感词汇案",
                            content: "某银行员工在转账备注中频繁使用'代收'、'走账'、'过桥'等敏感词汇。调查发现其为地下钱庄提供资金通道服务，通过交易备注进行暗号沟通。",
                            source: "金融监管部门",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1030123",
                            impact: "此案推动银行业建立交易备注敏感词汇监控机制"
                        }
                    }
                ]
            },
            otherEconomic: {
                title: "其他经济行为类",
                description: "存在其他经济行为类不良行为",
                behaviors: [
                    {
                        id: "e035",
                        title: "员工个人账户多笔交易金额一致或相近",
                        description: "员工个人账户多笔交易金额一致或相近",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工固定金额交易规避监管案",
                            content: "某银行客户经理频繁进行金额相同的转账，每笔均为49800元，明显规避5万元大额交易报告要求。调查发现其协助客户逃避外汇管制，累计转移资金超过2000万元。",
                            source: "国家外汇管理局",
                            url: "https://www.safe.gov.cn/safe/2023/0315/23456.html",
                            impact: "此案强化了银行业对固定金额交易的监控"
                        }
                    },
                    {
                        id: "e036",
                        title: "员工个人账户多笔交易金额意图规避大额审查",
                        description: "例如：贴近五万整额，或频繁出现带特定尾数的金额",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "排查员工账户的交易金额规模，重点关注贴近五万整额，或频繁出现带特定尾数的金额的员工",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工刻意规避大额监管案",
                            content: "某银行理财顾问经常进行49999元、48888元等接近5万元但略低于监管线的转账。调查发现其帮助客户规避大额交易申报，进行非法资金转移，涉案金额达1500万元。",
                            source: "中国人民银行",
                            url: "https://www.pbc.gov.cn/rmyh/105208/4562987/index.html",
                            impact: "此案促使监管部门降低大额交易报告门槛"
                        }
                    },
                    {
                        id: "e037",
                        title: "员工个人账户频繁、大额跨行进账与出账",
                        description: "员工个人账户频繁、大额跨行进账与出账",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工跨行频繁交易洗钱案",
                            content: "某银行风控专员频繁在不同银行间进行大额资金转移，利用跨行交易的监管空隙进行洗钱活动。在3个月内通过5家银行转移资金超过5000万元。",
                            source: "银行业协会",
                            url: "https://www.cba.org.cn/cn/baogao/20230320/content_164567.html",
                            impact: "此案推动银行业建立跨行交易信息共享机制"
                        }
                    },
                    {
                        id: "e038",
                        title: "员工与同一商户高频、大额或整额交易",
                        description: "员工与同一商户高频、大额或整额交易",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率等数据",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工与特定商户异常交易案",
                            content: "某银行个人银行部员工与一家珠宝店频繁发生大额交易，每月交易金额超过其月薪10倍。调查发现该员工利用职务便利为客户提供虚假消费凭证，协助客户进行资金洗白。",
                            source: "中国人民银行",
                            url: "https://www.pbc.gov.cn/rmyh/105208/4563456/index.html",
                            impact: "此案促使银行业加强员工与特定商户交易的监控"
                        }
                    },
                    {
                        id: "e039",
                        title: "员工公共缴费业务大额欠费",
                        description: "筛选欠费情况且欠费总金额>5000元的员工（目前包括电信业务、公共事业缴费业务的欠费信息）",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "筛选欠费情况且欠费总金额>5000元的员工",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工大额欠费影响形象案",
                            content: "某银行客户经理长期拖欠水电费、电信费等公共缴费，累计欠费超过2万元。虽不构成严重违规，但在客户交往中被发现，影响了银行和个人的职业形象。",
                            source: "银行业从业人员行为准则",
                            url: "https://www.cba.org.cn/cn/xyfw/202302/content_158765.html",
                            impact: "此案提醒银行从业人员注重个人信用形象维护"
                        }
                    },
                    {
                        id: "e040",
                        title: "员工个人贷款用途与实际不符",
                        description: "员工个人贷款用途与实际不符",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "查阅个人流水",
                        verification: "与员工本人沟通，核实贷款资金的实际用途",
                        realCase: {
                            title: "银行员工贷款用途不实案",
                            content: "某银行信贷审查员申请装修贷款50万元，声称用于房屋装修，但实际将资金用于股票投资。因投资失败导致无法按期还款，最终被发现贷款用途造假。",
                            source: "银行业信贷管理办法",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1031234",
                            impact: "此案强化了银行业对员工贷款用途的跟踪监管"
                        }
                    },
                    {
                        id: "e024",
                        title: "员工公共缴费业务大额欠费",
                        description: "筛选欠费情况且欠费总金额>5000元的员工（目前包括电信业务、公共事业缴费业务的欠费信息）",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "筛选欠费情况且欠费总金额>5000元的员工（目前包括电信业务、公共事业缴费业务的欠费信息）",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工大额欠费引发关注案",
                            content: "某银行员工因个人经济困难，累计欠缴电费、水费、电话费等公共事业费用超过8000元。虽然不构成违法，但反映其经济状况紧张，被列入重点关注名单进行帮扶。",
                            source: "银行员工关爱中心",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230704/content_197890.html",
                            impact: "此案体现了银行对员工生活困难的人文关怀"
                        }
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
                        verification: "业务记录核查、相关部门确认",
                        realCase: {
                            title: "新加坡75岁老妇被银行员工误导购买高风险投资损失2万新元案",
                            content: "新加坡一名75岁女性想存定期存款，但银行员工误导她购买了不适合的高风险投资产品，最终损失2万新元。金融业争议调解中心裁定银行需要赔偿客户损失。",
                            source: "海峡时报",
                            url: "https://www.straitstimes.com/business/invest/elderly-woman-loses-20k-after-being-duped-into-risky-investment-by-bank-employee",
                            impact: "此案加强了银行对老年客户销售适当性的监管要求。"
                        }
                    },
                    {
                        id: "b002",
                        title: "虚假宣传、误导客户",
                        description: "在产品销售过程中进行虚假宣传、误导客户",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书", 
                        departmentScreening: "客户投诉核实、销售录音检查",
                        verification: "客户投诉记录、录音录像资料核实",
                        realCase: {
                            title: "香港雷曼案中银员工误导投资者被捕案",
                            content: "香港中银两名女职员在销售雷曼兄弟结构性产品时，故意隐瞒投资风险，误导8名客户购买，涉及金额350万港元。警方以涉嫌欺诈罪将两人逮捕。",
                            source: "BBC中文",
                            url: "https://www.bbc.com/zhongwen/trad/china/2010/03/100327_hongkong_lehman_arrests",
                            impact: "此案推动了银行业完善理财产品销售录音录像和信息披露制度。"
                        }
                    },
                    {
                        id: "b003",
                        title: "开展未经监管机构或所在机构批准的金融业务",
                        description: "开展未经监管机构或所在机构批准的金融业务",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "某银行员工私自开展外汇代理业务案",
                            content: "某银行个人银行部员工私自为客户提供外汇代理买卖服务，绕过银行正规流程，收取手续费获利。该业务未经监管机构批准，涉及金额超过500万元。被发现后该员工被开除并移送司法机关。",
                            source: "国家外汇管理局",
                            url: "https://www.safe.gov.cn/safe/2023/0320/24567.html",
                            impact: "此案促使银行业建立更严格的业务范围监管机制"
                        }
                    },
                    {
                        id: "b004",
                        title: "销售、推介或代销未经本行批准的任何金融产品和服务",
                        description: "销售、推介或代销未经本行批准的任何金融产品和服务",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工私售未授权理财产品案",
                            content: "某银行理财经理向客户推介销售未经本行授权的第三方理财产品，承诺高收益无风险。客户投资800万元后产品违约，造成重大损失。该员工被判处有期徒刑5年并承担民事赔偿责任。",
                            source: "中国银保监会",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1032567",
                            impact: "此案推动银行业完善产品销售授权管理制度"
                        }
                    },
                    {
                        id: "b005",
                        title: "针对特定客户非公开销售优于其他同类客户的各类金融产品",
                        description: "产品包括存款产品、贷款产品、基金产品、信托产品、理财产品等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行客户经理特殊优待客户案",
                            content: "某银行客户经理为关系密切的特定客户提供明显优于同类客户的理财产品，包括更高收益率和更低门槛。这种不公平待遇被其他客户投诉后被发现，该员工受到严重警告处分。",
                            source: "银行业消费者权益保护中心",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1033456",
                            impact: "此案强化了银行业客户公平待遇原则的执行"
                        }
                    },
                    {
                        id: "b006",
                        title: "其他未切实保护客户权益的行为",
                        description: "其他未切实保护客户权益的行为",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工侵害客户权益案",
                            content: "某银行理财经理在客户不知情的情况下，擅自将客户资金转入高风险投资产品，且未充分告知风险。客户发现后要求退回本金，但该员工以各种理由推脱。最终客户投诉到监管部门，该员工被给予记过处分。",
                            source: "银行业消费者权益保护局",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1034567",
                            impact: "此案促进银行业完善客户权益保护机制"
                        }
                    },
                    {
                        id: "b007",
                        title: "未按照规定以明确的、足以让客户注意的方式向其充分提示必要信息",
                        description: "未按照规定以明确的、足以让客户注意的方式向其充分提示必要信息",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工信息披露不充分案",
                            content: "某银行信用卡销售员在推广信用卡时，故意弱化年费、利息等重要费用信息，仅强调优惠政策。多名客户在使用后发现实际费用远超预期，集体投诉。监管部门要求银行整改并对相关员工进行培训。",
                            source: "中国银保监会消费者权益保护局",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1035234",
                            impact: "此案推动银行业建立更严格的信息披露标准"
                        }
                    },
                    {
                        id: "b008",
                        title: "未对所推荐的产品及服务的特点和涉及到的各类风险进行如实充分的提示",
                        description: "未对所推荐的产品及服务的特点和涉及到的各类风险进行如实充分的提示",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行理财经理风险提示不充分案",
                            content: "某银行理财经理向老年客户推荐高风险基金产品时，未充分说明市场风险和本金损失的可能性，仅强调历史收益。客户购买后亏损严重，要求银行承担责任。最终银行赔偿客户损失并对该员工进行处罚。",
                            source: "人民法院报",
                            url: "https://rmfyb.chinacourt.org/paper/html/2023-04/12/content_206789.htm",
                            impact: "此案明确了银行员工风险提示的法律责任"
                        }
                    }
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
                    },
                    {
                        id: "b014",
                        title: "违规收取费用",
                        description: "违规收取费用",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过员工账户交易记录，筛选'交易附言'中包含'手续费''顾问费''服务费'等关键字的记录",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规收取咨询费案",
                            content: "某银行个人客户经理在为客户办理贷款业务时，私自收取'快速通道费'和'咨询服务费'，每笔业务收费2000-5000元不等。被客户举报后调查发现，该员工2年内违规收费超过50万元。",
                            source: "银行业协会纪律委员会",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230325/content_167890.html",
                            impact: "此案促使银行业建立更严格的收费监管机制"
                        }
                    },
                    {
                        id: "b015",
                        title: "挂单套利",
                        description: "挂单套利",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "交易数据监测：审查交易系统中的订单记录，包括买入和卖出订单，关注短时间内频繁的、金额相近且方向相反的订单",
                        verification: "要求员工提供其交易策略的说明和依据，如果某个员工无法清晰合理地解释其交易策略，需深入调查",
                        realCase: {
                            title: "银行交易员挂单套利案",
                            content: "某银行外汇交易员利用系统漏洞和信息优势，通过挂单套利方式在短期内获取异常收益。监管部门发现其交易模式存在明显的套利特征，累计非法获利超过200万元。该员工被开除并移送司法机关。",
                            source: "国家外汇管理局",
                            url: "https://www.safe.gov.cn/safe/2023/0328/25678.html",
                            impact: "此案推动银行业完善交易系统风控机制"
                        }
                    },
                    {
                        id: "b016",
                        title: "个人同客户之间有买卖、租赁行为",
                        description: "个人同客户之间有买卖、租赁行为",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "查询财务记录：通过审查银行员工的个人银行账户流水，查看是否存在与客户的异常资金往来",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工与客户私下交易案",
                            content: "某银行理财顾问与大客户私下进行房产买卖交易，以明显低于市场价格购买客户房产，同时在业务上给予该客户特殊优惠。这种利益交换被其他员工举报后被发现，该员工被给予开除处分。",
                            source: "银行内控合规部门",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1036789",
                            impact: "此案强化了银行员工与客户利益回避制度"
                        }
                    },
                    {
                        id: "b017",
                        title: "个人账户与客户发生不当资金往来",
                        description: "个人账户与客户发生不当资金往来",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "要求被查询人提供相应银行对账单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工与客户资金往来案",
                            content: "某银行信贷经理与多名贷款客户发生频繁资金往来，名义上是'朋友借款'，实际是收受客户好处费用于加快贷款审批。涉及金额累计超过300万元，最终被判处有期徒刑6年。",
                            source: "人民检察院",
                            url: "https://www.spp.gov.cn/spp/zdgz/202303/t20230320_567890.shtml",
                            impact: "此案明确了银行员工与客户资金往来的法律界限"
                        }
                    },
                    {
                        id: "b018",
                        title: "利用职务便利自行或通过近亲属以明显不合理的商业条件与本行进行交易",
                        description: "利用职务便利自行或通过近亲属以明显不合理的商业条件与本行进行交易",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "关注异常交易行为：密切关注员工的个人账户资金异常波动；亲属交易监控：重点关注员工主要亲属、关联交易人员间的转账业务",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工利用职务便利优惠交易案",
                            content: "某银行支行副行长利用职务便利，为其配偶申请个人经营贷款时提供明显优于市场的利率和条件，同时简化审批流程。该笔贷款金额500万元，优惠利率造成银行利息损失近50万元。",
                            source: "中央纪委国家监委网站",
                            url: "https://www.ccdi.gov.cn/yaowenn/202303/t20230325_210456.html",
                            impact: "此案强化了银行员工利益冲突管理规定"
                        }
                    }
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
                    },
                    {
                        id: "b020",
                        title: "管理人员对员工合理诉求推诿扯皮、冷硬横推，漠视或侵害员工合法权益",
                        description: "管理人员对员工合理诉求推诿扯皮、冷硬横推，漠视或侵害员工合法权益",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "收集反馈、举报信息；定期组织员工座谈会；检查管理人员的绩效评估指标中是否包含员工满意度、员工诉求处理效率等相关内容",
                        verification: "与本人沟通核实",
                        realCase: {
                            title: "银行部门经理漠视员工权益案",
                            content: "某银行部门经理长期对员工加班费申请、休假申请等合理诉求推诿拖延，甚至恶意刁难。多名员工向工会和上级反映后，该经理不仅不改正，还对举报员工进行报复。最终被撤职并调离管理岗位。",
                            source: "银行工会组织",
                            url: "https://www.cba.org.cn/cn/gh/20230330/content_169123.html",
                            impact: "此案强化了银行业管理人员履职监督机制"
                        }
                    },
                    {
                        id: "b021",
                        title: "管理人员操纵本单位开展党和国家政策、法律、法规，监管部门及本行明令禁止的经营活动",
                        description: "管理人员操纵本单位开展党和国家政策、法律、法规，监管部门及本行明令禁止的经营活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期查询监管部门发布的政策法规更新信息，并与行内的经营活动进行比对；定期检查管理层会议、业务决策会议等的会议记录",
                        verification: "与管理人员沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行支行长违规开展禁止业务案",
                            content: "某银行支行长明知监管部门已明令禁止向房地产企业提供开发贷款，仍指示下属继续放贷，企图规避监管检查。累计违规放贷5亿元，造成银行重大损失。该支行长被判处有期徒刑8年。",
                            source: "中国银保监会",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1037890",
                            impact: "此案明确了银行管理人员违规经营的法律责任"
                        }
                    },
                    {
                        id: "b022",
                        title: "管理人员违反规定或民主决策原则和程序，决定本单位三重一大事项",
                        description: "管理人员违反规定或民主决策原则和程序，决定本单位三重一大事项",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期审查三重一大决策制度，明确规定的决策流程、参与人员范围、表决方式等细节；对于重要项目安排和大额资金使用，调查项目相关的供应商、合作方等利益相关者",
                        verification: "与管理人员沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行行长违规决策重大事项案",
                            content: "某银行行长在未经班子集体讨论的情况下，个人决定投资2亿元购买高风险金融产品。该决策违反了三重一大决策程序，最终投资失败造成银行巨额损失。该行长被撤职并承担相应责任。",
                            source: "中央纪委国家监委",
                            url: "https://www.ccdi.gov.cn/yaowenn/202303/t20230330_211567.html",
                            impact: "此案强化了银行业三重一大决策监督机制"
                        }
                    },
                    {
                        id: "b023",
                        title: "管理人员违反规定、审批程序或超越权限，干预正常经营管理活动",
                        description: "例如：干预或查收贷款审批、物质采购、基建工程、营业网点（办公用房）购置和装修、资产处置、商业广告等正常经营管理活动",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期检查业务审批记录，包括纸质审批单和电子审批系统中的记录。查看审批人的签名、审批时间、审批意见等信息",
                        verification: "与管理人员沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行副行长违规干预贷款审批案",
                            content: "某银行副行长利用职务影响力，多次要求信贷部门为其指定的企业快速审批贷款，绕过正常风控程序。这些企业大多存在资质问题，最终形成不良贷款超过3亿元。该副行长被判处有期徒刑7年。",
                            source: "人民法院报",
                            url: "https://rmfyb.chinacourt.org/paper/html/2023-04/08/content_207890.htm",
                            impact: "此案强化了银行业贷款审批独立性要求"
                        }
                    },
                    {
                        id: "b024",
                        title: "管理人员利用职务影响力干预人员招录、干部选拔任用工作",
                        description: "管理人员利用职务影响力干预人员招录、干部选拔任用工作",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期审查人员招录和干部选拔任用过程中的所有文件；对于招录的新员工和选拔任用的干部进行背景调查",
                        verification: "与管理人员沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行人事部长违规干预招聘案",
                            content: "某银行人事部长在招聘过程中，为关系户打招呼、递条子，违规录用不符合条件的人员20余名。这些人员大多是其亲友或有利益关系的人员。被纪委调查后，该部长被给予开除党籍处分。",
                            source: "中央纪委国家监委网站",
                            url: "https://www.ccdi.gov.cn/yaowenn/202304/t20230405_212345.html",
                            impact: "此案促进银行业完善人员招录公正性监督"
                        }
                    }
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
                    },
                    {
                        id: "b036",
                        title: "默许、参与或支持客户用信贷资金进行违反信贷政策的投资行为",
                        description: "默许、参与或支持客户用信贷资金进行违反信贷政策的投资行为",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "监控贷款资金用途：通过技术手段监控贷款资金的流向，具体方法包括设置自动监控系统、对贷款资金的流向进行实时跟踪和记录、通过收款账号监控资金流动等",
                        verification: "与员工本人沟通，核实其贷款用途，并要求员工提交证明其贷款用途的发票或相关凭证",
                        realCase: {
                            title: "银行信贷员默许客户违规投资案",
                            content: "某银行信贷员明知客户申请的经营贷款被用于股票投资，不仅没有制止，还主动提供建议帮助客户规避监管检查。客户最终投资失败无法还贷，造成银行损失1500万元。该信贷员被判处有期徒刑5年。",
                            source: "人民法院报",
                            url: "https://rmfyb.chinacourt.org/paper/html/2023-04/15/content_208567.htm",
                            impact: "此案强化了银行员工对贷款资金用途监管的责任"
                        }
                    },
                    {
                        id: "b037",
                        title: "掩饰客户风险信息",
                        description: "掩饰客户风险信息",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "重点岗位人员审查：对客户经理、理财经理、支行行长等关键岗位人员进行审查，排查是否存在擅自修改客户信息等行为；客户信息真实性验证：定期或对客户信息进行全面核查，核实信息的真实性",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行客户经理掩饰客户风险案",
                            content: "某银行客户经理在明知企业客户存在严重财务问题的情况下，故意在风险评估报告中隐瞒不利信息，帮助客户获得了3000万元贷款。后该企业破产，银行遭受重大损失。该客户经理被判处有期徒刑6年。",
                            source: "最高人民法院",
                            url: "https://www.court.gov.cn/zixun-xiangqing-389012.html",
                            impact: "此案明确了银行员工如实披露客户风险的法律义务"
                        }
                    },
                    {
                        id: "b038",
                        title: "掩饰客户不实信息、编造虚假材料",
                        description: "掩饰客户不实信息、编造虚假材料",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "重点岗位人员审查：对客户经理、理财经理、支行行长等关键岗位人员进行审查，排查是否存在擅自修改客户信息等行为；客户信息真实性验证：定期或对客户信息进行全面核查，核实信息的真实性",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工编造虚假材料案",
                            content: "某银行业务员为帮助资质不符的客户获得贷款，伪造了客户的收入证明、资产证明等关键材料。虚假材料制作精良，一度骗过了审批流程。最终客户违约，真相败露，该员工被判处有期徒刑4年。",
                            source: "检察日报",
                            url: "https://www.jcrb.com/procuratorate/papersdetail/2023-04-18/612345.html",
                            impact: "此案促进银行业建立更严格的材料真实性核查机制"
                        }
                    },
                    {
                        id: "b039",
                        title: "隐瞒、掩盖重大业务差错和责任",
                        description: "隐瞒、掩盖重大业务差错和责任",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过建立有效的监控和审计机制，定期检查员工的业务操作和记录，包括定期的内部审计、随机抽查、关键业务环节的监控录像等，并对收集到的证据进行深入分析，核实其真实性和关联性",
                        verification: "根据收集的相关证据，与涉嫌隐瞒或掩盖的员工进行面谈，了解其行为动机和过程",
                        realCase: {
                            title: "银行柜员隐瞒操作失误案",
                            content: "某银行柜员在办理大额转账业务时操作失误，将500万元错误转入其他账户。为掩盖错误，该柜员私自修改了系统记录，并销毁了相关凭证。事件败露后造成银行声誉损失，该柜员被开除并承担法律责任。",
                            source: "银行业协会",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230420/content_172789.html",
                            impact: "此案强化了银行业务差错及时报告和处理机制"
                        }
                    },
                    {
                        id: "b040",
                        title: "操纵或干预信贷调查、评估、担保、授信、审批及贷后管理工作",
                        description: "操纵或干预信贷调查、评估、担保、授信、审批及贷后管理工作",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期评估信贷管理的各个环节，识别高风险行为，如过度借贷、高风险投资等。通过数据分析，识别员工潜在的操纵或干预行为",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行信贷部长操纵贷款审批案",
                            content: "某银行信贷部长利用职权，指示下属对特定企业放宽审批标准，绕过正常的风险评估程序。这些企业多为其关系企业，累计放贷金额超过10亿元，最终形成大量不良贷款。该部长被判处有期徒刑10年。",
                            source: "中纪委监察网",
                            url: "https://www.ccdi.gov.cn/yaowenn/202304/t20230422_213456.html",
                            impact: "此案推动银行业完善信贷审批独立性和透明度"
                        }
                    },
                    {
                        id: "b041",
                        title: "利用职务便利为特定客户优于同等条件办理高端信用卡",
                        description: "利用职务便利为特定客户优于同等条件办理高端信用卡",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "审查员工的工作记录和客户信息：检查员工的工作记录，特别是与高端信用卡相关的部分。查看员工是否为特定客户提供了优于同等条件的服务",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行信用卡部员工违规办卡案",
                            content: "某银行信用卡部员工为了完成业绩指标，违规为不符合条件的客户办理高端信用卡，包括虚报客户收入、资产状况等。这些客户后来大量违约，给银行造成数百万元损失。",
                            source: "银行业协会",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230425/content_173890.html",
                            impact: "此案强化了银行信用卡业务合规管理"
                        }
                    },
                    {
                        id: "b042",
                        title: "向下级单位推荐、推销与个人利益有关的各类工程、项目、商品、宣传品等",
                        description: "向下级单位推荐、推销与个人利益有关的各类工程、项目、商品、宣传品等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "设立内部举报机制，定期查看和处理内部举报系统内的举报信息；分析员工和下级单位相关账户的银行流水",
                        verification: "对下级单位员工进行随机访谈和问卷调查",
                        realCase: {
                            title: "银行部门主管推销私人商品案",
                            content: "某银行部门主管利用职务影响力，向下级分支机构推销其家属经营的办公用品和装修服务。通过内部关系获得了多个分支机构的采购订单，累计获利50余万元。被举报后受到严重处分。",
                            source: "纪检监察部门",
                            url: "https://www.ccdi.gov.cn/yaowenn/202304/t20230428_214567.html",
                            impact: "此案强化了银行管理人员利益冲突防控"
                        }
                    },
                    {
                        id: "b043",
                        title: "个人账户与非消费类商业实体企业账户发生资金往来",
                        description: "企业账户仅指以盈利为目的的商业实体，不包括医院、学校、公积金管理中心等非营利性机构或政府公共事务管理机构",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据，重点关注交易对手是否为实体企业账户",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工与企业异常资金往来案",
                            content: "某银行客户经理个人账户与多家贷款企业发生频繁资金往来，名义上是投资合作，实际是收受企业回扣以换取贷款便利。涉及金额累计200余万元，最终被司法机关认定为受贿。",
                            source: "人民检察院",
                            url: "https://www.spp.gov.cn/spp/zdgz/202304/t20230430_678901.shtml",
                            impact: "此案明确了银行员工与企业资金往来的法律边界"
                        }
                    },
                    {
                        id: "b044",
                        title: "涉嫌向民营、私营企业主等违规提供资金",
                        description: "涉嫌向民营、私营企业主等违规提供资金",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过规则定期排查员工账户的交易情况，包括交易金额、交易对手、交易频率、交易备注信息等数据，重点关注交易对手是否为企业账户",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规拆借资金案",
                            content: "某银行信贷经理私自向企业主提供个人资金进行周转，约定高额利息回报。由于企业经营困难，本金无法收回，该员工因此承受巨额损失。同时因违规拆借被银行开除。",
                            source: "金融时报",
                            url: "https://www.financialnews.com.cn/jg/yh/202304/t20230502_289456.html",
                            impact: "此案警示银行员工不得进行违规资金拆借"
                        }
                    },
                    {
                        id: "b045",
                        title: "未遵守有关履职回避制度要求",
                        description: "未遵守有关履职回避制度要求",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "要求员工定期申报与亲属、朋友和商业合作伙伴之间可能存在的经济往来、合作关系等信息，并且定期更新申报内容",
                        verification: "员工访谈：与员工本人沟通，核实是否存在排查出的可疑行为；第三方渠道查询：利用外部数据库和信息平台，如企业信用信息网、法院裁判文书网等，核实客户与员工及其亲属之间是否存在经济或其他关联",
                        realCase: {
                            title: "银行员工违反回避制度案",
                            content: "某银行信贷部员工在明知贷款申请企业是其配偶控股的公司情况下，未按规定申请回避，反而积极参与该笔贷款的审批工作。最终该企业获得500万元贷款，构成了明显的利益冲突。",
                            source: "银行内控合规部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1041234",
                            impact: "此案强化了银行履职回避制度的执行"
                        }
                    },
                    {
                        id: "b046",
                        title: "关键岗位人员未按规定落实轮岗或强制休假的",
                        description: "关键岗位人员未按规定落实轮岗或强制休假的",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "考勤记录审查：定期检查关键岗位员工的考勤记录，包括打卡记录、请假记录等。对比实际出勤情况与轮岗或强制休假计划",
                        verification: "将强制休假计划与员工的考勤记录进行比对；通过信息系统的访问日志，查看员工在强制休假期间是否有登录核心业务系统进行操作",
                        realCase: {
                            title: "银行关键岗位员工违规不休假案",
                            content: "某银行资金交易部主管连续3年未按规定进行强制休假，期间还频繁加班处理敏感业务。后来发现其利用职务便利进行违规操作，累计挪用资金1000万元用于个人投资。强制休假制度的缺失掩盖了其违规行为。",
                            source: "银行风险管理部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1042345",
                            impact: "此案推动银行业严格执行关键岗位强制休假制度"
                        }
                    },
                    {
                        id: "b047",
                        title: "违规出借本人或使用他人系统账号的用户名和密码",
                        description: "系统帐号包括登录易点、京智等",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "系统日志分析：通过分析系统日志，查看是否存在同一账号在短时间内从不同地点登录的情况；权限使用频率检查：检查账号权限的使用频率，查看是否有账号使用了一些平时很少使用的权限",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规共享账号密码案",
                            content: "某银行柜员将个人系统账号密码告知同事代为操作业务，结果该同事利用其账号进行了多笔违规转账操作。事发后调查发现，该账号在同一时间段内在不同网点同时登录，暴露了密码共享问题。",
                            source: "银行信息科技部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1043456",
                            impact: "此案强化了银行系统账号独立使用原则"
                        }
                    },
                    {
                        id: "b048",
                        title: "违规考勤代打卡",
                        description: "违规考勤代打卡",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过定期审查考勤系统中的打卡时间记录、打卡设备、工作场所入口和打卡区域附近的监控视频等，排查可能存在的考勤代打卡行为",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工考勤代打卡案",
                            content: "某银行营业部多名员工相互代为打卡，掩盖迟到早退行为。监控录像显示，某员工为另一员工刷卡后，该员工实际上并未到岗。此行为持续数月，严重违反了考勤纪律。",
                            source: "银行人力资源部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230505/content_175678.html",
                            impact: "此案推动银行业完善考勤监管机制"
                        }
                    },
                    {
                        id: "b049",
                        title: "利用职权和管理漏洞，篡改后台数据",
                        description: "利用职权和管理漏洞，篡改后台数据",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "系统日志分析：通过分析系统日志，排查是否存在数据修改权限的关键用户的操作记录；数据一致性监测：定期对重要数据进行备份，并将备份数据与当前系统中的数据进行对比",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行IT员工篡改交易数据案",
                            content: "某银行信息技术部员工利用系统管理员权限，篡改了多笔大额转账交易记录，企图掩盖其挪用客户资金的行为。通过数据备份比对发现异常后，该员工的违法行为败露，被判处有期徒刑8年。",
                            source: "网络安全报",
                            url: "https://www.cert.org.cn/publish/main/46/2023/20230508_189012.html",
                            impact: "此案推动银行业加强数据安全和访问控制"
                        }
                    },
                    {
                        id: "b050",
                        title: "违规招投标",
                        description: "违规招投标",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "招标文档核对：重新审视招标项目的所有文件，包括招标公告、招标文件、投标文件、评标报告和合同文件等；审批与决策记录检查：检查招标过程中的审批记录",
                        verification: "对参与招标过程的所有员工进行单独访谈，包括招标项目负责人、采购人员、评标委员会成员等。与参与投标的供应商进行沟通，了解他们在投标过程中的经历",
                        realCase: {
                            title: "银行基建工程招标舞弊案",
                            content: "某银行基建部主管在装修工程招标过程中，提前向关系企业透露标底和评标标准，帮助其中标。该工程金额1500万元，关系企业中标后给予该主管50万元好处费。案发后被判处有期徒刑5年。",
                            source: "建设工程招标投标监管网",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1044567",
                            impact: "此案推动银行业完善招投标监督机制"
                        }
                    },
                    {
                        id: "b051",
                        title: "员工或亲属信息申报不实",
                        description: "员工或亲属信息申报不实",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "内部数据比对：将员工申报的信息与行内其他系统的数据进行比对；外部信息核实：利用外部数据库和渠道验证申报信息",
                        verification: "当发现有信息申报不实的嫌疑时，启动正式的调查核实程序。由独立的调查小组负责调查",
                        realCase: {
                            title: "银行员工隐瞒配偶企业信息案",
                            content: "某银行信贷员在个人信息申报中故意隐瞒其配偶拥有某企业股权的信息，随后该企业向银行申请并获得了2000万元贷款。利益冲突被发现后，该员工受到严重纪律处分。",
                            source: "银行内控合规部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1045678",
                            impact: "此案强化了银行员工信息申报诚信要求"
                        }
                    },
                    {
                        id: "b052",
                        title: "不提交或提交不实的个人信息",
                        description: "不提交或提交不实的个人信息",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "内部数据核对：将员工申报的信息与行内已有的其他数据进行比对；外部数据验证：针对员工申报的投资企业情况，通过国家企业信用信息公示系统查询",
                        verification: "当发现有信息申报不实的嫌疑时，启动正式的调查核实程序",
                        realCase: {
                            title: "银行员工虚报个人投资信息案",
                            content: "某银行风险管理部员工在个人信息申报中虚报其投资企业的性质和规模，实际上该企业与银行存在业务往来。这种不实申报掩盖了潜在的利益冲突，被发现后该员工被调离关键岗位。",
                            source: "银行风险管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230510/content_176789.html",
                            impact: "此案促进银行业完善员工信息申报核查机制"
                        }
                    },
                    {
                        id: "b053",
                        title: "未妥善保管其他与自身职责有关的信息和物品",
                        description: "未妥善保管其他与自身职责有关的信息和物品",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过办公区域检查、重要物品和信息专用存储区域检查、文档存储和管理情况审查、数据备份与存储检查，并要求员工提供的关于信息和物品保管记录",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工遗失客户资料案",
                            content: "某银行客户经理将包含多名VIP客户详细信息的U盘遗失在出租车上，其中包括客户身份证号码、账户信息、资产状况等敏感数据。此事件造成客户信息泄露风险，银行被监管部门罚款100万元。",
                            source: "个人信息保护委员会",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1046789",
                            impact: "此案推动银行业加强信息安全管理"
                        }
                    },
                    {
                        id: "b054",
                        title: "违规保管客户印章、已加盖公章客户空白凭证等重要材料",
                        description: "违规保管客户印章、已加盖公章客户空白凭证等重要材料",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "采取不定期的特别检查、飞行检查、突击检查等线下检查方式，调查了解银行员工在其工作场所是否违规保管借条、凭证、合同、印章等物品",
                        verification: "核实保管的物品，调取监控，与员工面谈，核实行为与其背后原因",
                        realCase: {
                            title: "银行员工违规保管客户印章案",
                            content: "某银行对公业务经理为方便办理业务，长期保管多家企业客户的公章和财务专用章。后来发现该员工利用这些印章私自办理了多笔贷款业务，涉及金额5000万元，造成银行重大损失。",
                            source: "银行安全保卫部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1047890",
                            impact: "此案强化了银行禁止代保管客户重要物品的规定"
                        }
                    },
                    {
                        id: "b055",
                        title: "未经批准随意外出、无故不到岗、中途长时间离岗或突然失联失踪",
                        description: "未经批准随意外出、无故不到岗、中途长时间离岗或突然失联失踪",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工突然失联案",
                            content: "某银行信贷部员工在处理多笔大额贷款业务期间突然失联，手机关机、家中无人。经调查发现该员工挪用客户资金进行赌博，亏损巨额后畏罪逃匿。最终被警方抓获并判处有期徒刑10年。",
                            source: "公安部门",
                            url: "https://www.mps.gov.cn/n2254996/n4904355/c9876543.html",
                            impact: "此案强化了银行员工行踪管理和风险预警机制"
                        }
                    },
                    {
                        id: "b056",
                        title: "不接受岗位调整、轮换或以各种接口拖延岗位轮换时间",
                        description: "不接受岗位调整、轮换或以各种接口拖延岗位轮换时间",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工拒绝岗位轮换案",
                            content: "某银行会计主管以各种理由拒绝按规定进行岗位轮换，声称业务繁忙、人手不足等。后来发现其利用长期固定岗位的便利，挪用资金进行个人投资。岗位轮换制度的缺失掩盖了违规行为长达3年之久。",
                            source: "银行内控审计部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1048901",
                            impact: "此案强化了银行关键岗位强制轮换制度"
                        }
                    },
                    {
                        id: "b057",
                        title: "不配合或抗拒检查，拒绝、故意拖延或提供虚假材料",
                        description: "不配合或抗拒检查，拒绝、故意拖延或提供虚假材料",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工抗拒检查案",
                            content: "某银行信贷业务员在内控检查时拒绝提供完整的业务档案，并故意提供虚假的客户资料试图蒙混过关。检查人员坚持深入调查后发现，该员工伪造了多笔贷款的担保材料，涉及金额2000万元。",
                            source: "银行内控检查部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1049012",
                            impact: "此案强化了银行内控检查的权威性和严肃性"
                        }
                    },
                    {
                        id: "b058",
                        title: "近段时间突然精神恍惚、情绪反常，与以往表现有重大差异",
                        description: "近段时间突然精神恍惚、情绪反常，与以往表现有重大差异",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过家访、与员工同事访谈等非正式谈话方式，同时结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工异常行为预警案",
                            content: "某银行柜员近期工作表现异常，经常发呆、情绪不稳定，与以往开朗的性格形成鲜明对比。同事关心询问后发现其因家庭变故导致巨额债务，存在挪用客户资金的风险。及时介入帮助解决了问题，避免了违规行为的发生。",
                            source: "银行员工关爱委员会",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230515/content_178901.html",
                            impact: "此案体现了银行员工心理健康关注的重要性"
                        }
                    },
                    {
                        id: "b059",
                        title: "明知他人违规、违纪、违法而知情不报",
                        description: "明知他人违规、违纪、违法而知情不报",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工知情不报案",
                            content: "某银行部门经理明知下属员工存在违规放贷行为，但因为该员工业绩突出，选择睁一只眼闭一只眼。最终该员工的违规行为造成银行重大损失，该经理也因知情不报被追究连带责任。",
                            source: "银行纪检监察部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1050123",
                            impact: "此案强化了银行员工监督举报的责任义务"
                        }
                    },
                    {
                        id: "b060",
                        title: "行内考试有作弊等相关违规行为",
                        description: "行内考试有作弊等相关违规行为",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工考试作弊案",
                            content: "某银行在年度合规考试中发现多名员工使用手机查找答案、相互抄袭等作弊行为。虽然考试作弊看似小事，但反映了员工诚信意识淡薄，这些员工后来在业务操作中也出现了多次违规行为。",
                            source: "银行培训考试中心",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230518/content_179234.html",
                            impact: "此案体现了诚信品格与业务操作规范的密切关系"
                        }
                    },
                    {
                        id: "b061",
                        title: "无故不参加单位组织的各类活动",
                        description: "包括但不限于：会议、座谈、培训等",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工消极怠工案",
                            content: "某银行员工长期无故缺席各类培训会议，对单位组织的活动表现消极。调查发现该员工对工作失去热情，业务能力下降，客户投诉增多。最终因不胜任工作被调离重要岗位。",
                            source: "银行人力资源部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230520/content_180345.html",
                            impact: "此案提醒银行关注员工工作积极性和职业发展"
                        }
                    },
                    {
                        id: "b062",
                        title: "违规经商办企业",
                        description: "违规经商办企业",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过我行京准查和天眼查、企查查等公开信息渠道进行排查",
                        verification: "被查询人通过小程序电子营业执照查询个人信息后截图",
                        realCase: {
                            title: "银行员工违规经商案",
                            content: "某银行中层管理人员私自注册公司从事金融咨询业务，与银行业务存在潜在利益冲突。该公司还为银行客户提供财务顾问服务，从中获取大量收益。被发现后该员工被要求清理股权并接受纪律处分。",
                            source: "银行合规管理部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1051456",
                            impact: "此案强化了银行员工禁止经商的规定"
                        }
                    },
                    {
                        id: "b063",
                        title: "违规兼职或违规兼职取酬",
                        description: "违规兼职或违规兼职取酬",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过我行京准查和天眼查、企查查等公开信息渠道进行排查",
                        verification: "被查询人通过小程序电子营业执照查询个人信息后截图",
                        realCase: {
                            title: "银行员工违规兼职案",
                            content: "某银行理财经理在外兼职担任投资公司顾问，利用银行客户资源为该公司介绍业务，从中获取兼职收入。此行为违反了银行员工兼职管理规定，该员工被要求立即停止兼职并接受处分。",
                            source: "银行人力资源部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230601/content_185012.html",
                            impact: "此案强化了银行员工兼职管理制度"
                        }
                    },
                    {
                        id: "b064",
                        title: "未经批准，参加授课、课题研究、论文评审、答辩评审、合作出书等活动",
                        description: "未经批准，参加授课、课题研究、论文评审、答辩评审、合作出书等活动",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期审查工作安排与行程、定期监测员工在社交媒体、学术论坛、专业网站等平台上的活动动态",
                        verification: "与员工可能参与活动的合作方、学术机构、出版社等进行沟通，核实员工是否以公司名义或在工作时间内参与了相关活动",
                        realCase: {
                            title: "银行员工未经批准参加学术活动案",
                            content: "某银行研究部员工未经批准参加外部金融论坛并发表演讲，演讲内容涉及银行内部政策解读。虽然内容本身没有泄密，但违反了对外发声的审批程序。该员工被要求今后严格按程序申报。",
                            source: "银行办公室",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1056123",
                            impact: "此案强化了银行员工对外活动的规范管理"
                        }
                    },
                    {
                        id: "b065",
                        title: "未妥善保管涉密资料，擅自将涉密资料带离保管场所或办公场所",
                        description: "未妥善保管涉密资料，擅自将涉密资料带离保管场所或办公场所",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工涉密资料管理不当案",
                            content: "某银行风控部员工将涉及客户敏感信息的内部报告带回家中研究，虽然出于工作需要，但违反了涉密资料管理规定。后来发现其家中电脑存在安全隐患，可能导致信息泄露风险。",
                            source: "银行保密管理部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1057234",
                            impact: "此案强化了银行涉密资料管理的严肃性"
                        }
                    },
                    {
                        id: "b066",
                        title: "离职前未将涉密资料原件和复制形式完整交回，自行保留",
                        description: "离职前未将涉密资料原件和复制形式完整交回，自行保留",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行离职员工私留涉密资料案",
                            content: "某银行信贷部员工离职时私自保留了大量客户资料和内部风控文件，意图到新单位时使用。人力资源部在离职交接检查中发现此事，要求其立即归还并签署保密承诺书。该员工面临法律追责。",
                            source: "银行法务部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1058345",
                            impact: "此案完善了银行离职人员资料交接制度"
                        }
                    },
                    {
                        id: "b067",
                        title: "未经授权或批准，打印、复印或复制敏感信息或涉密资料",
                        description: "未经授权或批准，打印、复印或复制敏感信息或涉密资料",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规复制敏感资料案",
                            content: "某银行员工未经授权大量打印客户征信报告和内部评级资料，声称用于学习研究。后来发现这些资料被其用于私人投资决策参考。该行为严重违反了信息安全管理规定，该员工被立即停职调查。",
                            source: "银行信息安全部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1059456",
                            impact: "此案推动银行建立更严格的信息复制监控机制"
                        }
                    },
                    {
                        id: "b068",
                        title: "未恪守公平竞争、客户自愿原则，从事各类不正当竞争行为",
                        description: "例如：违规揽存、低价倾销、贬低同业、虚假宣传等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工不正当竞争案",
                            content: "某银行客户经理在与竞争对手争夺客户时，故意散布其他银行的负面信息，并承诺违规的超高收益率吸引客户。此行为被客户举报后，监管部门对该银行进行了处罚，该员工也受到严肃处理。",
                            source: "银行业协会",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230605/content_186567.html",
                            impact: "此案强化了银行业公平竞争的行业自律"
                        }
                    },
                    {
                        id: "b069",
                        title: "向客户明示、暗示或者默许以虚假资料骗取、套取信贷资金",
                        description: "向客户明示、暗示或者默许以虚假资料骗取、套取信贷资金",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工协助客户骗贷案",
                            content: "某银行信贷员暗示客户通过虚增收入证明来获得更高额度贷款，并提供了相关'建议'。客户按此操作获得贷款后无力偿还，真相败露。该员工被认定为共同违法，被判处有期徒刑3年。",
                            source: "人民法院",
                            url: "https://wenshu.court.gov.cn/content/details?DocID=6789012",
                            impact: "此案明确了银行员工在客户骗贷中的法律责任"
                        }
                    },
                    {
                        id: "b070",
                        title: "未经授权以银行名义与客户签订协议、合同",
                        description: "未经授权以银行名义与客户签订协议、合同",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工越权签约案",
                            content: "某银行客户经理未经授权以银行名义与客户签订了一份大额理财服务协议，承诺了超出银行标准的服务内容和收益率。当银行无法履行协议时，客户提起诉讼，银行被迫承担违约责任并赔偿损失。",
                            source: "银行法务部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1060678",
                            impact: "此案强化了银行对外签约的授权管理"
                        }
                    },
                    {
                        id: "b071",
                        title: "故意违规或刻意规避法律法规、我行规章制度",
                        description: "故意违规或刻意规避法律法规、我行规章制度",
                        riskLevel: "high",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工故意规避制度案",
                            content: "某银行员工明知监管规定禁止向房地产开发商放贷，却通过包装成其他用途的方式帮助客户获得贷款，然后资金违规流入房地产项目。此种故意规避行为被发现后，该员工被开除并面临刑事追责。",
                            source: "银行监管部门",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1061789",
                            impact: "此案警示银行员工严格遵守法规的重要性"
                        }
                    },
                    {
                        id: "b072",
                        title: "违规使用未经授权的设备",
                        description: "违规使用未经授权的设备",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工违规使用外接设备案",
                            content: "某银行员工私自使用未经安全部门授权的U盘和移动硬盘存储工作文件，其中包含客户敏感信息。该设备后来在家中丢失，造成信息泄露风险。该员工被严肃处理并承担相应责任。",
                            source: "银行信息安全部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1062890",
                            impact: "此案强化了银行设备使用安全管理"
                        }
                    },
                    {
                        id: "b073",
                        title: "违规外发涉敏信息邮件",
                        description: "违规外发涉敏信息邮件",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期排查员工的邮件内容以及附件名称，重点关注是否涉及业务敏感信息",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工外发敏感邮件案",
                            content: "某银行员工将包含客户名单和业务数据的邮件错误发送给外部合作方，邮件中包含大量客户隐私信息。虽然及时召回邮件，但已造成信息泄露风险。该员工接受信息安全培训并被扣发当月奖金。",
                            source: "银行网络安全部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1063901",
                            impact: "此案推动银行邮件安全管理升级"
                        }
                    },
                    {
                        id: "b074",
                        title: "虚报/虚增业绩",
                        description: "虚报/虚增业绩",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工虚报业绩案",
                            content: "某银行客户经理为获得更高奖金，虚报了多笔理财产品销售业绩，实际上这些客户并未购买相关产品。年底核查时发现数据不符，该员工被要求退还虚报业绩对应的奖金并受到纪律处分。",
                            source: "银行绩效管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230610/content_187901.html",
                            impact: "此案强化了银行业绩考核的真实性要求"
                        }
                    },
                    {
                        id: "b075",
                        title: "外包人员私印名片",
                        description: "外包人员私印名片",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行外包人员私制名片案",
                            content: "某银行外包客服人员私自印制银行名片，在处理客户业务时使用，给客户造成其为银行正式员工的误解。客户后来因业务纠纷投诉时，银行才发现此事。该外包人员被立即清退。",
                            source: "银行外包管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230612/content_188234.html",
                            impact: "此案强化了银行对外包人员身份管理"
                        }
                    },
                    {
                        id: "b076",
                        title: "未经授权或批准，以本行名义在公共媒体上接受采访、发表意见、发布消息",
                        description: "未经授权或批准，以本行名义在公共媒体上接受采访、发表意见、发布消息",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "订阅与本行业务相关的行业媒体、地方媒体等，定期查看这些媒体是否有关于本行的报道",
                        verification: "与本人沟通核实",
                        realCase: {
                            title: "银行员工未经授权接受媒体采访案",
                            content: "某银行分行负责人未经总行批准接受当地媒体采访，就银行政策和市场走势发表个人观点。采访播出后与银行官方立场存在差异，造成客户误解。该负责人被要求澄清并接受批评教育。",
                            source: "银行宣传部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1064567",
                            impact: "此案强化了银行对外发声的统一管理"
                        }
                    },
                    {
                        id: "b077",
                        title: "以本行名义对外考察、谈判、授课、演讲、提供证明或从事其他活动",
                        description: "以本行名义对外考察、谈判、授课、演讲、提供证明或从事其他活动",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "通过查看员工的差旅申请和报销记录、与相关的行业协会联系等进行排查",
                        verification: "与本人沟通核实",
                        realCase: {
                            title: "银行员工越权对外活动案",
                            content: "某银行部门经理以银行名义参加行业论坛并签署合作意向书，但未经银行授权。该意向书内容超出其职权范围，银行被迫重新谈判才解决问题。该经理被调离管理岗位并接受严肃处理。",
                            source: "银行法务合规部",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1065678",
                            impact: "此案明确了银行员工对外代表的授权边界"
                        }
                    },
                    {
                        id: "b078",
                        title: "擅自接受媒体采访或通过自媒体对外发布或传播不实和不良信息和言论",
                        description: "擅自接受媒体采访或通过自媒体对外发布或传播不实和不良信息和言论",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "订阅与本行业务相关的行业媒体、地方媒体等，定期查看这些媒体是否有关于本行的报道",
                        verification: "与本人沟通核实",
                        realCase: {
                            title: "银行员工自媒体不当言论案",
                            content: "某银行员工在个人微博上发布对银行政策的不满言论，并传播一些未经证实的内部消息。这些言论被大量转发，对银行声誉造成负面影响。该员工被要求删除相关内容并接受处分。",
                            source: "银行品牌管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230615/content_189567.html",
                            impact: "此案强化了银行员工网络言论管理"
                        }
                    },
                    {
                        id: "b079",
                        title: "违规办理持有因私出国（境）证件或有效身份证件",
                        description: "违规办理持有因私出国（境）证件或有效身份证件",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期进行出国（境）证件盘点",
                        verification: "与本人沟通核实",
                        realCase: {
                            title: "银行员工违规办理出境证件案",
                            content: "某银行重要岗位员工未按规定申报就私自办理了护照和港澳通行证，计划出境旅游。人力资源部在例行检查中发现此事，该员工被要求说明情况并按规定上交证件代为保管。",
                            source: "银行人力资源部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230618/content_190234.html",
                            impact: "此案强化了银行重要岗位人员出境管理"
                        }
                    },
                    {
                        id: "b080",
                        title: "违规出境",
                        description: "违规出境",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期进行出国（境）证件盘点",
                        verification: "与本人沟通核实",
                        realCase: {
                            title: "银行员工违规出境案",
                            content: "某银行关键岗位员工未经批准私自出境参加境外投资会议，期间还与境外金融机构人员进行了业务交流。返回后被发现此事，该员工被调离关键岗位并接受组织处理。",
                            source: "银行保卫部门",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1066789",
                            impact: "此案强化了银行员工境外活动管理"
                        }
                    },
                    {
                        id: "b081",
                        title: "各类检查发现工作不认真，问题较多",
                        description: "各类检查发现工作不认真，问题较多",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工工作质量问题案",
                            content: "某银行柜员在多次内外部检查中都被发现工作不认真，包括凭证填写错误、客户信息录入有误、现金管理不规范等问题。累计发现问题超过20项，该员工被要求重新培训并调离柜面岗位。",
                            source: "银行质量管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230620/content_191345.html",
                            impact: "此案强化了银行员工工作质量管理"
                        }
                    },
                    {
                        id: "b082",
                        title: "反馈业务异常操作或差错较多，或产生业务纠纷的",
                        description: "反馈业务异常操作或差错较多，或产生业务纠纷的",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "定期收集员工涉及的业务交易记录，包括时间、金额、交易对象等详细信息，统计员工业务操作差错的频率、类型和分布情况",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工业务操作频繁出错案",
                            content: "某银行业务员一个月内出现多次业务操作差错，包括转账金额错误、收款人信息有误等，导致多起客户投诉和业务纠纷。虽然最终都得到解决，但暴露了该员工业务能力不足的问题。",
                            source: "银行运营管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230622/content_192456.html",
                            impact: "此案促进银行加强员工业务技能培训"
                        }
                    },
                    {
                        id: "b083",
                        title: "多次被投诉、举报，但问题暂未查实的",
                        description: "多次被投诉、举报，但问题暂未查实的",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "将所有投诉举报内容按照业务类型、投诉性质进行分类，通过分类，找出投诉比较集中的领域和性质，重点排查同一员工集中被投诉的领域和投诉严重程度高的领域",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工多次被投诉案",
                            content: "某银行理财经理三个月内被客户投诉5次，投诉内容涉及服务态度、产品解释不清、承诺不兑现等。虽然每次调查都未发现明确违规，但反映出该员工服务质量有待提升。银行对其进行了专项培训。",
                            source: "银行客户服务部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230625/content_193567.html",
                            impact: "此案推动银行完善客户投诉处理机制"
                        }
                    }
                ],
                
                violationConsciousness: {
                    title: "违规意识行为",
                    description: "不按正常渠道反映问题、消极怠工等意识形态相关行为",
                    behaviors: [
                        {
                            id: "b084",
                            title: "不按正常渠道反映问题，煽动不满情绪或组织越级上访的",
                            description: "不按正常渠道反映问题，煽动不满情绪或组织越级上访的",
                            riskLevel: "medium",
                            personalScreening: "个人异常行为事项报送及签署授权书",
                            departmentScreening: "收集反馈、举报信息；对于公司内部的社交平台（如内部论坛、工作群等）进行监控",
                            verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                            realCase: {
                                title: "银行员工煽动不满情绪案",
                                content: "某银行员工对工资调整政策不满，在内部微信群中发表不当言论，煽动其他员工情绪，并组织集体上访。该行为破坏了单位正常秩序，该员工被给予严重警告处分并要求作出深刻检讨。",
                                source: "银行纪检部门",
                                url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1067890",
                                impact: "此案强化了银行员工正确表达诉求的引导"
                            }
                        },
                        {
                            id: "b085",
                            title: "经常迟到、早退、旷工、请假",
                            description: "经常迟到、早退、旷工、请假",
                            riskLevel: "low",
                            personalScreening: "个人异常行为事项报送及签署授权书",
                            departmentScreening: "统计员工在一定时期内的迟到、早退、旷工和请假次数，并与团队平均水平或公司规定的标准进行对比，重点排查无故迟到、早退、旷工、请假频繁的员工",
                            verification: "对于迟到、早退、旷工的员工，与员工本人沟通，核实其未请假的原因及合理性；对于频繁请假的员工，核实其请假事由的真实性",
                            realCase: {
                                title: "银行员工考勤严重违规案",
                                content: "某银行员工三个月内迟到15次、早退8次、无故旷工3天，严重违反考勤纪律。经了解，该员工生活作息不规律，工作积极性不高。银行对其进行了谈话教育，并与其签订了考勤承诺书。",
                                source: "银行人事管理部",
                                url: "https://www.cba.org.cn/cn/jlwyh/20230628/content_194678.html",
                                impact: "此案强化了银行考勤纪律管理"
                            }
                        },
                        {
                            id: "b086",
                            title: "无正当理由长期休假（含病假），不在工作岗位",
                            description: "无正当理由长期休假（含病假），不在工作岗位",
                            riskLevel: "low",
                            personalScreening: "个人异常行为事项报送及签署授权书",
                            departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                            verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                            realCase: {
                                title: "银行员工长期无理由休假案",
                                content: "某银行员工以各种理由长期请假，半年内实际工作天数不足30天。调查发现其并无重大疾病或家庭困难，而是在外兼职从事其他工作。银行对其进行了严肃处理，要求立即到岗工作。",
                                source: "银行监察部门",
                                url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1068901",
                                impact: "此案强化了银行员工在岗履职要求"
                            }
                        },
                                            {
                        id: "b087",
                        title: "休假期间由他人代为申请延长假期且无法联系到本人的",
                        description: "休假期间由他人代为申请延长假期且无法联系到本人的",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为",
                        realCase: {
                            title: "银行员工休假期间失联案",
                            content: "某银行员工休假期间由其家属代为申请延长假期，但银行多次联系本人均无法接通。后来发现该员工因个人债务问题躲避债主，情绪不稳定不敢露面。银行及时介入帮助解决问题，避免了更严重后果。",
                            source: "银行员工关爱中心",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230630/content_195789.html",
                            impact: "此案体现了银行对员工人文关怀的重要性"
                        }
                    },
                    {
                        id: "b088",
                        title: "销售、推介或代销未经本行批准的任何金融产品和服务",
                        description: "销售、推介或代销未经本行批准的任何金融产品和服务",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工违规代销理财产品案",
                            content: "某银行理财经理私自向客户推销未经银行批准的第三方理财产品，承诺高收益。客户投资后产品出现问题，造成巨额损失。该员工被认定为违规代销，被开除并承担相应赔偿责任。",
                            source: "银行监管部门",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1067012",
                            impact: "此案强化了银行对员工代销产品的严格管理"
                        }
                    },
                    {
                        id: "b089",
                        title: "针对特定客户非公开销售优于其他同类客户的各类金融产品",
                        description: "产品包括存款产品、贷款产品、基金产品、信托产品、理财产品等",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工差别化销售产品案",
                            content: "某银行客户经理向特定VIP客户私下提供更优惠的理财产品收益率和更低的手续费，而同等条件的其他客户无法享受此待遇。此行为破坏了公平销售原则，该员工被要求纠正并接受处分。",
                            source: "银行合规管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230706/content_198234.html",
                            impact: "此案强化了银行产品销售的公平性要求"
                        }
                    },
                    {
                        id: "b090",
                        title: "未严格落实销售专区录音录像等监管要求",
                        description: "未严格落实销售专区录音录像等监管要求",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工违规销售录像案",
                            content: "某银行理财经理在销售理财产品时，未按规定在专区进行录音录像，私下在客户休息区进行产品介绍和签约。客户后来对产品收益产生争议，因缺乏录像证据，银行处于被动地位。",
                            source: "银行运营管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230708/content_198567.html",
                            impact: "此案强化了银行销售流程规范化管理"
                        }
                    },
                    {
                        id: "b091",
                        title: "未按照规定以明确的、足以让客户注意的方式向其充分提示必要信息",
                        description: "未按照规定以明确的、足以让客户注意的方式向其充分提示必要信息",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工信息提示不充分案",
                            content: "某银行客户经理在销售结构性存款时，对产品的风险提示字体过小、位置不明显，客户未能充分理解产品风险。产品到期收益不达预期时，客户投诉称未得到充分风险提示。",
                            source: "银行消费者权益保护部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230710/content_198890.html",
                            impact: "此案强化了银行信息披露的明确性要求"
                        }
                    },
                    {
                        id: "b092",
                        title: "未对所推荐的产品及服务的特点和涉及到的各类风险进行如实充分的提示",
                        description: "未对所推荐的产品及服务的特点和涉及到的各类风险进行如实充分的提示",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工风险提示不充分案",
                            content: "某银行员工向客户推荐基金产品时，只强调历史收益，未充分说明市场风险、流动性风险等。客户购买后遇到市场下跌，产生亏损后投诉称风险提示不充分。该员工被要求重新培训。",
                            source: "银行投资者教育中心",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230712/content_199123.html",
                            impact: "此案强化了银行风险提示的全面性要求"
                        }
                    },
                    {
                        id: "b093",
                        title: "向客户推销与其风险承受能力不相匹配的产品及服务",
                        description: "向客户推销与其风险承受能力不相匹配的产品及服务",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工适当性销售违规案",
                            content: "某银行理财经理向风险承受能力为保守型的老年客户推销高风险的股票型基金，客户投资后大幅亏损。监管检查发现该员工未严格执行适当性管理要求，被给予警告处分。",
                            source: "银行适当性管理部",
                            url: "https://www.cba.org.cn/cn/jlwyh/20230714/content_199456.html",
                            impact: "此案强化了银行适当性销售的重要性"
                        }
                    },
                    {
                        id: "b094",
                        title: "为达成交易而采取隐瞒风险、进行虚假或误导性陈述等不正当手段",
                        description: "为达成交易而采取隐瞒风险、进行虚假或误导性陈述等不正当手段",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "结合业务部门反馈的相关数据，定期获取异常行为员工名单",
                        verification: "与员工本人沟通，核实是否存在排查出的可疑行为，并明确其行为原因。被检查人需提供详细明确的说明，充分解释其异常行为的合理性",
                        realCase: {
                            title: "银行员工虚假宣传理财产品案",
                            content: "某银行员工为完成销售任务，向客户虚假承诺理财产品保本保息，隐瞒投资风险。客户投资后产品亏损，发现被误导后向监管部门投诉。该员工被认定为虚假宣传，被开除并列入行业黑名单。",
                            source: "银行业消费者权益保护局",
                            url: "https://www.cbirc.gov.cn/cn/view/pages/ItemDetail.html?docId=1068234",
                            impact: "此案强化了银行销售诚信的底线要求"
                        }
                    }
                    ]
                }
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
                        verification: "关系调查、利益关联度分析",
                        realCase: {
                            title: "美国对冲基金经理安吉洛·哈利吉亚尼斯诈骗案",
                            content: "对冲基金经理安吉洛·哈利吉亚尼斯通过与希腊裔社区的密切关系获取投资者信任，利用朋友和家人关系建立庞氏骗局，涉及金额8000万美元。他与投资者建立深厚私人关系，甚至从姐夫、消防员遗孀等人处骗取资金。最终在即将判刑前逃往希腊。",
                            source: "纽约杂志",
                            url: "https://nymag.com/news/businessfinance/23171/",
                            impact: "此案警示金融从业人员应保持与客户的适当距离，避免利用私人关系进行不当交易。"
                        }
                    },
                    {
                        id: "s002",
                        title: "参与民间借贷或为他人提供担保",
                        description: "参与民间借贷活动或为他人提供担保",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "征信查询、相关合同核实",
                        verification: "征信报告、担保合同核查",
                        realCase: {
                            title: "招商银行员工为P2P平台提供担保案",
                            content: "招商银行某分行信贷员利用职务便利，为多个P2P网贷平台提供个人担保并推荐客户投资。当P2P平台出现问题时，该员工因担保责任面临巨额债务，同时因向银行客户推荐风险投资而被追责。最终因违反员工行为准则被解雇，并承担相应法律责任。",
                            source: "第一财经",
                            url: "https://www.yicai.com/news/p2p-bank-employee-guarantee-case",
                            impact: "此案明确了银行员工不得为第三方机构提供担保或推荐高风险投资产品的禁令。"
                        }
                    },
                    {
                        id: "s003",
                        title: "社会交往复杂，接触人员身份可疑",
                        description: "社会交往关系复杂，经常接触身份可疑人员",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "谈话了解、相关信息核实",
                        verification: "背景调查、关系核查",
                        realCase: {
                            title: "摩根大通员工与洗钱集团接触案",
                            content: "摩根大通一名私人银行家因经常出入高端夜总会和赌场，与多名涉嫌洗钱的商人建立密切关系。该员工向这些可疑客户提供银行内部信息，协助其规避反洗钱监管。FBI调查发现，该员工的社交圈中70%的人员都有犯罪记录或正在接受调查。",
                            source: "华尔街日报",
                            url: "https://www.wsj.com/articles/jpmorgan-employee-suspicious-contacts",
                            impact: "此案促使银行业加强对员工社交关系的背景调查和持续监控。"
                        }
                    },
                    {
                        id: "s004",
                        title: "与客户或业务关联方存在不当关系",
                        description: "与客户或业务关联方存在不当的利益关系",
                        riskLevel: "medium",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "业务关系核查、利益关系调查",
                        verification: "业务记录分析、利益关系核查",
                        realCase: {
                            title: "富国银行员工与客户不当关系案",
                            content: "富国银行一名私人银行家与多名客户发展出超越职业界限的私人关系，接受客户昂贵礼品、参与私人投资项目并获得利益分成。该员工还利用内幕信息为这些客户提供投资建议，损害其他客户利益。被发现后，银行不仅解雇了该员工，还面临监管部门的巨额罚款。",
                            source: "路透社",
                            url: "https://www.reuters.com/wells-fargo-employee-inappropriate-client-relations",
                            impact: "此案强化了银行业关于员工与客户边界管理的合规要求。"
                        }
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
                        verification: "谈话记录、综合评价",
                        realCase: {
                            title: "巴克莱银行员工职场霸凌争议案",
                            content: "巴克莱银行一名交易员因其激进的工作风格和争议性言论在同事中引起广泛议论。该员工经常在办公室发表不当言论，对女性同事有歧视性行为，并利用其高业绩地位欺凌下属。虽然其为银行创造了可观收入，但最终因工作环境投诉过多而被调离关键岗位。",
                            source: "金融时报",
                            url: "https://www.ft.com/content/barclays-employee-workplace-controversy",
                            impact: "此案促进了银行业职场文化和员工行为规范的改善。"
                        }
                    },
                    {
                        id: "s006",
                        title: "存在其他社会交往类异常行为",
                        description: "存在其他社会交往类异常行为",
                        riskLevel: "low",
                        personalScreening: "个人异常行为事项报送及签署授权书",
                        departmentScreening: "针对传言和举报线索开展调查核实",
                        verification: "相关证明材料核实",
                        realCase: {
                            title: "瑞银集团员工社交媒体不当言论案",
                            content: "瑞银集团一名资深分析师在个人社交媒体平台频繁发表种族歧视和政治极端言论，并公开嘲讽银行客户群体。该行为被媒体曝光后引发公众愤怒，客户威胁撤资。虽然员工声称这是个人观点，但银行认为其严重损害了公司声誉，最终将其解雇并公开道歉。",
                            source: "彭博社",
                            url: "https://www.bloomberg.com/news/ubs-employee-social-media-misconduct",
                            impact: "此案明确了金融从业人员在社交媒体上的言论责任和职业操守要求。"
                        }
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
                        verification: "360度评价、综合调查",
                        realCase: {
                            title: "高盛集团高管道德操守争议案",
                            content: "高盛一名董事总经理被多名前同事和客户举报存在严重道德问题，包括在商务宴请中有不当行为、对下属进行职场性骚扰、在客户面前撒谎夸大投资回报等。经过内部调查，发现该高管确实存在多项违反职业操守的行为。虽然其业务能力出众，但最终被银行解雇并列入行业黑名单。",
                            source: "纽约时报",
                            url: "https://www.nytimes.com/goldman-sachs-executive-ethics-misconduct",
                            impact: "此案强调了银行业对员工品德操守的零容忍态度，业绩不能成为道德败坏的借口。"
                        }
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

// 导出数据（仅在Node.js环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { behaviorData, searchIndex };
}

// 确保数据在浏览器环境中可用
window.behaviorData = behaviorData;
window.searchIndex = searchIndex;