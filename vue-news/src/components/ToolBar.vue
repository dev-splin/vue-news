<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px;
  display: flex;
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>