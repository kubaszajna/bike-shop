<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../assets/products.svg" alt="overview image" class="img-fluid" />
          </div>
        </div>
        <h3>Test Firebase</h3>
        <div class="product-test">
          <div class="form-group">
            <input
              type="text"
              placeholder="Product name"
              v-model="product.name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Price" v-model="product.price" class="form-control" />
          </div>
          <div class="form-group">
            <button @click="saveData" class="btn btn-primary">Save Data</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      product: {
        name: null,
        price: null
      }
    };
  },
  methods: {
    saveData() {
      db.collection("products")
        .add(this.product)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin: 0 80px;
}
</style>
