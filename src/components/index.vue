<template>
    <div class="index-wrapper">
        <div class="main-box">
            <div class="banner-wrapper">
                <ul class="leftbar">
                    <li class="bar-item" v-for="lb in leftbar" :key="lb.id">
                        <span>{{lb.title}}</span><i class="el-icon-arrow-right"></i>
                        <div class="sublist-wrap">
                            <div class="sublist-panel" v-for="sl in lb.subList" :key="sl.id">
                                <span class="subtitle" v-if="sl.title">{{sl.title}}</span>
                                <div class="subitems">
                                    <span class="" v-for="s in sl.items" :key="s.id">{{s.name}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="banner-panel">
                    <el-carousel indicator-position="outside">
                        <el-carousel-item>
                            <img src="../assets/index/banner-1.jpg" alt="">
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/index/banner-2.jpg" alt="">
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/index/banner-3.jpg" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div> 
                <div class="personal-panel">
                    <div class="avatar-panel">
                        <div class="avatar">
                            <img src="../assets/index/default-avatar.png" alt="">
                        </div>
                        <div class="username">Hi , {{personalData.username?personalData.username:'游客'}}</div>
                        <div class="operate-panel">
                            <span class="login"><i class="el-icon-user"></i>登录</span>
                            <span class="register"><i class="el-icon-edit"></i>立即注册</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-wrapper">
                <div class="info-title">
                    <h1 class="title">工程信息</h1>
                    <h2 class="subtitle">寻找适合你的工程信息</h2>
                </div>
                <div class="info-panel-wrap">
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">工程找队伍</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="t in teamData" :key="t.id">
                                <span class="item-title">{{t.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{t.date}}</span>
                                    <span class="item-location">【{{t.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">工程找机械</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="m in machineData" :key="m.id">
                                <span class="item-title">{{m.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{m.date}}</span>
                                    <span class="item-location">【{{m.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">工程找个人</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="w in workerData" :key="w.id">
                                <span class="item-title">{{w.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{w.date}}</span>
                                    <span class="item-location">【{{w.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="info-wrapper">
                <div class="info-title">
                    <h1 class="title">施工队伍</h1>
                    <h2 class="subtitle">寻找你需要的施工队伍</h2>
                </div>
                <div class="info-panel-wrap">
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">施工队伍</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="w in constructionTeam" :key="w.id">
                                <span class="item-title">{{w.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{w.date}}</span>
                                    <span class="item-location">【{{w.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">机械/驾驶员</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="w in constructionMachine" :key="w.id">
                                <span class="item-title">{{w.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{w.date}}</span>
                                    <span class="item-location">【{{w.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="info-wrapper">
                <div class="info-title">
                    <h1 class="title">其他服务</h1>
                    <h2 class="subtitle">找你想要的</h2>
                </div>
                <div class="info-panel-wrap">
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">个人劳务</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="t in personalService" :key="t.id">
                                <span class="item-title">{{t.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{t.date}}</span>
                                    <span class="item-location">【{{t.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">整体工程</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="m in projectData" :key="m.id">
                                <span class="item-title">{{m.title}}</span>
                                <div class="item-right">
                                    <!-- <span class="item-date">{{m.date}}</span> -->
                                    <span class="item-location">【{{m.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="info-panel">
                        <div class="panel-title">
                            <span class="title">职称挂靠</span>
                            <span class="more">更多</span>
                        </div>
                        <ul class=info-list>
                            <li class="info-item" v-for="w in positionalTitle" :key="w.id">
                                <span class="item-title">{{w.title}}</span>
                                <div class="item-right">
                                    <span class="item-date">{{w.date}}</span>
                                    <span class="item-location">【{{w.location}}】</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            leftbar: [
                {
                    title: '工程找队伍',
                    subList: [
                        {
                            title: '',
                            items: [
                                {
                                    name: '房建土建类工程'
                                },
                                {
                                    name: '基础工程'
                                },
                                {
                                    name: '模板工'
                                },
                                {
                                    name: '钢筋加工'
                                },
                                {
                                    name: '网架施工'
                                },
                                {
                                    name: '外墙保温'
                                },
                                {
                                    name: '给排水'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '工程找机械',
                    subList: [
                        {
                            title: '',
                            items: [
                                {
                                    name: '前二后四'
                                },
                                {
                                    name: '半挂自卸车'
                                },
                                {
                                    name: '挖掘机'
                                },
                                {
                                    name: '推土机'
                                },
                                {
                                    name: '混凝土设备'
                                },
                                {
                                    name: '泵车'
                                },
                                {
                                    name: '塔吊'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '工程找个人劳务',
                    subList: [
                        {
                            title: '施工工人',
                            items: [
                                {
                                    name: '木工'
                                },
                                {
                                    name: '油漆工'
                                },
                                {
                                    name: '泥瓦工'
                                },
                                {
                                    name: '水电工'
                                },
                                {
                                    name: '爆破工'
                                },
                                {
                                    name: '钢筋工'
                                }
                            ]
                        },
                        {
                            title: '安装工人',
                            items: [
                                {
                                    name: '强电电工'
                                },
                                {
                                    name: '电焊工'
                                },
                                {
                                    name: '架子工'
                                },
                                {
                                    name: '水暖工'
                                },
                                {
                                    name: '电气设备安装工'
                                },
                                {
                                    name: '弱电工'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '施工队伍',
                    subList: [
                        {
                            title: '技术工种',
                            items: [
                                {
                                    name: '电焊工'
                                },
                                {
                                    name: '木工'
                                },
                                {
                                    name: '风炮工'
                                },
                                {
                                    name: '石工'
                                },
                                {
                                    name: '瓷砖工'
                                },
                                {
                                    name: '模板工'
                                }
                            ]
                        },
                        {
                            title: '司机/驾驶员',
                            items: [
                                {
                                    name: '挖掘机司机'
                                },
                                {
                                    name: '混凝土搅拌车司机'
                                },
                                {
                                    name: '架桥机司机'
                                },
                                {
                                    name: '压路机司机'
                                },
                                {
                                    name: '顶管机司机'
                                },
                                {
                                    name: '装载车司机'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '个人劳务',
                    subList: [
                        {
                            title: '技术工种',
                            items: [
                                {
                                    name: '电焊工'
                                },
                                {
                                    name: '木工'
                                },
                                {
                                    name: '风炮工'
                                },
                                {
                                    name: '石工'
                                },
                                {
                                    name: '瓷砖工'
                                },
                                {
                                    name: '模板工'
                                }
                            ]
                        },
                        {
                            title: '司机/驾驶员',
                            items: [
                                {
                                    name: '挖掘机司机'
                                },
                                {
                                    name: '混凝土搅拌车司机'
                                },
                                {
                                    name: '架桥机司机'
                                },
                                {
                                    name: '压路机司机'
                                },
                                {
                                    name: '顶管机司机'
                                },
                                {
                                    name: '装载车司机'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '整体工程',
                    subList: [
                        {
                            title: '',
                            items: [
                                {
                                    name: '招标'
                                },
                                {
                                    name: '中标'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '职称挂靠',
                    subList: [
                        {
                            title: '企业寻证',
                            items: [
                                {
                                    name: '一级建造师'
                                },
                                {
                                    name: '二级建造师'
                                },
                                {
                                    name: '注册造价师'
                                }
                            ]
                        },
                        {
                            title: '个人挂靠',
                            items: [
                                {
                                    name: '一级建造师'
                                },
                                {
                                    name: '二级建造师'
                                },
                                {
                                    name: '注册结构师'
                                }
                            ]
                        }
                    ]
                }
            ],
            personalData: {
                avatar: '',
                username: ''
            },
            teamData: [
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市六七万平方三栋高层6栋低层需要内墙抹灰施工队伍',
                    date: '04-06',
                    location: '江苏省'
                }
            ],
            machineData: [
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                },
                {
                    title: '河北雄安新区急需前四后八轮30辆，加帮十轮30辆',
                    date: '04-06',
                    location: '河北省'
                }
            ],
            workerData: [
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏省南京市找电工',
                    date: '04-06',
                    location: '江苏省'
                }
            ],
            constructionTeam: [
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市专业施工队',
                    date: '04-06',
                    location: '江苏省'
                }
            ],
            constructionMachine: [
                {
                    title: '江苏南京市挖掘机铲车机械队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市土石方运输队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市挖掘机铲车机械队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市土石方运输队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市挖掘机铲车机械队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市土石方运输队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市挖掘机铲车机械队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市土石方运输队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市挖掘机铲车机械队',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市土石方运输队',
                    date: '04-06',
                    location: '江苏省'
                }
            ],
            personalService: [
                {
                    title: '江苏南京市10年木工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏泰州专业泥瓦工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市10年木工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏泰州专业泥瓦工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市10年木工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏泰州专业泥瓦工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市10年木工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏泰州专业泥瓦工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市10年木工',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏泰州专业泥瓦工',
                    date: '04-06',
                    location: '江苏省'
                }
            ],
            projectData: [
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '耐磨衬板A李阳高分子耐磨衬板A耐磨衬板供应商',
                    date: '04-06',
                    location: '江苏省'
                }
            ],
            positionalTitle: [
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                },
                {
                    title: '江苏南京市企业急需二级建造师数名',
                    date: '04-06',
                    location: '江苏省'
                }
            ]
        }
    }
}
</script>

<style>

</style>