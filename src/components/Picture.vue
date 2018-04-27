<template>
<div class="test">
<img class=""
  src="https://sparkvision.file.core.windows.net/sparkvision/phones/GoogleNexus5.jpg?sv=2017-07-29&ss=f&srt=sco&sp=r&se=2018-04-29T15:50:45Z&st=2018-04-26T07:50:45Z&spr=https&sig=rXvF%2BN%2F7195rZkjrwGlBj%2Bhr9FMkQsLPxfQvdr%2B7Cpg%3D" />
</div>
</template>

<script>
  export default {
    props: ['url'],
    name: 'sv-picture',

    methods: {

    }
  }

</script>

<style>
img {
  width: 100%;
  height: 100%;
}

.test {
  background-color: orange;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>
