import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state:{
        categories: []
    },
    mutations:{
        ADD_CATEGORY_TO_STATE: (state, categories)=>{
            state.categories=categories;
        }
    },
    actions:{
        GET_CATEGORY_FROM_API({commit}){
            return axios('http://localhost:8080/api/category',{
                method: "GET"
            })
            .then((categories)=>{
                commit('ADD_CATEGORY_TO_STATE', categories.data);
                return categories;
            })
            .catch(err=>{
                console.log(err);
                return err;
            })
        }
    },
    getters:{
        CATEGORY(state){
            return state.categories
        }
    }

});

export default store;