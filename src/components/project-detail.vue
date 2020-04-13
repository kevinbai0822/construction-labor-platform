<template>
    <div class="project-detail-wrapper">
        <div class="main-box">
            <div class="top-panel">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>工程信息</el-breadcrumb-item>
                </el-breadcrumb>
                <span class="browse-time">浏览16次</span>
            </div>
            <div class="detail-wrap">
                <div class="detail-panel">
                    <div class="status">已审核</div>
                    <div class="info-wrap">
                        <div class="title-panel">
                            <h1 class="title">{{detailData.title}}</h1>
                        </div>
                        <div class="info-panel">
                            <span class="info-item">
                                <span class="info-title">发布时间：</span>
                                <span class="info-content">{{detailData.time}}</span>
                            </span>
                            <span class="info-item">
                                <span class="info-title">工程地区：</span>
                                <span class="info-content">{{detailData.area}}</span>
                            </span>
                            <span class="info-item">
                                <span class="info-title">需要人数：</span>
                                <span class="info-content">{{detailData.people}}</span>
                            </span>
                            <span class="info-item">
                                <span class="info-title">单价：</span>
                                <span class="info-content mark">{{detailData.price}}</span>
                            </span>
                            <span class="info-item">
                                <span class="info-title">是否需要垫资：</span>
                                <span class="info-content">{{detailData.isRepaid}}</span>
                            </span>
                            <span class="info-item">
                                <span class="info-title">与工程的关系：</span>
                                <span class="info-content">{{detailData.relationship}}</span>
                            </span>
                        </div>
                    </div>
                    <div class="desc-panel">
                        <div class="panel-title">详细说明</div>
                        <p class="desc-content" v-html="desc"></p>
                        <div class="contact-panel">
                            <button class="">获取联系方式</button>
                        </div>
                    </div>
                </div>
                <div class="intro-panel">
                    <div class="user-panel">
                        <div class="personal-item">
                            <div class="avatar">
                                <img src="../assets/index/default-avatar.png" alt="">
                            </div>
                            <div class="username">周师傅</div>
                        </div>
                        <div class="credit-panel">
                            <div class="item credit-item">
                                <span class="title">信用记录</span>
                                <span class="result good">好</span>
                            </div>
                            <div class="item">
                                <span class="title">帖子数</span>
                                <span class="result">1</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-panel week-panel">
                        <h3 class="panel-title">最新工程信息</h3>
                        <ul class="hot-list">
                            <li class="hot-item" v-for="(w, index) in lastInfo" :key="w.id">
                                <i class="number">{{index+1}}</i>
                                <span class="keyword">{{w.name}}</span>
                                <span class="count">【{{w.area}}】</span>
                            </li>
                        </ul>
                    </div>
                    <div class="rank-panel month-panel">
                        <h3 class="panel-title">同地区工程信息</h3>
                        <ul class="hot-list">
                            <li class="hot-item" v-for="(w, index) in lastInfo" :key="w.id">
                                <i class="number">{{index+1}}</i>
                                <span class="keyword">{{w.name}}</span>
                                <span class="count">【{{w.area}}】</span>
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
            detailData: {
                title: '浙江杭州地下室不搭架子、不拆模18元一个展开面工程找木工师傅',
                price: '面议',
                time: '2020-04-06',
                area: '浙江省杭州市',
                people: '10人',
                isRepaid: '否',
                relationship: '工程负责人',
                contact: '18989897676'
            },
            desc: `
                浙江杭州亚运村土石方项目:全程十五公里国道（正负两公里）两个卸点。工期八个月。每车运费440元整。全程明保。24小时作业。日结运费。甲方提供住宿（费用自理）调车费每台车2000元，运输一周后从运费中扣除。合同期内甲方原因造成停工，甲方赔偿乙方每天每台车700元经济损失，直到开工止。在运输过程中乙方车辆被交警、路政、环保等相关部门查扣罚造成的一切经济损失均由甲方承担。车型要求:7.6/1.3或7.6/1.5国五绿皮环保车，总共150台，先发100台（五证两险齐全）车资料用于路政报备。如能接受以上条件先发100台车辆手续，疫情过去开工。
            `,
            lastInfo: [
                {
                    name: '浙江杭州地下室不搭架子、不拆模18元一个展开面工程找木工师傅',
                    area: '浙江省'
                },
                {
                    name: '浙江杭州地下室不搭架子、不拆模18元一个展开面工程找木工师傅',
                    area: '浙江省'
                },
                {
                    name: '浙江杭州地下室不搭架子、不拆模18元一个展开面工程找木工师傅',
                    area: '浙江省'
                },
                {
                    name: '浙江杭州地下室不搭架子、不拆模18元一个展开面工程找木工师傅',
                    area: '浙江省'
                },
                {
                    name: '浙江杭州地下室不搭架子、不拆模18元一个展开面工程找木工师傅',
                    area: '浙江省'
                }
            ]
        }
    }
}
</script>

<style>

</style>