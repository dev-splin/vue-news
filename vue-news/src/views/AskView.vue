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

  computed: {
    ...mapState(['askItems'])
  },

  created() {
    this.FETCH_ASKS();
  },

  methods: {
    ...mapActions(['FETCH_ASKS'])
  }
}
</script>

<style scoped>

</style>