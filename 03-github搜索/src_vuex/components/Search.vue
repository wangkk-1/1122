<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">用户查询</h3>
    <div>
      <input type="text" placeholder="请输入内容" v-model="searchName" />
      <button @click="search">点击搜索</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    search() {
      // this.$bus.$emit("searchAjax",this.searchName)
      this.$store.dispatch("search", this.searchName);
    }
  }
};
</script>

<style scoped>
</style>
