<template>
  <div>
    news
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsView",

  data() {
    return {
      users: [],
    }
  },

  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function (response) {
        thi
      })
      .catch(function (error) {
        console.log(error)
      })

  }
}
</script>

<style scoped>
</style>