import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
//1.存放数据的地方,每个属性值对应的一个状态数据(代表状态,可以理解为数据)
const state = {
    count: 0 //多个组件共享的数据
}
//2.对象内部可以包含多个方法,每个方法对应的还是对上面数据的一种直接修改的行为
const mutations = {
    //不能写判断,循环,定时器
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    },

}
//3.对象内部可以包含多个方法,每个方法对应的是组件当中用户的一个行为的回调内部逻辑
const actions = {
    increment(context) {
        context.commit("increment")
    },
    decrement(context) {
        context.commit("decrement")
    },
    incrementIfOdd(context) {
        if (context.state.count % 2 === 1) {
            context.commit("increment")
        }
    },
    incrementAsync(context) {
        setTimeout(() => {
            context.commit("increment")
        }, 1000);
    }
}
//4.对象内部可以包含多个方法,每个方法对应饿一个根据
const getters = {

}

//暴露
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})