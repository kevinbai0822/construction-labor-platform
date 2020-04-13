<template>
    <div class="filter-page-wrapper">
        <div class="main-box">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>工程信息</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="filter-wrap">
                <ul class="filter-list">
                    <li class="list-item" v-for="f in filterList" :key="f.id">
                        <span class="item-title">{{f.title}}：</span>
                        <ul class="item-content">
                            <li class="items" v-for="i in f.items" :key="i.id"
                            :class="{'active': f.itemCheck.id === i.id}"
                            @click="f.itemCheck = i">{{i.name}}</li>
                        </ul>
                    </li>
                </ul>
                <div class="checked-panel" v-if="checkedList.length > 0">
                    <span class="title">已选条件：</span>
                    <div class="checked-items">
                        <span class="item" v-for="c in checkedList" :key="c.id" @click="deleteFilterItem(c)">{{c.name}}<i class="el-icon-close"></i></span>
                    </div>
                </div>
            </div>
            <div class="result-wrap">
                <div class="result-panel">
                    <ul class="result-list">
                        <li class="result-item" v-for="r in resultList" :key="r.id"
                        @click="getDetail()">
                            <div class="result-content-wrap">
                                <h2 class="title">{{r.title}}<span class="tag" v-if="r.authStatus === 1">已审核</span><span class="tag" v-if="r.authStatus === 2">手机认证</span></h2>
                                <p class="intro">{{r.intro}}</p>
                            </div>
                            <div class="result-info-wrap">
                                <div class="unit-price">{{r.unit}}</div>
                                <ul class="info-list">
                                    <li class="info-item">
                                        <span class="title">需求数量：</span>
                                        <span class="content">{{r.needPeople}}</span>
                                    </li>
                                    <li class="info-item">
                                        <span class="title">所在地区：</span>
                                        <span class="content">{{r.area}}</span>
                                    </li>
                                    <li class="info-item">
                                        <span class="title">发布时间：</span>
                                        <span class="content">{{r.time}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>  
                    </ul>
                    <div class="pagination-panel">
                        <el-pagination
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                        </el-pagination>
                    </div>
                </div>
                <div class="rank-wrap">
                    <div class="rank-panel week-panel">
                        <h3 class="panel-title">本周热门</h3>
                        <ul class="hot-list">
                            <li class="hot-item" v-for="(w, index) in weekHot" :key="w.id">
                                <i class="number">{{index+1}}</i>
                                <span class="keyword">{{w.name}}</span>
                                <span class="count">{{w.count}}条</span>
                            </li>
                        </ul>
                    </div>
                    <div class="rank-panel month-panel">
                        <h3 class="panel-title">本月热门</h3>
                        <ul class="hot-list">
                            <li class="hot-item" v-for="(w, index) in weekHot" :key="w.id">
                                <i class="number">{{index+1}}</i>
                                <span class="keyword">{{w.name}}</span>
                                <span class="count">{{w.count}}条</span>
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
            filterList: [
                {
                    title: '分类',
                    items: [
                        {
                            id: 0,
                            name: '全部'
                        },
                        {
                            id: 1,
                            name: '工程找队伍'
                        },
                        {
                            id: 2,
                            name: '工程找机械'
                        },
                        {
                            id: 3,
                            name: '工程找个人'
                        }
                    ],
                    itemCheck: {
                        id: 0,
                        name: '全部'
                    }
                },
                {
                    title: '认证',
                    items: [
                        {
                            id: 0,
                            name: '全部'
                        },
                        {
                            id: 1,
                            name: '实名认证'
                        },
                        {
                            id: 2,
                            name: '企业认证'
                        }
                    ],
                    itemCheck: {
                        id: 0,
                        name: '全部'
                    }
                },
                {
                    title: '类型',
                    items: [
                        {
                            id: 0,
                            name: '全部'
                        },
                        {
                            id: 1,
                            name: '项目负责人'
                        },
                        {
                            id: 2,
                            name: '工程中介'
                        }
                    ],
                    itemCheck: {
                        id: 0,
                        name: '全部'
                    }
                },
                {
                    title: '地区',
                    items: [
                        {
                            id: 0,
                            name: '全部'
                        },
                        {
                            id: 1,
                            name: '北京'
                        },
                        {
                            id: 2,
                            name: '上海'
                        },
                        {
                            id: 3,
                            name: '重庆'
                        },
                        {
                            id: 4,
                            name: '天津'
                        },
                        {
                            id: 5,
                            name: '河北省'
                        },
                        {
                            id: 6,
                            name: '河南省'
                        },
                        {
                            id: 7,
                            name: '山东省'
                        },
                        {
                            id: 8,
                            name: '山西省'
                        },
                        {
                            id: 9,
                            name: '安徽省'
                        },
                        {
                            id: 10,
                            name: '江苏省'
                        },
                        {
                            id: 11,
                            name: '浙江省'
                        }
                    ],
                    itemCheck: {
                        id: 0,
                        name: '全部'
                    }
                }
            ],
            checkedList: [],
            resultList: [
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 0,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 2,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                },
                {
                    title: '江苏徐州沛县2栋26十1，大约4万平方劳务项目找施工队伍',
                    authStatus: 1,
                    intro: '江苏徐州沛县2栋26十1，大约4万平方劳务，合同价495元，到你手每平方480元，付款正负50%,上面每十层付60℅，封顶付80℅，验收结束付97℅，工人每月实名制发放3一5千元，签合同进场付40万元（可谈）。可以动用40万买周转材料，如不动用正负零完成全部退还。好处费人员进场15万，余下分3次付清，干好还有20万平。',
                    unit: '面议',
                    needPeople: '100人',
                    area: '江苏省',
                    time: '2020-04-06'
                }
            ],
            weekHot: [
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                },
                {
                    name: '木工',
                    count: 564
                }
            ]
        }
    },
    methods: {
        deleteFilterItem(item){
            for(let i in this.checkedList){
                if(this.checkedList[i] == item){
                    this.checkedList.splice(i, 1)
                }
                for(let j of this.filterList){
                    if(item == j.itemCheck){
                        j.itemCheck = {
                            id: 0,
                            name: '全部'
                        }
                    }
                }
            }
        },
        getDetail(){
            this.$router.push('/project-detail')
        }
    },
    watch: {
        filterList: {
            handler: function(val, oldVal){
                this.checkedList.splice(0, this.checkedList.length)
                for(let i of val){
                    if(i.itemCheck.id !== 0){
                        this.checkedList.push(i.itemCheck)
                    }
                }
            },
            deep: true
        }
    }
}
</script>

<style>

</style>