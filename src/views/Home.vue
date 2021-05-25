<template>
  <div class="home">
    <h1>{{ $t("title") }}</h1>
    <HelloWorld msg="" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
