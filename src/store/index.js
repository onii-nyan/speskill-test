import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

  const token = "o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y"
  const url = "https://spe-academy.spesolution.net/api/recruitment"

const store = new Vuex.Store({
    state: {
         data : [],
    },
    mutations: {
        setData(state, data){
            state.data = data
        },
    },
    actions: {
        async getData({commit}){
            try {
                const res = await axios.get(url, {
                  headers:{
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token 
                  }
                });
                console.log(res)
                commit("setData", res.data)
            } catch (error) {
                console.log(error);
            }
        },
    },
    plugins: [vuexLocal.plugin]
  })

  export default store
  