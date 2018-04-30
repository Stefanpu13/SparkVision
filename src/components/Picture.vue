<template>
  <img v-bind:src="displayedImageUrl" />
</template>

<script>
export default {
  props: ["displayedImageUrl"],
  name: "sv-picture"
};
</script>

<style scoped>
img {
  /* Give 'auto' to 'height' and 'width', since images might be portait or landscape*/
  height: auto;
  max-height: 100%;
  width: auto;
  max-width: 100%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
