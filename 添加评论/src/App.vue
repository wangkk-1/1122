<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对德云社的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <Add ref="add" /> -->
      <Add @addComment="addComment" />
      <List :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "./components/Add";
import List from "./components/List";
export default {
  components: {
    Add,
    List
  },
  /* mounted() {
    //组件对象
    this.$refs.add.$on('addComment',this.addComment  )
  }, */
  data() {
    return {
      comments: [
        { id: 1, username: "郭德纲", content: "说相声得卖力气" },
        { id: 2, username: "于谦", content: "抽烟喝酒烫头" },
        { id: 3, username: "岳云鹏", content: "你是个好人" }
      ]
    };
  },
  methods: {
    addComment(obj) {
      this.comments.unshift(obj);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>
