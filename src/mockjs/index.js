import Mock from 'mockjs';
import domain from '../axios/api';

Mock.mock('http://localhost:8080/categorys', {
  'data|1': [['手机', '电脑', '家居', '男装', '女装', '宠物', '玩具', '图书', '理财', '教育', '电子书']],
});
Mock.mock(domain.slidImgs, {
  'data|1': [[
    'https://img14.360buyimg.com/babel/s1180x940_jfs/t1/132348/1/19024/130275/5fd04c77Ed94b1fb9/3ea58482fbf7dda3.jpg.webp',
    'https://img10.360buyimg.com/pop/s1180x940_jfs/t1/140147/14/4066/92166/5f21af63E7eae478c/ef7a5cb79f566f65.jpg.webp',
    'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/136388/31/18907/58420/5fcf5813E6ea0bab0/9e703422f416ba35.jpg.webp',
    'https://img10.360buyimg.com/pop/s1180x940_jfs/t1/122746/25/19635/99259/5fbc5e83E9ad70c57/8bcbb2319250a096.jpg.webp',
    'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/148404/2/17471/77438/5fcdcd6cEe5cfe9fd/caef194b08c86c1c.jpg.webp',
  ]],
});
Mock.mock(domain.recommend, {
  'data|1': [[
    '日用品', '手机', '运动大牌',
  ]],
});
Mock.mock(domain.promotionImgs, {
  'data|1': [[
    'https://img11.360buyimg.com/seckillcms/s144x144_jfs/t1/132234/16/9762/163678/5f5f090eEb9b5c7ad/3047f0a3eecdb467.jpg!q70.jpg.webp',
    'https://img14.360buyimg.com/mobilecms/s200x200_jfs/t1/144091/18/15720/46178/5fbe03e4Ec834c4cd/aea728b2d8d30272.jpg.webp',
    'https://img11.360buyimg.com/img/s200x200_jfs/t1/19555/11/7564/119333/5c6e1d23Ee2e27a4c/a98ab1fa6ca9afbd.jpg!cc_100x100.webp',
    'https://img11.360buyimg.com/img/s200x200_jfs/t1/28107/16/7136/194549/5c667a48E9fe0e5bf/fafdbd2602417069.jpg!cc_100x100.webp',
    'https://img11.360buyimg.com/img/s200x200_jfs/t1/69506/8/3044/214995/5d1446b3E70fb4cb7/462c389bae059302.jpg!cc_100x100.webp',
  ]],
});
/* eslint-disable */
Mock.mock(domain.gallerys, {
  'data|1': [{
    'title|1': [[
      '黑鲨 双向快充 充电宝',
      '马爹利 蓝带干邑 白兰地',
      '凯伦诗 智能语音 按摩器',
      '幻影星空 智能操控 VR设备一体机',
      '柯可蓝原味混合坚果仁',
    ]],
    'url|1': [[
      'https://img30.360buyimg.com/mobilecms/s300x300_jfs/t1/52275/36/8699/136339/5d5f6e3fE77cfe4a8/ff478d10ab772090.jpg!q70.jpg.webp',
      'https://img13.360buyimg.com/ceco/s300x300_jfs/t19219/88/839406840/263523/dd480805/5aaa1221Na44b634b.jpg!q70.jpg.webp',
      'https://img30.360buyimg.com/ceco/s300x300_jfs/t1/135204/28/13850/338331/5f98d85cE5c164bd2/ca78b8e0cd765ae0.jpg!q70.jpg.webp',
      'https://img30.360buyimg.com/ceco/s300x300_jfs/t1/132579/26/14902/121623/5fa4b58eE8dbf4c20/e514aba2c2613cc6.jpg!q70.jpg.webp',
      'https://img11.360buyimg.com/mobilecms/s300x300_jfs/t16729/91/1549483730/194168/76f0da7f/5acf2027N251bd788.jpg!q70.jpg.webp',
    ]],
  }],
});
Mock.mock(domain.gallerys, {
  'data': [
    {
      'title': '黑鲨 双向快充 充电宝',
      'url': 'https://img30.360buyimg.com/mobilecms/s300x300_jfs/t1/52275/36/8699/136339/5d5f6e3fE77cfe4a8/ff478d10ab772090.jpg!q70.jpg.webp',
    },
    {
      'title': '马爹利 蓝带干邑 白兰地',
      'url': 'https://img13.360buyimg.com/ceco/s300x300_jfs/t19219/88/839406840/263523/dd480805/5aaa1221Na44b634b.jpg!q70.jpg.webp',
    },
    {
      'title': '凯伦诗 智能语音 按摩器',
      'url': 'https://img30.360buyimg.com/ceco/s300x300_jfs/t1/135204/28/13850/338331/5f98d85cE5c164bd2/ca78b8e0cd765ae0.jpg!q70.jpg.webp',
    },
    {
      'title': '幻影星空 智能操控 VR设备一体机',
      'url': 'https://img30.360buyimg.com/ceco/s300x300_jfs/t1/132579/26/14902/121623/5fa4b58eE8dbf4c20/e514aba2c2613cc6.jpg!q70.jpg.webp',
    },
    {
      'title': '柯可蓝原味混合坚果仁',
      'url': 'https://img11.360buyimg.com/mobilecms/s300x300_jfs/t16729/91/1549483730/194168/76f0da7f/5acf2027N251bd788.jpg!q70.jpg.webp',
    },
  ],
});
