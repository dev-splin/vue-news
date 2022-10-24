<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserView",

  computed: {
    ...mapGetters({ userInfo: 'fetchedUserInfo' })
  },

  created() {
    const userId = this.$route.params.id;
    this.FETCH_USER_INFO(userId);
  },

  methods: {
    ...mapActions(['FETCH_USER_INFO'])
  }
}
</script>

<style scoped>

</style>