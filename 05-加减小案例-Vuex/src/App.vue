<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
    <p>{{currentCount}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    /* increment() {
      //这里本来就是直接让数据增加的,没必要分发给actions让后再通过mutations,可以直接提交给mutations去处理数据
      this.$store.commit("increment");
      // this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }, */
    ...mapMutations(["increment", "decrement"]),
    /* incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    } */

    // ...mapActions(["incrementIfOdd", "incrementAsync"])
    ...mapActions(["incrementIfOdd"]),
    ...mapActions({ incrementAsync: "incrementAsync" })
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    currentCount() {
      return this.$store.getters.currentCount;
    }
  }
};
</script>

<style>
</style>