import Vue from "vue"
import App from "@/App"

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    el: "#box",
    render: h => h(App)
})