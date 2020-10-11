<template>
  <div class="checkout">
    <Navbar></Navbar>
     <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-7">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}
                                <span class='float-right close-btn' @click="$store.commit('removeFromCart',item)">X</span>
                            </h5>
                            <p class="mt-0">{{item.productPrice * item.productQuantity | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md-5 py-4">
                    <h5>
                        Total Price : {{ this.$store.getters.totalPrice | currency }}
                    </h5>


                </div>
            </div>

        </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.close-btn {
  cursor: pointer;
}
</style>
