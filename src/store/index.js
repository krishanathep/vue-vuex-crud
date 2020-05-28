import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: [
      { name:"Tomyumkung", price:'500' },
      { name:"Dorayaki", price:'300' },
      { name:"Stack", price:'600' },
      { name:"Salad", price:'100' },
      { name:"Seafood", price:'1200' }
    ],
  },
  mutations: {
    addFood(state, { payload }) {
      state.foods.push(payload);
    },
    deleteFood(state,{index}){
      state.foods.splice(index,1)
    },
    editFood(state,{payload}){
      state.foods[payload.index]={name: payload.name, price: payload.price }
    }
  },
  actions: {
    addFood({ commit }, payload) {
      commit("addFood", { payload });
    },
    deleteFood({commit}, index){
      commit('deleteFood',{index})
    },
    editFood({commit}, payload){
      commit('editFood',{payload})
    }
  },
  getters: {
    foods: (state) => state.foods,
  },
  modules: {
    //
  },
});
