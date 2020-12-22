<template>
  <router-view></router-view>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  router,
  components: {
  },
};
</script>

<style>
html,body{
  background-color: #f1f1f1;
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 1530px;
  max-width: 1530px;
  margin: 0 auto;

}
a:link{
  color: #409EFF;
}
a:visited{
  color: #409EFF;
}
a:hover{
  color: #409EFF;
}
a:active{
  color: #409EFF;
}
/* 服务于productDetail */
.tag > .el-radio-button__inner{
  border-radius: 0 !important;
  border: 1px solid #DCDFE6;
}
</style>
