<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String,
  },
  data() {
    return {
      item: {
        productName: this.name,
        productImage: this.image,
        productPrice: this.price,
        productId: this.pId,
        productQuantity: 1,
      },
    };
  },
  methods: {
    addToCart() {
      // $("#miniCart").modal("show");
      // let miniCart = document.querySelector('#miniCart');
      // miniCart.modal('show');
      this.$store.commit("cartModule/addToCart", this.item);
    },
  },
};
</script>

<style scoped lang="scss">
.add-to-cart {
  .btn.btn-primary {
    line-height: 4rem;
    height: 4rem;
    padding: 0 1.5rem;
    letter-spacing: 0.2rem;
    width: calc(100% - 4rem);
    margin: 0 2rem 2rem 2rem;
  }
}
</style>
