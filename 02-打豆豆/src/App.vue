<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <Main :todos="todos" :deleteOne="deleteOne" :updateOne="updateOne"></Main>
      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  components: {
    Main,
    Header,
    Footer
  },

  data() {
    return {
      todos: [
        { id: 1, content: "抽烟", isOver: false },
        { id: 2, content: "喝酒", isOver: true },
        { id: 3, content: "烫头", isOver: false }
      ]
    };
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    deleteOne(index) {
      this.todos.splice(index, 1);
    },
    updateOne(index, val) {
      this.todos[index].isOver = val;
    },
    updateAll(val) {
      this.todos.forEach(item => (item.isOver = val));
    },
    deleteAll() {
      this.todos = this.todos.filter(item => !item.isOver);
    }
  }
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
