<template>
  <el-container>
    <el-header style="height: 100%;">
      <Navigation></Navigation>
    </el-header>
    <!-- 内容部分 -->
    <el-main style="padding: 0;">
      <el-row>
        <el-col :span="16" :offset="4">
          <!-- 分类-幻灯片层 -->
          <el-container>
            <el-aside width="100px">
              <el-menu>
                  <li class="el-menu-item"
                  @mouseover="hover(i)" @mouseout="unhover()"
                  v-for="(item, i) in category" :key="i">
                    {{item}}
                  </li>
              </el-menu>
            </el-aside>
            <el-container style="display: block;">
              <div v-show="currentIndex == i" class="hover-view"
              v-for="(item, i) in category" :key="i">{{item}}</div>
              <!-- 右：内容块 el-col控制内部分隔留空，方便新增 -->
              <el-col v-show="currentIndex == -1" :span="24" ref="slide">
                <el-carousel height="336px" type="card" indicator-position="none">
                  <el-carousel-item v-for="item in imgs" :key="item">
                    <img :src="item" />
                  </el-carousel-item>
                </el-carousel>
              </el-col>
            </el-container>
          </el-container>
        </el-col>
      </el-row>
      <!-- 促销商品 -->
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="promotion">
            <span class="promotionFont">限时促销</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="block" v-for="item in promotionImgs" :key="item">
            <el-image
              style="width: 20%; height: 170px;display:block;float:left"
              :src="item"
              fit="fill"></el-image>
          </div>
        </el-col>
      </el-row>
      <!-- 推荐商品 -->
      <el-row class="recommend">
        <el-col :span="3" :offset="4">
          <div class="first">
            <span class="firstFont">发现好货</span>
          </div>
        </el-col>
        <el-col :span="13" style="padding-left:15px">
          <div class="gallery">
            <div >
              <div :class="['gallery-sub',{'img-flip':i%2==1}]"
              v-for="(item,i) in gallery" :key="i">
                <span class="gallery-font">{{item.title}}</span>
                <img style="width:10rem;height:190px"
                  :src="item.url" />
                <span class="gallery-font">{{item.title}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
      <Footer></Footer>
  </el-container>
</template>
<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import Service from '../axios/http';
import domain from '../axios/api';

export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      category: [],
      imgs: [],
      promotionImgs: [],
      gallery: [],
      currentIndex: -1,
    };
  },
  methods: {
    hover(i) {
      this.currentIndex = i;
    },
    unhover() {
      this.currentIndex = -1;
    },
  },
  created() {
    // 初始化数据
    Service(domain.categorys).then((res) => {
      this.category = res.data.data.slice(5);
    });
    Service(domain.slidImgs).then((res) => {
      this.imgs = res.data.data;
    });
    Service(domain.promotionImgs).then((res) => {
      this.promotionImgs = res.data.data;
    });
    Service(domain.gallerys).then((res) => {
      this.gallery = res.data.data;
    });
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
img{
  width: 100%;
  height: 100%;
}
.promotion{
  max-width: 100%;
  height: 3%;
  background: linear-gradient(to bottom, #e52d27, #b31217);
  margin: 20px 0 0;
  padding: 3px 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.promotionFont{
  color: white;
  font-size: 24px;
}
.first{
  width: 100%;
  height: 220px;
  float:left;
  text-align: center;
  background-image: url(https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/024cad902388d7f9f52b5a5d4af7c479.png);
}
.gallery-sub{
  float: right;
  text-align:center;
  font-size:18px;
}
.gallery{
  width:100%;
  height:220px;
  background-color: white;
  overflow:hidden;
  display:inline-flex;
}
.gallery-font{
  position: relative;
  left: 10px;
  padding: 3px 0;
  display:block;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hover-view{
  width:100%;
  height:336px;
  background-color: #fff;
}
.img-flip{
  position: relative;
  bottom: 38px;
}
.firstFont{
  margin-top: 1rem;
  display: block;
  font-size: 28px;
  color: white;
}
.recommend{
  margin: 20px 0;
}
</style>
