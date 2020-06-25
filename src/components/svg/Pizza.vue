<template>
  <v-img src="../../assets/pizza.png" :width="width" :height="height"></v-img>
</template>

<script>
import icon_config from "@/mixins/icon_config";
export default {
  name: "Pizza",
  mixins: [icon_config]
};
</script>

<style scoped></style>
