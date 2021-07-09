<template>
  <div class="products" id="products">
      <div class="container">
          <div class="row section-header has-bottom-sep">
            <div class="col-full">
                <h3 class="subhead">What we offer</h3>
                <h1 class="display-2">Choose from many models for various purposes</h1>
            </div>
          </div>
          <div class="row">
              <section class="cards">
                <template v-for="product, index in products" :key="product.id" >
                    <template v-if="index < 3">
                      <article class="card" :class="`card--${index + 1}`">
                          <div class="card__info-hover">
                            <svg class="card__like"  viewBox="0 0 24 24">
                              <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                            </svg>
                          </div>
                          <div v-for="(image, index) in product.images" :key="index">
                            <template v-if="index < 1">
                              <div class="card__img" :style="'background-image: url('+image+')'"></div>
                              <a href="#" class="card_link">
                                <div class="card__img--hover" :style="'background-image: url('+image+')'"></div>
                              </a>
                            </template>
                          </div>
                          <div class="card__info">
                            <span class="card__category"> Bike</span>
                            <h3 class="card__title">{{ product.name }}</h3>
                            <span class="card__price">{{ product.price + ' $' }}</span>
                          </div>
                          <add-to-cart
                              :image="getImage(product.images)"
                              :p-id="product.id"
                              :price="product.price"
                              :name="product.name">
                          </add-to-cart>
                      </article>
                    </template>
                </template>
              </section>
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
  padding: 10rem 0;
}
.p-20 {
  padding: 20px;
  width: auto;
  max-width: 100%;
}
.section-header {
  margin-bottom: 6rem;
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
article {
  pointer-events: cursor;
}
@media screen and (max-width: 768px) {
  .cards {
    flex-wrap: wrap;
    .card {
      width: 100%;
    }
  }
}
</style>
