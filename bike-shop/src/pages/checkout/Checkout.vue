<template>
  <div class="checkout">
    <navbar></navbar>
    <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col-md-7">
                    <h4 class="py-4">Checkout page</h4>
                    <ul>
                      <li v-for="item in cartState" :key="item.id" class="media">
                      <img :src="item.productImage" class="product-image align-self-center mr-3" alt="">
                      <div class="media-body">
                          <h5 class="mt-0">{{item.productName}}
                              <span class='float-right close-btn' @click="deleteItem(item)">X</span>
                          </h5>
                          <p class="mt-0">{{item.productPrice * item.productQuantity + ' $' }}</p>
                          <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                      </div>
                      </li>
                    </ul>
                </div>
                <div class="col-md-5 py-4">
                    <h5>
                        Total Price : {{ totalPrice }}
                    </h5>

                </div>
            </div>
        </div>+
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  methods: {
    deleteItem(item) {
      // console.log(item);
      return this.$store.commit('cartModule/removeFromCart', item);
      // return item
    }
  },
  computed: {
    cartState() {
      // return this.$store.commit['cartModule/removeFromCart', item];
      // console.log(this.$store.state);
      return this.$store.state.cartModule.cart
      // return 'git'
    },
    totalPrice() {
      return this.$store.getters['cartModule/totalPrice']
      // return 'test'
    },
  }
};
</script>

<style scoped lang="scss">
.close-btn {
  cursor: pointer;
}
.product-image {
  width: 80px;
}
</style>
