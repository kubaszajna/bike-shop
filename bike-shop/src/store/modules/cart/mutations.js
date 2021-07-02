export default {
  addToCart(state, item) {
    console.log(state.cart);
    let found = state.cart.find(product => product.productId == item.productId);
    if(found){
        found.productQuantity++;
    } else {
        state.cart.push(item);
    }

    // this.commit('saveData', payload);
    window.localStorage.setItem('cart', JSON.stringify(state.cart));

  },
  saveData(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  removeFromCart(state, item){
      let index = state.cart.indexOf(item);
      state.cart.splice(index,1);

      // this.commit('saveData');
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
  }
};