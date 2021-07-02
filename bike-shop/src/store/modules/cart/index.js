import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

let cart = window.localStorage.getItem('cart');

export default {
  namespaced: true,
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations,
  actions,
  getters
}