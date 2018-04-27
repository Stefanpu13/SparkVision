<template>
<div class="test">
<img class=""
  v-bind:src="displayedImageUrl" />
</div>
</template>

<script>
  export default {
    props: ['displayedImageUrl'],
    name: 'sv-picture'
  }
</script>

<style>
img {
  width: 100%;
  height: 100%;
}

.test {
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>
