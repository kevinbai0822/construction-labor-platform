<template>
  <div id="app">
    <i-head></i-head>
    <router-view/>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
    <footer>
      <!-- <div class="foot-navbar">
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">联系方式</a>
      </div> -->
    </footer>
  </div>
</template>

<script>
import iHead from './components/parts/header'
export default {
  name: 'App',
  components: {
    iHead
  }
}
</script>

<style>
</style>
