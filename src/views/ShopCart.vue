<template>
  <div>
    <navigation></navigation>
    <el-row>
      <el-col style="background-color:white;padding: 10px"
      :span="16" :offset="4" align="middle">
        <el-row>
          <el-col :span="1">
            <span>选择</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>商品图片</span>
          </el-col>
          <el-col :span="8" align="middle">
            <span>商品信息</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>单价</span>
          </el-col>
          <el-col :span="6" align="middle">
            <span>数量</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>总价</span>
          </el-col>
        </el-row>
        <el-row v-for="(item, index) in items" :key="index">
          <el-col :span="1" class="info">
            <el-checkbox @change="handleCheckedItemsChange"
            v-model="checkedItems[index]"></el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-image style="width:80px;" @click="toDetail(item.id)"
            :src="item.img" fit="fill"></el-image>
          </el-col>
          <el-col :span="8" class="info" style="color: #444;">
            <div @click="toDetail(item.id)">
              <span>{{item.name}}</span>
              <span nowarp v-for="(p, i) in item.property" :key="i">
                {{p}}
              </span>
            </div>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.price}}元</span>
          </el-col>
          <el-col :span="6" class="info">
            <el-input-number @change="handleChange(item.count, index)"
            size="mini" v-model="item.count"></el-input-number>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.count * item.price}}元</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-col :span="16" :offset="4" style="background-color: white;padding: 20px">
        <el-checkbox :indeterminate="isIndeterminate"
        v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <span style="margin-left: 20px;color:red" @click="clearCart">清空购物车</span>
        <div style="float:right">
          <span style="margin-right: 20px">已选择{{checkedCount}}件，共{{checkedMoney}}元</span>
          <el-button type="danger" size="small" @click="submitOrder">提交订单</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import swal from 'sweetalert';
import Navigation from '../components/Navigation.vue';
import cartUtil from '../utils/Cart';

export default {
  components: { Navigation },
  data() {
    return {
      checkAll: false,
      isIndeterminate: false,
      checkedItems: [],
      items: [],
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/product/${id}`);
    },
    submitOrder() {
      cartUtil.setOrder(this.checkedItems);
      if (cartUtil.getCart().length === 0) {
        swal('提示', '购物车中暂无商品', 'error');
        return;
      }
      this.$router.push('/order');
    },
    clearCart() {
      swal({
        title: '提示',
        text: '您即将清空您的购物车，是否确认？',
        icon: 'error',
        buttons: ['取消', '确定'],
        dangerMode: true,
      }).then((val) => {
        if (val) {
          this.items = [];
          cartUtil.addCart([]);
          swal('提示', '已清空', 'success');
        }
      });
    },
    handleChange(value, index) {
      const that = this;
      if (value <= 0) {
        swal({
          title: '提示',
          text: '您即将从您的购物车删除一件商品，是否确认？',
          icon: 'error',
          buttons: ['取消', '确定'],
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              const cart = cartUtil.getCart();
              cart.splice(index, 1);
              cartUtil.addCart(cart);
              this.items = cart;
              swal('您失去了一件商品', {
                icon: 'success',
              });
            } else {
              swal('您保住了您的商品').then(() => {
                that.items = cartUtil.getCart();
              });
            }
          });
      } else {
        const cart = cartUtil.getCart();
        cart[index].count = value;
        cartUtil.addCart(cart);
      }
    },
    handleCheckedItemsChange() {
      let count = 0;
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.checkedItems[i] === true) {
          count += 1;
        }
      }
      this.checkAll = count === this.items.length;
      this.isIndeterminate = count > 0 && count < this.items.length;
    },
    handleCheckAllChange(val) {
      // 单纯更改数组里的值并不会触发计算属性的更新
      // 将数据整个地址进行替换才可以触发
      const temp = [];
      for (let i = 0; i < this.items.length; i += 1) {
        temp[i] = val;
      }
      this.checkedItems = temp;
      this.isIndeterminate = false;
    },
  },
  computed: {
    checkedCount() {
      let count = 0;
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.checkedItems[i] === true) {
          count += this.items[i].count;
        }
      }
      return count;
    },
    checkedMoney() {
      let countMoney = 0;
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.checkedItems[i] === true) {
          countMoney += this.items[i].count * this.items[i].price;
        }
      }
      return countMoney;
    },
  },
  created() {
    const cart = cartUtil.getCart();
    if (cart !== null) {
      this.items = cart;
    }
    this.checkAll = true;
    for (let i = 0; i < this.items.length; i += 1) {
      this.checkedItems[i] = true;
    }
  },
};
</script>
<style scoped>
.info{
  margin-top: 25px;
}
</style>
