<template>
  <div id="app">
    <ToolBar></ToolBar>
    <Transition name="page">
      <RouterView></RouterView>
    </Transition>
  </div>
</template>

<script>

import ToolBar from "@/components/ToolBar";

export default {
  name: 'App',
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
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
