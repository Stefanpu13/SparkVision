<template>
<!-- <div class="test"> -->
  <img class=""
    v-bind:src="displayedImageUrl" />
<!-- </div> -->
</template>

<script>
  export default {
    props: ['displayedImageUrl'],
    name: 'sv-picture'
  }
</script>

<style>
img {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

/* .test {
  width: 100%;
  height: 100%;
} */
</style>
