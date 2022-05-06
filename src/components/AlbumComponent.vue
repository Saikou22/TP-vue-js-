<template>
  <div class="album">

    <div class="album"> {{album.title}} </div>

  </div>
</template>

<script>

export default {
  name: "AlbumView",

  props: {
    album: Object,
  }
}


</script>

<style scoped>
.album {
  width: 100px;
  margin: 10px;
}

.album .titre {
  font-size: 18px;
  height: 40px;
}

</style>