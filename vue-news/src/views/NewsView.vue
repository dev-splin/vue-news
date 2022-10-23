<template>
  <div>
    <div
        v-for="item in newsItems"
    >
      <a>
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
      </small>
      <router-link :to="`/user/${item.user}`">
        {{ item.user }}
      </router-link>
    </div>
  </div>
</template>

<script>


import {mapActions, mapState} from "vuex";

export default {
  name: "NewsView",

  computed: {
    ...mapState(['newsItems'])
  },

  created() {
    this.FETCH_NEWS();
  },

  methods: {
    ...mapActions(['FETCH_NEWS'])
  }
}
</script>

<style scoped>
</style>