<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${itemInfo.id}`">
            {{ itemInfo.user }}
          </router-link>
          <div class="time">
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2> {{ itemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content"></div>
    </section>
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