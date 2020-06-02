import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Home from "@/views/Home"
import About from "@/views/About"
import Message from "@/views/Message"
import News from "@/views/News"
import MessageDetail from "@/views/MessageDetail"
import NewsDetail from "@/views/NewsDetail"
export default new VueRouter({
    // mode 两种模式
    // mode:"hash",
    mode:'history',
    routes: [
        //每一个路由都是一个对象
        {
            path: '/home',
            component: Home,
            children: [
                //子
                {
                    path: '/home/message',
                    component: Message,
                    children: [
                        //孙
                        {
                            path: "/home/message/info:msgId",
                            component: MessageDetail,
                            // props: true//只可以接收params,不能接受query
                            //props:{username:"赵丽颖"}只能传递死数据
                            props: function (route) { //router就是我当前这个路由对象
                                return {
                                    msgId: route.params.msgId,
                                    msgContent: route.query.msgContent
                                }
                            },
                            name: "msgInfo" //给当前路由起一个标识名称,这个路由就叫命名路由
                        }
                    ]
                },
                {
                    path: '/home/news',
                    component: News,
                    children: [
                        //孙
                        {
                            path: '/home/news/info:newsId',
                            component: NewsDetail,
                            props(route) {
                                return {
                                    newsId: route.params.newsId,
                                    newsContent: route.query.newsContent
                                }
                            },
                            name: "newsInfo"
                        }
                    ]
                },
                {
                    path: "/home",
                    redirect: '/home/message'
                }
            ]
        },
        {
            path: '/about',
            component: About,

        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})