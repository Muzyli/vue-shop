import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

require('./mockjs');

Vue.use(ElementUI);

Vue.config.productionTip = false;

const orignalSetItem = localStorage.setItem;
localStorage.setItem = (key, value) => {
  const setItemEvent = new Event('setItemEvent');
  setItemEvent.key = key;
  setItemEvent.value = value;
  // 问题：使用this关键字会报非法调用
  // 从apply改为call
  // eslint-disable-next-line
  orignalSetItem.call(localStorage, key, value);
  window.dispatchEvent(setItemEvent);
};
new Vue({
  render: (h) => h(App),
}).$mount('#app');
