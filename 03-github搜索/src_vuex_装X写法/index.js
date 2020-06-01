import Vue from "vue"
import App from "@/App"
import store from "@/vuex/store"
new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    el: "#box",
    render: h => h(App),
    store
})