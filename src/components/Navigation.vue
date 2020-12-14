<template>
  <div class="back">
    <el-row class="nav">
      <el-col :span="14" :offset="4">
        <div>
          <div class="el-input" style="width:90%">
            <input style="border-radius: 0px" type="text"
            autocomplete="off" placeholder="请输入内容" class="el-input__inner">
          </div>
          <el-button type="danger"
          style="width: 10%;border-radius:0px;
          border-bottom: 0px;min-width:80px"
           icon="el-icon-search">搜索</el-button>
        </div>
      </el-col>
      <el-col :span="1" :offset="1">
        <!-- 徽章：从本地缓存中获取 -->
        <el-badge :value="cartNumber" class="item">
          <el-button @click="$router.push('/shopCart')"
          style="margin-top: 4px" size="small" type="primary">购物车</el-button>
        </el-badge>
      </el-col>
      <el-col :span="2" :offset="1">
        <span ref="user" style="margin-top: 5px;display:block">
          <router-link to="login">登录/</router-link>
          <router-link to="register">注册</router-link>
        </span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="padding-bottom: 1%;">
        <span style="color: red">每日推荐</span>
        <router-link to="#" style="margin-left: 5px;text-decoration:none"
        v-for="(item, i) in recommend" :key="i">
          {{item}}
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Service from '../axios/http';

export default {
  data() {
    return {
      input: '',
      recommend: [],
      cartNumber: 0,
    };
  },
  methods: {
    handleCartClick() {
      this.$router.push('/shopCart');
    },
  },
  created() {
    this.cartNumber = localStorage.getItem('cartNumber') || 0;
    Service('recommend').then((res) => {
      this.recommend = res.data.data;
    });
    // 初始化
    const str = localStorage.getItem('cart');
    if (str !== null && str !== '') {
      this.cartNumber = JSON.parse(str).length;
    }
  },
  mounted() {
    // 监听localStorage的set事件
    const that = this;
    window.addEventListener('setItemEvent', (e) => {
      if (e.key === 'cart') {
        that.cartNumber = JSON.parse(e.value).length;
      }
    });
  },
};
</script>
<style scoped>
.back {
  padding: auto;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  margin-bottom: 20px;
}
.nav {
  padding-top: 1%;
};
</style>
