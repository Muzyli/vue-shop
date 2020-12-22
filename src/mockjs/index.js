/* eslint-disable */
import Mock from 'mockjs';
import domain from '../axios/api';

const product = [
  {
    productId: 8,
    name: '皮皮狗 2020秋冬新品系列 连帽款绞花宽松休闲羊绒裙 中长款加厚连衣裙',
    preferential: ['包邮'],
    vipPrice: 1100,
    price: 2170,
    imgUrl: 'https://img13.360buyimg.com/n1/s350x449_jfs/t1/122143/26/13263/73611/5f6c19b9Eead1ee49/102b57a3a5be4142.jpg!cc_350x449.jpg',
    property: [
      {
        title: '选择颜色',
        tags: [
          '橙色',
          '紫色',
        ],
      },
      {
        title: '选择尺码',
        tags: [
          'S/95',
          'M/100',
          'L/105',
          'XL/110',
        ],
      },
    ],
    introduction: {
      imgs: [
        'http://img14.360buyimg.com/imgzone/jfs/t1/143416/40/9190/244498/5f6c19adE39899ad6/7442acace20edf66.jpg',
        'http://img30.360buyimg.com/imgzone/jfs/t1/134870/20/10615/190754/5f6c19aeEc5d6c8d0/0feba999bdd054bb.jpg',
        'http://img12.360buyimg.com/imgzone/jfs/t1/134551/40/10762/59117/5f6c19b3Ea7463ca0/fd4ab0600ddb895d.jpg',
        'http://img13.360buyimg.com/imgzone/jfs/t1/134677/22/10841/150228/5f6c19b5Ed7d374f6/eb4db441b2fc72af.jpg',
        'http://img20.360buyimg.com/imgzone/jfs/t1/130379/3/10691/61337/5f6c19b4E3e508a86/7a1b92c27e366af1.jpg',
        'http://img10.360buyimg.com/imgzone/jfs/t1/145035/32/9264/39334/5f6c19b4E06185bef/7127337174d55122.jpg',
      ],
      parameters: [
        '商品名称：皮皮狗 2020秋冬新品系列 连帽款绞花宽松休闲羊绒裙 中长款加厚连衣裙',
        '腰型：低腰',
        '风格：通勤',
        '裙型：其它',
        '袖长：长袖',
        '适用年龄：25-29周岁，30-34周岁',
        '裙长：中长裙',
        '廓形：H型',
      ],
    },
  },
  {
    productId: 9,
    name: '汉米尔顿(HAMILTON)瑞士手表美国经典系列泛欧自动机械男士腕表H35405741',
    preferential: ['包邮'],
    vipPrice: 7900,
    price: 8170,
    imgUrl: 'https://img14.360buyimg.com/n1/jfs/t1/27697/31/13901/220696/5ca3492fE5c6d4fae/90d93e1df8469a5d.jpg',
    property: [],
    introduction: {
      imgs: [
        'https://img30.360buyimg.com/sku/jfs/t1/5420/7/13982/304843/5bd94fabEd4655da6/b099c85ed16c578e.jpg',
        'https://img30.360buyimg.com/sku/jfs/t1/40653/16/10773/62526/5d4306a6E6d621534/8877d62ed5d975c3.jpg',
        'https://img30.360buyimg.com/sku/jfs/t1/6522/16/4476/65244/5bd94fabE6a5bff31/df759dcea7d8a145.jpg',
        'https://img30.360buyimg.com/sku/jfs/t1/2683/22/13963/123307/5bd94fabE2f134674/11c0f041239c33f6.jpg',
      ],
      parameters: [
        '商品名称：汉米尔顿男士手表',
        '表扣：针扣',
        '表带：牛皮',
        '适用人群：男士',
        '表径：41-43mm',
        '防水：50米',
        '表底：透底',
        '表壳：不锈钢',
      ],
    },
  },
  {
    productId: 10,
    name: '小米有品 AND1双翘滑板 炫酷黑',
    preferential: ['包邮'],
    vipPrice: 195,
    price: 270,
    imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/138607/38/19266/251616/5fe0452cEedb91976/9d8d702e7dcc32e1.jpg',
    property: [
      {
        title: '选择颜色',
        tags: [
          '炫酷黑',
          '魔力红',
        ],
      },
    ],
    introduction: {
      imgs: [
        'https://img10.360buyimg.com/imgzone/jfs/t1/84298/35/13968/335600/5db6b072E8ee4c199/3ade6958874afadb.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/102259/37/901/210346/5db6b072E95c2b865/62a14416a15898f4.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/96839/19/958/149993/5db6b072E90e60b8a/4c5c59187e0afab9.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/48566/1/14663/286941/5db6b073E503ec26f/34aa0bd9ac11732a.jpg',
      ],
      parameters: [
        '商品名称：小米有品 AND1双翘滑板 炫酷黑',
        '板面材质：其它',
        '适用人群：通用',
        '适用场景：通用',
        '轮子材质：其它',
        '支架材质：其它',
        '商品毛重：2.2kg',
        '店铺： 小米有品官方旗舰店',
      ],
    },
  },
  {
    productId: 5,
    name: '四季宇恒冬季羽绒服亮面短款轻薄男士连帽外套2020新款潮流帅气加厚防寒服潮牌立领男装',
    preferential: ['包邮'],
    vipPrice: 198,
    price: 338,
    imgUrl: 'https://img14.360buyimg.com/n1/s350x449_jfs/t1/127340/25/15079/188095/5f871103Ed877b456/cf462c81f7a22d98.jpg!cc_350x449.jpg',
    property: [
      {
        title: '选择颜色',
        tags: [
          '黑色',
          '灰色',
        ],
      },
      {
        title: '选择尺码',
        tags: ['M', 'L', 'XL', '2XL', '3XL', '4XL'],
      },
    ],
    introduction: {
      imgs: [
        'https://img14.360buyimg.com/n1/s350x449_jfs/t1/127043/31/14935/180447/5f871102E0556e888/70b2dcac641472d1.jpg!cc_350x449.jpg',
        'https://img14.360buyimg.com/n1/s350x449_jfs/t1/144856/20/10663/183942/5f871103Ebc734028/ad71f2c1de204314.jpg!cc_350x449.jpg',
        'https://img14.360buyimg.com/n1/s350x449_jfs/t1/144856/20/10663/183942/5f871103Ebc734028/ad71f2c1de204314.jpg!cc_350x449.jpg',
      ],
      parameters: [
        '商品名称：四季宇恒冬季羽绒服亮面短款轻薄男士连帽外套2020新款潮流帅气加厚防寒服潮牌立领男装',
        '材质：聚酯纤维',
        '流行元素：亮面，其它',
        '充绒量：100g以下（不含）',
        '基础风格：商务绅士',
        '图案：纯色，其它',
        '含绒量：70-79%',
        '风格：商务正装，商务休闲',
        '适用人群：青年，中年',
      ],
    },
  },
  {
    productId: 7,
    name: '皮皮狗 2020年秋冬新品系列 圆领手绣嵌花女羊绒套衫 818中灰色 均码',
    preferential: ['包邮'],
    vipPrice: 1700,
    price: 2970,
    imgUrl: 'https://img12.360buyimg.com/n1/s350x449_jfs/t1/115205/11/19956/136806/5f840356E6edf56dd/059449b3ce977040.jpg!cc_350x449.jpg',
    property: [
      {
        title: '选择颜色',
        tags: [
          '绿色',
          '灰色',
        ],
      },
    ],
    introduction: {
      imgs: [
        'https://img10.360buyimg.com/imgzone/jfs/t1/131132/32/12109/85823/5f840394E27e0fae7/5fd99d0e1bec4e5e.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/151987/13/2045/253134/5f840392Ea7430a01/a93ed308b5cf7542.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/154434/17/1986/221650/5f840392Eadfea094/015258a64d0964c6.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/136374/30/12027/146094/5f840393Edd4eeba5/0bc004de94d972a3.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/125955/27/14794/235156/5f840393E9f972bfb/d5ae39cabef01932.jpg',
      ],
      parameters: [
        '商品名称：皮皮狗 2020年秋冬新品系列  圆领手绣嵌花女羊绒套衫 818中灰色 均码',
        '厚度：厚款',
        '袖长：长袖',
        '版型：宽松型',
        '流行元素：刺绣',
        '风格：复古风，慵懒风，欧美风',
        '穿着方式：套头',
        '领型：圆领',
      ],
    },
  },
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
  {
    productId: 6,
    name: '黑鲨移动电源-黑色',
    preferential: ['包邮'],
    vipPrice: 129,
    price: 159,
    imgUrl: 'https://img13.360buyimg.com/n1/jfs/t1/88192/23/10329/97964/5e1846d5E3eb9814c/49305ee1ca46a320.jpg',
    property: [
      {
        title: '选择颜色',
        tags: ['橙黑色', '白色', '黑色', '橙色'],
      },
      {
        title: '选择赠品',
        tags: ['18w快充头', '三星数据线'],
      },
    ],
    introduction: {
      imgs: [
        'https://img10.360buyimg.com/imgzone/jfs/t1/109555/16/2652/96127/5e08688fEe11a0075/ab7d658df857168a.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/102070/5/8844/67551/5e08688fEcf02f30e/77875161fa4f413b.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/85212/24/8901/112583/5e08688fE3fe272fe/d997be888b3f75cc.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/88241/18/8689/72924/5e08688fEf81ffead/7e1b94e0b47bee12.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/96107/29/8895/49838/5e08688fE0ec78cf8/a149b3347673305e.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/102406/17/8884/78916/5e08688fEbde15126/3a1b2a86138c3b39.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/91735/35/8752/136775/5e08688fE0623bedb/67381920690a220d.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/89014/12/8781/63158/5e08688fE0dc0a9d8/5ef0c7ffe6a0444c.jpg',
      ],
      parameters: [
        '商品名称：原装正品黑鲨游戏手机2pro代双向充电宝移动电源10000毫安吃鸡游戏电源双向充电18w快充 黑鲨移动电源-黑色',
        '外壳材质：塑料',
        '容量：10000-19999毫安时',
        '商品毛重：300.00g',
        '电芯类型：锂离子电池',
      ],
    },
  },
  {
    productId: 2,
    name: '爽果乐 海南哈密瓜 新鲜水果 甜瓜西州蜜 带箱2.5-3斤',
    preferential: ['包邮'],
    vipPrice: 6.9,
    price: 9.9,
    imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/153018/6/3714/125190/5f969e34E692b8452/9683e67a65f96528.jpg',
    property: [
      {
        title: '选择规格',
        tags: ['带箱2.5-3斤', '带箱3-4斤', '带箱5-6斤（1-2个）', '8-9斤（2-4个）'],
      },
    ],
    introduction: {
      imgs: [
        'https://img10.360buyimg.com/imgzone/jfs/t1/119642/7/9078/735674/5eeb2a83E3687b65f/f56ef6cf139fbf6f.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/116451/35/10442/634327/5eeb2a83E9656d098/ce2e9c7cb7aae54b.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/136337/16/2548/703993/5eeb2a84E4a5b5f41/2579f753fed09386.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/137548/9/2477/260065/5eeb2a84Ecffa4afa/ba5e6110b8a5c169.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/115385/17/10510/636465/5eeb2a87E2d762c47/275ab2d8ce96922f.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/118660/2/10423/601982/5eeb2a85E9dfc228a/5e1d6f9f9d6c3cc1.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/123776/35/5179/646036/5eeb2a87E323f07dc/59bd897e39f7330a.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/115361/14/10280/609000/5eeb2a87E8882e4f4/2023e39e8e3b7a5a.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/146731/4/969/548769/5eeb2a89E07aad90d/681a236d69043382.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/141124/8/1016/331747/5eeb2a88E15bf7fc6/6c3b207238a9caef.jpg',
      ],
      parameters: [
        '商品名称：爽果乐 海南哈密瓜 新鲜水果 甜瓜西州蜜 带箱2.5-3斤',
        '类别：哈密瓜/网纹瓜',
        '商品产地：中国大陆',
        '原产地：海南',
        '重量：1000-1999g',
        '包装：简装',
      ],
    },
  },
  {
    productId: 3,
    name: '伊利QQ星营养果浆酸奶饮品芒果百香果桃100ml*30瓶整箱学生营养',
    preferential: ['包邮'],
    vipPrice: 29,
    price: 89,
    imgUrl: 'https://img13.360buyimg.com/n1/jfs/t1/143687/28/17775/78886/5fd1ddbcE5184c0b7/2ae4da2ed206bc7b.jpg',
    property: [
      {
        title: '选择类别',
        tags: [
          '【10月产】蓝莓+草莓+树莓【10月产】蓝莓+草莓+树莓',
          '【10月产】芒果+百香果+桃味',
          '【9月产】DHA儿童牛奶195ml*12盒',
          '【7月产】儿童配方牛奶195ml*12盒',
        ],
      },
    ],
    introduction: {
      imgs: [
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/69699/26/1231/172433/5cf87d8cE4b2389c2/326dfd40954af47b.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/70292/28/1302/218441/5cf87d8cE03a107ad/9ee633e2a13cd4b4.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/78113/1/1314/263045/5cf87d8cE7c22ad75/ee7503856fa1b2a8.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/54807/11/1729/213034/5cf87d8cE9da7b9bd/2785742e947e1f14.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/64342/8/1313/215992/5cf87d8dEed11dfff/d35082857581abeb.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/66578/34/1279/235593/5cf87d8dEb175961c/95fbc68ffd0f7d7a.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/48315/10/1770/247407/5cf87d8dE1f13560f/ad07ec79c3eea404.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/83125/18/1317/178504/5cf87d8dEb4bd14bf/abf0ed8de1fb7db0.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/40189/13/8329/178709/5cf87d8eE88b4ea29/dda40a840e0e44e2.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/79101/7/1253/209276/5cf87d8eEfd421a1a/947aab9e9164f37e.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/40126/3/8200/188173/5cf87d8eE57db4b1b/6b8866089c8621b5.jpg',
        'http://img30.360buyimg.com/popWaterMark/jfs/t1/77057/24/1279/192027/5cf87d8eE5d95f0d2/9b0619258d322cdf.jpg',
      ],
      parameters: [
        '商品名称：伊利QQ星营养果浆酸奶饮品芒果百香果桃100ml*30瓶整箱学生营养批发',
        '适用人群：儿童，成人，中老年',
        '商品产地：中国大陆',
        '商品毛重：1.0kg',
        '口味：其它',
        '是否添加糖：添加糖',
      ],
    },
  },
  {
    productId: 4,
    name: '30天试用】妙艾堂肚脐贴艾脐贴艾灸艾草谢娜同款 1盒30贴',
    preferential: ['包邮'],
    vipPrice: 33,
    price: 48,
    imgUrl: 'https://img13.360buyimg.com/n1/jfs/t1/138369/24/70/124726/5edb4d95E55f555a7/4c2493e74f0faa2f.jpg',
    property: [
      {
        title: '选择功效',
        tags: [
          '1盒30贴',
          '3盒疗程装90贴',
          '5盒蜕变装150贴',
        ],
      },
    ],
    introduction: {
      imgs: [
        'https://img10.360buyimg.com/imgzone/jfs/t1/114516/14/9465/108111/5edb4e37E8d3e0977/989bccfdf66dd416.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/130144/5/1583/88623/5edb4e37Eb3e98175/ad365bf238ca4729.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/123012/23/4269/102034/5edb4e37Ee416b3c2/570e758a40058876.jpg',
        'https://img10.360buyimg.com/imgzone/jfs/t1/129632/30/1589/78255/5edb4e37E146f4e00/e745cbd932205a42.jpg',
      ],
      parameters: [
        '商品名称：30天试用】妙艾堂肚脐贴艾脐贴艾灸艾草谢娜同款 1盒30贴',
        '功效：纤体/塑身，舒缓',
        '商品产地：中国大陆',
        '适合肤质：任何肤质',
        '类别：纤体贴',
        '适用部位：全身',
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
Mock.mock(domain.promotionImgs, () => {
  let data = [];
  for (let i = 0; i < 5; i++) {
    const element = product[i];
    data.push({
      id: element.productId,
      img: element.imgUrl,
    });
  } 
  return data;
});
Mock.mock(domain.gallerys, () => {
  let data = [];
  for (let i = 5; i < 10; i++) {
    const element = product[i];
    data.push({
      id: element.productId,
      title: element.name,
      url: element.imgUrl,
    });
  } 
  return data;
});
Mock.mock(domain.product,(req) => {
  const id = parseInt(JSON.parse(req.body).id);
  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    if (element.productId === id) {
      return {
        status: '200',
        msg: 'success',
        data: product[i],
      };
    }
  }
  return {
    status: '500',
    msg: 'fail',
  }
});
