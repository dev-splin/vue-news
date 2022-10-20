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
import {fetchJobsList} from "@/api";

export default {
  name: "JobsView",

  data() {
    return {
      jobItems: [],
    }
  },

  created() {
    const vm = this;
    fetchJobsList()
        .then(response => this.jobItems = response.data)
        .catch(error => console.log(error));
  },
}
</script>

<style scoped>

</style>