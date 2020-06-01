import Vue from "vue"
import App from "@/App"
import store from "@/vuex/store"
new Vue({
    el: "#box",
    render: h => h(App),
    store //注册vuex,只有在这里注册以后vuex才能生效
    //注册好之后那么每个组件都可以通过this.$store拿到我们的vuex store对象
})