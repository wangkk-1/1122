<template>
  <div>
    <p>我是固定不变的</p>
    <slot>我爱你</slot>
    <slot name="aa">我恨你</slot>
    <ul>
      <li v-for="(person, index) in persons" :key="person.id">
        <!-- 类似属性传值  -->
        <slot name="uu" :person="person">{{person.name}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "zhaoliying", age: 33 },
        { id: 2, name: "yanmi", age: 35 },
        { id: 3, name: "zhoudongyu", age: 30 }
      ]
    };
  }
};
</script>

<style>
</style>