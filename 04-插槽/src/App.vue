<template>
  <div>
    <!-- 第一个插槽 -->
    <Child>
      <!-- 全写写法 默认插槽 -->
      <template>
        <h2>哈哈哈</h2>
      </template>
      <!-- 具名插槽 -->
      <!-- 如果 template内部只有一个标签可以简写 -->
      <!-- <p slot="aa"></p> -->
      <template slot="aa">
        <p>周冬雨</p>
      </template>
      <span>嘿嘿</span>
    </Child>
    <!-- 第二个插槽 -->
    <Child>
      <!-- 简写 template可以省略-->
      <a href="https://www.baidu.com/">去百度</a>
      <span slot-scope="slotProps" v-show="isShow" slot="uu">√{{slotProps.person.name}}</span>
    </Child>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  components: {
    Child
  },
  data() {
    return {
      isShow: true
    };
  }
};
</script>

<style>
</style>