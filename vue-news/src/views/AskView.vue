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

export default {
  name: "AskView",

  data() {
    return {
      askItems: [],
    }
  },

  created() {
    const vm = this;
    fetchAskList()
        .then(response => this.askItems = response.data)
        .catch(error => console.log(error));
  },
}
</script>

<style scoped>

</style>