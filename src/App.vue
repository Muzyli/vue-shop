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
</style>
