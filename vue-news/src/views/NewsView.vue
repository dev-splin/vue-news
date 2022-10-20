<template>
  <div>
    <div
        v-for="item in newsItems"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import {fetchNewsList} from "@/api";

export default {
  name: "NewsView",

  data() {
    return {
      newsItems: [],
    }
  },

  created() {
    fetchNewsList()
      .then(response => this.newsItems = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>
</style>