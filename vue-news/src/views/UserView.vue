<template>
  <UserProfile>
    <div slot="username">{{ userInfo. id }}</div>
    <span slot="time">Joined {{ userInfo.created }}, </span>
    <span slot="karam">{{ userInfo.karma }}</span>
  </UserProfile>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile";

export default {
  name: "UserView",
  components: {UserProfile},
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