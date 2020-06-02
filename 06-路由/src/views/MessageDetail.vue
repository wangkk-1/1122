<template>
  <ul class="list-group">
    <li class="list-group-item">msgid:{{msgId}}</li>
    <!-- <li class="list-group-item">msgid:{{this.$route.params.msgId}}</li> -->
    <!-- <li class="list-group-item">msgContent:{{$route.query.msgContent}}</li> -->
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">magTitle:{{title}}</li>
  </ul>
</template>

<script>
let msgTitles = [
  { id: 1, title: "msg001" },
  { id: 2, title: "msg002" },
  { id: 3, title: "msg003" }
];
export default {
  props: ["msgId", "msgContent"],
  data() {
    return {
      title: ""
    };
  },
  //这里计算第一次路由组件创建的时候,title的值
  mounted() {
    this.show();
  },
  //这里是在计算监视非第一次点击,title的值
  watch: {
    $route(newVal, oldVal) {
      this.show();
    }
  },
  methods: {
    show() {
      this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
    }
  }
};
</script>

<style>
</style>