<template>
  <ul class="list-group">
    <!-- <li class="list-group-item">newsId:{{$route.params.newsId}}</li> -->
    <li class="list-group-item">newsId:{{newsId}}</li>
    <!-- <li class="list-group-item">newsContent:{{$route.query.newsContent}}</li> -->
    <li class="list-group-item">newsContent:{{newsContent}}</li>
  </ul>
</template>

<script>
export default {
  props: ["newsId", "newsContent"]
};
</script>

<style>
</style>