<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 productBlock custom-product" v-for="product, index in products" :key="product.id">
                <template v-if="index > 2">
                  <div class="card product-item">
                    <img :src="getImage(product.images)" class="card-img-to custom-bike img-responsive p-20" alt="Product image" width="250px">
                  </div>
                </template>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 productBlock" v-for="product, index in products" :key="product.id" >
                  <template v-if="index < 3">
                    <div class="card product-item">
                        <div v-for="(image, index) in product.images" :key="index">
                          <template v-if="index < 1">
                            <img :src="image" class="card-img-to p-20" alt="Product image" width="250px">
                          </template>
                        </div>

                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price + ' $' }}</h5>
                          </div>
                          <add-to-cart
                              :image="getImage(product.images)"
                              :p-id="product.id"
                              :price="product.price"
                              :name="product.name">
                          </add-to-cart>
                        </div>
                    </div>
                  </template>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import FirebaseData from '@/firebase'

export default {
  data() {
    return {
      products: [],
      images: [],
    }
  },
  name: "Products-list",
  props: {
    msg: String
  },
  methods:{
    getImage(images){
      return images[0];
    }
  },
  created() {
    this.products = FirebaseData.getProducts()
  }
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
  width: auto;
  max-width: 100%;
}
.custom-bike {
  max-width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-height: unset;
}
.custom-product {
  margin-bottom: 30px;
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
