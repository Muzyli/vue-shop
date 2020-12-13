<template>
  <div>
    <navigation></navigation>
    <el-row class="interval">
      <!-- 放大镜效果---开始 -->
      <el-col :span="7" :offset="4">
        <div ref="box" @mouseover="handOver" @mousemove="handMove" @mouseout="handOut">
          <el-image class="initial"
          :style="{
            'width': `${initialSize}px`,
            'height': `${initialSize}px`}"
          :src="product.imgUrl"
          fit="fill"></el-image>
          <div v-show="bigger" class="box"
          :style="{
            'top':`${boxTop}px`,
            'margin-left':`${boxLeft}px`,
            'width':`${initialSize/times}px`,
            'height':`${initialSize/times}px`}"></div>
        </div>
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
         :src="product.imgUrl"/>
      </div>
      <!-- 放大镜效果---结束 -->
      <el-col :span="9" class="enlarge"
      :style="{'margin-left': `${initialSize+40}px`}">
        <el-row><h2>{{product.name}}</h2></el-row>
        <div style="background-color: white;padding: 8px">
          <el-row style="display:inline">
            <span class="title">优惠：</span>
            <span style="color:red;margin-right:8px;"
            v-for="(item, i) in product.preferential" :key="i"
            >{{item}}</span>
          </el-row>
          <el-row>
            <span class="title">会员价：</span>
            <span style="color: red;font-size:32px">￥{{product.vipPrice}}元</span>
          </el-row>
          <el-row>
            <span class="title">原价：</span>
            <span>￥{{product.price}}元</span>
          </el-row>
        </div>
        <el-row>
          <span class="title" style="margin-top: 10px">配送至：</span>
          <span>**************地</span>
        </el-row>
        <hr />
        <!-- 属性及子属性的配置 -->
        <el-row style="margin-top: 10px"
        v-for="(item, i) in product.property" :key="i">
          <span class="title">{{item.title}}:</span>
          <el-radio-group size="small" v-model="chooseProperty[i]" style="display:inline">
            <el-radio-button class="tag"
              v-for="(tag, i) in item.tags" :key="i"
              :label="tag"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row style="text-align: center;padding-top: 20px">
          <el-button type="primary">立即购买</el-button>
          <el-button type="danger">加入购物车</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="margin-top:30px">
        <el-menu :default-active="currentIndex"
         class="el-menu-demo" mode="horizontal" @select="handleSelect"
         background-color="#fff" text-color="#000" active-text-color="#c0392b">
          <el-menu-item index="1">商品介绍</el-menu-item>
          <el-menu-item index="2">规格与包装</el-menu-item>
          <el-menu-item index="3">售后保障</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div v-if="currentIndex === '1'">
          <template v-for="item in product.introduction.imgs">
            <el-image :key="item" style="width:100%"
            :src="item" fit="fill">{{item}}</el-image>
          </template>
        </div>
        <div v-if="currentIndex === '2'">
          <el-row>
            <el-col :span="24" style="margin-bottom: 100px">
              <div style="margin: 10px;color:#999"
              v-for="item in product.introduction.parameters" :key="item">
                {{item}}
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="currentIndex === '3'" style="margin-left: 30%;margin-top:-6vw">
          <span style="font-size: 25vw">没有售后</span>
        </div>
      </el-col>
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
      // 左边距
      boxLeft: 0,
      // 右边距
      boxTop: 0,
      // 是否开启
      bigger: false,
      // 原图尺寸
      initialSize: 400,
      // 大图尺寸
      showLargeSize: 450,
      // 倍率控制
      times: 2,
      currentIndex: '1',
      menu: {
        activeColor: 'red',
        fontColor: 'white',
      },
      chooseProperty: [],
      product: {
        productId: 1,
        name: '一加OnePlus 8T',
        preferential: ['包邮', '送贴膜', '三年保修'],
        vipPrice: 999,
        price: 9999,
        imgUrl: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/122842/37/14936/69271/5f8801fdEa3a69e43/0bcb41d5a3661a8c.jpg',
        property: [
          {
            title: '选择颜色',
            tags: ['白色', '青色', '灰色'],
          },
          {
            title: '选择版本',
            tags: ['8+128G', '8+256G', '12+128G', '12+256G', '12+512G'],
          },
          {
            title: '选择套餐',
            tags: ['套餐一', '套餐二', '套餐三'],
          },
        ],
        introduction: {
          imgs: [
            'https://img10.360buyimg.com/imgzone/jfs/t1/121030/7/17857/377113/5faa2beeE5f9d0d74/4c294740a366ecfc.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t1/148751/24/13939/267507/5faa2beeE1c64ff5c/6f5169aa3664e116.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t1/134899/28/15541/193785/5faa2bedE5e349973/3c85a096f61586c9.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t1/149026/25/13870/347734/5faa2beeEc9a079f7/f07efb9dcc8f670f.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t1/135987/2/15416/196634/5faa2beeE2731f602/ee64dbcdf97afd01.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t1/137070/38/15414/141877/5faa2beeE9eceaf49/b6af96591c5bb2d5.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t1/135957/5/18396/403309/5fc9a42aE67621879/b08da2b13a652ade.jpg',
          ],
          parameters: [
            '商品名称：一加OnePlus 8T',
            'CPU型号：骁龙865',
            '摄像头数量：后置四摄',
            '分辨率：其它分辨率',
            '后摄主摄像素：4800万像素',
            '前摄主摄像素：1600万像素',
            '商品产地：中国大陆',
            '充电器：10V/6.5A',
          ],
        },
      },
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
    handleSelect(index) {
      this.currentIndex = index;
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
  z-index: 3;
}
.box{
  background-color: lightblue;
  position: absolute;
  opacity: 0.5;
}
.largeImg{
  position: relative;
}
.initial{
  border: 1px solid #ccc;
  float:left;
}

.title{
  color:#999;
  width:70px;
  display:inline-block;
}
.tag{
  margin-left: 5px;
  margin-top: 5px;
}
.interval{
  overflow: visible !important;
  margin-bottom: 40px;
}
</style>
