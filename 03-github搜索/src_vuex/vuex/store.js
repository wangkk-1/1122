import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex)
const state = {
    isFirst: true,
    isLoading: false,
    errMsg: "",
    users: []
}
const mutations = {
    //请求中
    requesting(state) {
        state.isFirst = false;
        state.isLoading = true;
    },
    //请求成功
    request_success(state, users) {
        state.isLoading = false;
        state.users = users
    },
    //请求失败
    request_faild(state, msg) {
        state.errMsg = msg; //axios错误信息是message
        state.isLoading = false;
    }
}
const actions = {
    async search({
        commit
    }, searchName) {
        //形参{commit} 相当于解构赋值 let {commit} = context
        commit("requesting")
        try {
            let response = await axios({
                url: 'https://api.github.com/search/users',
                method: 'GET',
                params: {
                    q: searchName
                }
            })
            let users = []
            response.data.items.forEach(item => {
                let user_name = item.login
                let user_img = item.avatar_url
                let user_url = item.url
                let obj = {
                    user_name,
                    user_img,
                    user_url
                }
                users.push(obj)
            })

            commit('request_success', users)

        } catch (error) {
            commit('request_faild', error.message)
        }

    }
}
const getters = {
    isFirst(state) {
        return state.isFirst
    },
    isLoading(state) {
        return state.isLoading
    },
    errMsg(state) {
        return state.errMsg
    },
    users(state) {
        return state.users
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})