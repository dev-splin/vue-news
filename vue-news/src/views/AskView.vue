<template>
  <div>
    <div
        v-for="item in askItems"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import {fetchAskList} from "@/api";
import {mapActions, mapState} from "vuex";

export default {
  name: "AskView",

  created() {
    this.FETCH_ASKS();
  },

  computed: {
    ...mapState(['askItems'])
  },

  methods: {
    ...mapActions(['FETCH_ASKS'])
  }
}
</script>

<style scoped>

</style>