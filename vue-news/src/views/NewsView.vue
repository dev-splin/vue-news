<template>
  <div>
    <div
        v-for="item in newsItems"
    >
      <router-link :to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
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


import {mapActions, mapGetters} from "vuex";

export default {
  name: "NewsView",

  computed: {
    ...mapGetters({ newsItems: 'fetchedNewsItems' })
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