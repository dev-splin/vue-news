<template>
  <ListItem></ListItem>
</template>

<script>

import ListItem from "@/components/ListItem";
import bus from "@/utils/bus";

export default {
  name: "NewsView",

  components: {
    ListItem
  },

  created() {
    bus.$emit('start:spinner');
    bus.$emit('end:spinner');
  }
}
</script>

<style scoped>

</style>