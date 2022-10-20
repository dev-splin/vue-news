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


import {mapActions, mapState} from "vuex";

export default {
  name: "NewsView",

  created() {
    this.FETCH_NEWS();
  },

  computed: {
    ...mapState(['newsItems'])
  },

  methods: {
    ...mapActions(['FETCH_NEWS'])
  }
}
</script>

<style scoped>
</style>