<template>
  <div id="app">
    <ToolBar></ToolBar>
    <Transition name="page">
      <RouterView></RouterView>
    </Transition>
    <Spinner
        :loading="loadingSpinner"
    ></Spinner>
  </div>
</template>

<script>

import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";
import bus from "@/utils/bus";

export default {
  name: 'App',

  components: {
    Spinner,
    ToolBar,
  },

  data() {
    return {
      loadingSpinner: false,
    }
  },

  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },

  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },

  methods: {
    startSpinner() {
      this.loadingSpinner = true;
    },
    endSpinner() {
      this.loadingSpinner = false;
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
