import Mock from 'mockjs';
import domain from '../axios/api';

const product = [
  {
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
];
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
Mock.mock(domain.product,(req) => {
  const id = parseInt(JSON.parse(req.body).id);
  return {
    status: '200',
    msg: 'success',
    data: product[id - 1],
  };
});
