<template>
  <div class="mini-cart">

        <!-- Modal -->
        <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">My Bag</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
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
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
                <router-link to="checkout" type="button" class="btn btn-primary" data-dismiss="modal">Checkout</router-link>
              </div>
            </div>
          </div>
        </div>


  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    msg: String
  },
  methods: {
    deleteItem(item) {
      // console.log(item);
      return this.$store.commit('cartModule/removeFromCart', item);
      // return item
    }
  },
  computed:{
    cartState() {
      return this.$store.state.cartModule.cart;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.close-btn {
  cursor: pointer;
}
.product-image {
  width: 80px;
}
</style>
