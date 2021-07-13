<template>
  <div class="mini-cart">
    <div class="modal-cart">
      <h5 class="modal-title" id="exampleModalLabel">My Bag</h5>
      <button type="button" class="close close-button">X</button>

      <ul>
        <li v-for="item in cartState" :key="item.id" class="item">
          <div class="buttons">
            <span class="like-btn">&#10084;</span>
          </div>
          <div class="image">
            <img
              :src="item.productImage"
              class="product-image align-self-center mr-3"
              alt=""
            />
          </div>
          <div class="description">
            <span>
              {{ item.productName }}
            </span>
          </div>
          <div class="quantity">
              Quantity : {{ item.productQuantity }}
          </div>
          <div class="total-price">
            {{ item.productPrice * item.productQuantity + ' $' }}
          </div>
          <div class="buttons">
            <span @click="deleteItem(item)" class="delete-btn">X</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'MiniCart',
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
  computed: {
    cartState() {
      return this.$store.state.cartModule.cart;
    }
  },
  mounted() {
    $('.minus-btn').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      } else {
        value = 0;
      }

      $input.val(value);
    });

    $('.plus-btn').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());

      if (value < 100) {
        value = value + 1;
      } else {
        value = 100;
      }

      $input.val(value);
    });

    $('.like-btn').on('click', function() {
      $(this).toggleClass('is-active');
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.close-btn {
  cursor: pointer;
}
.product-image {
  width: 100px;
  transform: translateY(25px);
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #7ec855;
  font-family: 'Roboto', sans-serif;
}
.mini-cart {
  width: 750px;
  height: 423px;
  margin: 80px auto;
  background: #ffffff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
}

.modal-cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 0;
  .close-button {
    background: none;
    border: none;
    font-size: 2rem;
    height: 2rem;
    line-height: 2rem;
  }
}

.title {
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
}

.modal-title {
  width: 120px;
  margin-left: 3rem;
}

.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
  align-items: baseline;
}

.item:nth-child(3) {
  border-top: 1px solid #e1e8ee;
  border-bottom: 1px solid #e1e8ee;
}
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.delete-btn,
.like-btn {
  display: inline-block;
  cursor: pointer;
}
.delete-btn {
  width: 18px;
  height: 17px;
  background: url(&amp;quot;delete-icn.svg&amp;quot;) no-repeat center;
}

.like-btn {
  position: absolute;
  top: 9px;
  left: 15px;
  width: 60px;
  height: 60px;
  background-size: 2900%;
  background-repeat: no-repeat;
}
.is-active {
  animation-name: animate;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: right;
  }
}

.image {
  margin-right: 50px;
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 14px;
  color: #43484d;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939e;
}
.quantity {
  padding-top: 20px;
  margin-right: 30px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

button[class*='btn'] {
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}

button:focus,
input:focus {
  outline: 0;
}
.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}
@media (max-width: 800px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
  .buttons {
    margin-right: 20px;
  }
}
</style>
