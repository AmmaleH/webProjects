<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // storage.setItem("abb", 1);
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.setItem("abb_a", { fi: 1 }, "user");
    // storage.setItem("abc", {});
    // storage.setItem("abc_a", { fc: 2 }, "abc");
    console.log(storage.getItem("a", "user"));
    // storage.clear("abc");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
