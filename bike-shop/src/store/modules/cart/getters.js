export default {
  // coaches(state) {
  //   return state.coaches;
  // },
  // hasCoaches(state) {
  //   return state.coaches && state.coaches.length > 0;
  // },
  totalPrice: state => {
    let total = 0;
    state.cart.filter((item) => {
        total += (item.productPrice * item.productQuantity);
    });

    return total;
  }
};