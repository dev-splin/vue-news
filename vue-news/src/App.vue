<template>
  <div id="app">
    <ToolBar></ToolBar>
    <RouterView></RouterView>
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
</style>
