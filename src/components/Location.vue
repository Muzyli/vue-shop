<template>
  <div id="app">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="addressChange">
    </el-cascader>
  </div>
</template>
<script>
// regionData 所有城市名数据
// CodeToText 城市代码转文本
// TextToCode 文本转城市代码
import { regionData, CodeToText, TextToCode } from 'element-china-area-data';
import { location } from '../utils/Location';

export default {
  data() {
    return {
      // 所有城市的数据
      options: regionData,
      // 保存城市代码
      selectedOptions: [],
    };
  },
  methods: {
    // 获取地图定位
    getLocation() {
      const that = this;
      const geolocation = location.initMap('map-container');// 定位
      // eslint-disable-next-line
      AMap.event.addListener(geolocation, 'complete', (result) => {
        // console.log(result);
        that.lat = result.position.lat;
        that.lng = result.position.lng;
        that.province = result.addressComponent.province;
        that.city = result.addressComponent.city;
        that.district = result.addressComponent.district;
        // 通过城市名获取城市代码
        const a = TextToCode[this.province].code;
        const b = TextToCode[this.province][this.city].code;
        const c = TextToCode[this.province][this.city][this.district].code;
        // 存入数组
        this.selectedOptions = [a, b, c];
        localStorage.setItem('address', JSON.stringify(this.selectedOptions));
      });
    },
    addressChange(arr) {
      // 当地址被更改
      localStorage.setItem('address', JSON.stringify(arr));
      const temp = [CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]];
      this.$emit('addressChange', temp);
    },
  },
  mounted() {
    const str = localStorage.getItem('address');
    let temp = [];
    if (str !== null && str !== undefined) {
      temp = JSON.parse(str);
    }
    if (temp.length === 0) {
      // 调用获取地理位置（异步）
      this.getLocation();
    } else {
      this.selectedOptions = temp;
    }
  },
};
</script>
<style scoped>
</style>
