import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import cartModule from './modules/cart/index.js';


const store = createStore({
  
  modules: {
    coaches: coachesModule,
    cartModule: cartModule
  }
});

export default store;