<template>
  <img class=""
    v-bind:src="displayedImageUrl" />
</template>

<script>
export default {
  props: ["displayedImageUrl"],
  name: "sv-picture"
};
</script>

<style>
img {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
