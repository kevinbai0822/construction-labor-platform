<template>
    <div class="header-wrapper">
        <div class="header-top">
            <div class="main-box">
                <div class="city-panel"><i class="el-icon-location"></i>{{currentCity}}</div>
                <div class="login-panel">
                    <span class="register">立即注册</span>
                    <span class="login">登录</span>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="main-box">
                <div class="logo-wrap">
                    <div class="logo">LOGO</div>
                    <div class="search-panel">
                        <div class="search-el">
                            <input type="text" placeholder="请输入关键词">
                            <i class="el-icon-search"></i>
                        </div>
                        <div class="hot-search">
                            <span class="item" v-for="h in hotSearch" :key="h.id">{{h.name}}</span>
                        </div>
                    </div>
                    <div class="release-panel">
                        <button class="primary-btn"><i class="el-icon-edit-outline"></i>发布信息</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-panel">
            <div class="main-box">
                <ul class="navbar">
                    <li class="nav-item" v-for="n in navList" :key="n.id"
                    @click="jumpUrl(n.url)">{{n.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentCity: '南京',
            hotSearch: [
                {
                    name: '热门搜索1'
                },
                {
                    name: '热门搜索2'
                },
                {
                    name: '热门搜索3'
                },
                {
                    name: '热门搜索4'
                },
                {
                    name: '热门搜索5'
                }
            ],
            navList: [
                {
                    title: '首页',
                    url: '/'
                },
                {
                    title: '工程信息',
                    url: ''
                },
                {
                    title: '施工队伍',
                    url: ''
                },
                {
                    title: '个人劳务',
                    url: ''
                },
                {
                    title: '整体工程',
                    url: ''
                },
                {
                    title: '职称挂靠',
                    url: ''
                }
            ]
        }
    },
    methods: {
        jumpUrl(u){
            if(u){
                this.$router.push(u)
            }else{
                this.$router.push('/filter-page')
            }
        }
    }
}
</script>