<template>
  <div>
    <p>title : {{ itemInfo.title }}</p>
    <p>name : {{ itemInfo.user }}</p>
    <p>points : {{ itemInfo.points }}</p>

  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ItemView",

  computed: {
    ...mapGetters({ itemInfo: 'fetchedItemInfo' })
  },

  created() {
    const itemId = this.$route.params.id;
    this.FETCH_ITEM_INFO(itemId);
  },

  methods: {
    ...mapActions(['FETCH_ITEM_INFO'])
  }
}
</script>

<style scoped>

</style>