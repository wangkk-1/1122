<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(n) in news" :key="n.id">
        {{n.content}}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="handlerJump(n)"
        >{{n.id}}</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        { id: 1, content: "newOne" },
        { id: 2, content: "newTwo" },
        { id: 3, content: "newThree" }
      ]
    };
  },
  methods: {
    //编程式导航
    handlerJump(n) {
      // this.$router.push("/home/news/info" + n.id + "?newsContent=" + n.content);
      this.$router.push({name: "newsInfo",params: { newsId: n.id },query: { newsContent: n.content }});
      // this.$router.replace({name: "newsInfo",params: { newsId: n.id },query: { newsContent: n.content }});
    }
  }
};
</script>

<style>
</style>