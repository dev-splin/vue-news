<template>
  <div>
    <section>
      <UserProfile>
        <router-link
            slot="username"
            :to="`/user/${itemInfo.user}`"
        >
          {{ itemInfo.user }}
        </router-link>
        <div slot="time">Posted {{ itemInfo.time_ago }}</div>
      </UserProfile>
    </section>
    <section>
      <h2> {{ itemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import UserProfile from "@/components/UserProfile";

export default {
  name: "ItemView",
  components: {UserProfile},
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
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>