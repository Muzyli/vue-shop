<template>
  <div>
    <navigation></navigation>
    <el-row>
      <el-col :span="5" :offset="4">
        <div ref="box" @mouseover="handOver" @mousemove="handMove" @mouseout="handOut">
        <el-image class="initial"
        :style="{
          'width': `${initialSize}px`,
          'height': `${initialSize}px`}"
        :src="url"
        fit="fill"></el-image>
        <div v-show="bigger" class="box"
        :style="{
          'top':`${boxTop}px`,
          'margin-left':`${boxLeft}px`,
          'width':`${initialSize/times}px`,
          'height':`${initialSize/times}px`}"></div></div>
      </el-col>
      <div v-show="bigger" class="enlarge"
      :style="{
        'width':`${showLargeSize}px`,
        'height':`${showLargeSize}px`,
        'margin-left':`${initialSize+20}px`
      }">
        <img class="largeImg"
        :style="{
          'right':`${boxLeft*times*showLargeSize/initialSize}px`,
          'bottom':`${boxTop*times*showLargeSize/initialSize}px`,
          'width': `${showLargeSize*times}px`,
          'height': `${showLargeSize*times}px`
        }"
         :src="url"/>
      </div>
    </el-row>
  </div>
</template>
<script>
import navigation from '../components/Navigation.vue';

export default {
  components: {
    navigation,
  },
  data() {
    return {
      boxLeft: 0,
      boxTop: 0,
      bigger: false,
      // 原图尺寸
      initialSize: 400,
      // 大图尺寸
      showLargeSize: 450,
      // 倍率控制
      times: 2,
      url: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/122842/37/14936/69271/5f8801fdEa3a69e43/0bcb41d5a3661a8c.jpg',
    };
  },
  methods: {
    handOver() {
      this.bigger = true;
      const img = this.$refs.box.getBoundingClientRect();
      this.imgx = img.x;
      this.imgy = img.y;
    },
    handMove(e) {
      const offsetx = e.clientX - this.imgx - this.initialSize / this.times / 2;
      const offsety = e.clientY - this.imgy - this.initialSize / this.times / 2;
      let x = 0;
      let y = 0;
      if (offsetx >= 0 && offsetx <= this.initialSize / 2) {
        x = offsetx;
      } else if (offsetx < 0) {
        x = 0;
      } else if (offsetx > this.initialSize / this.times / 2) {
        x = this.initialSize / 2;
      }
      this.boxLeft = x;
      if (offsety >= 0 && offsety <= this.initialSize / 2) {
        y = offsety;
      } else if (offsety < 0) {
        y = 0;
      } else if (offsety > this.initialSize / this.times / 2) {
        y = this.initialSize / 2;
      }
      this.boxTop = y;
    },
    handOut() {
      this.bigger = false;
    },
  },
  mounted() {
  },
};
</script>
<style scoped>
.enlarge{
  overflow:hidden;
  position:absolute;
  left:16.666667%;
}
.box{
  /* width: 200px;
  height: 200px; */
  background-color: lightblue;
  position: absolute;
  opacity: 0.5;
}
.largeImg{
  /* width:600px;
  height:600px; */
  position: relative;
}
.initial{
  float:left;
}
</style>
