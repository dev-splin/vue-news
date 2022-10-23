<template>
  <div>
    <div
        v-for="item in jobItems"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "JobsView",

  computed: {
    ...mapState(['jobItems'])
  },

  created() {
    this.FETCH_JOBS();
  },

  methods: {
    ...mapActions(['FETCH_JOBS'])
  },
}
</script>

<style scoped>

</style>