<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "UserView",

  computed: {
    ...mapState(['userInfo'])
  },

  created() {
    const userName = this.$route.params.id;
    this.FETCH_USER_INFO(userName);
  },

  methods: {
    ...mapActions(['FETCH_USER_INFO'])
  }
}
</script>

<style scoped>

</style>