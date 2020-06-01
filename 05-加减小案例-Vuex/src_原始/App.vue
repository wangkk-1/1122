<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementIfOdd() {
      if (this.count % 2 === 1) {
        this.count++;
      }
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    }
  }
};
</script>

<style>
</style>