<template>
  <div>
    <ul class="news-list">
      <li
          v-for="item in listItems"
          class="post"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link
                  :to="`/item/${item.id}`">
                {{ item.user }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            by
            <router-link
                v-if="item.user"
                :to="`/user/${item.user}`"
                class="link-text"
            >
              {{ item.user }}
            </router-link>
            <a
              v-else
              :href="item.url"
            >
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  data() {
    return {
      routeName: '',
    }
  },

  computed: {
    listItems() {
      switch (this.routeName) {
        case 'news':
          return this.$store.getters.fetchedNewsItems;
        case 'ask':
          return this.$store.getters.fetchedAskItems;
        case 'jobs':
          return this.$store.getters.fetchedJobsItems;
      }
    }
  },

  created() {
    this.routeName = this.$route.name;
    this.dispatch();
  },

  methods: {
    /**
     * 데이터 가져오기
     */
    dispatch() {
      let fetchName = 'FETCH_';
      switch (this.routeName) {
        case 'news':
          fetchName += 'NEWS';
          break;
        case 'ask':
          fetchName += 'ASK';
          break;
        case 'jobs':
          fetchName += 'JOBS';
          break;
      }

      this.$store.dispatch(fetchName);
    },

  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>