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
  max-width: 100vw;
  /* height: 100%; */
  /* height: auto;
  width: auto; */
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* position: absolute; */
}
</style>
