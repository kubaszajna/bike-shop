<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">

              <div class="col-lg-4 col-md-12 col-sm-12 productBlock" v-for="product, index in products" :key="product.id" v-if="index < 3">
                  <div class="card product-item">

                        <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images" v-bind:key="image">
                                <img :src="image" class="card-img-to p-20" alt="..." width="250px">
                          </slide>
                        </carousel>

                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price | currency }}</h5>

                          </div>

                            <add-to-cart
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name">
                            </add-to-cart>
                        </div>
                    </div>
              </div>

          </div>
      </div>

  </div>
</template>

<script>
import {db} from '../firebase';


export default {
  name: "Products-list",
  props: {
    msg: String
  },

data(){
    return {
        products: [],

    }
  },

  methods:{

    getImage(images){
      return images[0];
    }

  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<style scoped lang="scss">
.products {
  background: #f2f2f2;
  height: 100vh;
  padding-bottom: 2rem;
}
.p-20 {
  padding: 20px;
  max-height: 220px;
  width: auto;
  max-width: 100%;
}
.VueCarousel-slide {
  text-align: center;
}

@media screen and (max-width: 991px) {
  .products {
    height: unset;
    padding-top: 0;
  }
  .productBlock {
    margin-bottom: 20px;
  }
}
</style>
