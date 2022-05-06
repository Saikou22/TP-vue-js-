<template>
  <div class="album">
    <Album v-for="album of albums"
            :key="album.id"
            :title="album.title"
            :album="album"/>
  </div>

</template>

<script>
import Album from '../components/AlbumComponent.vue';

export default {
  components: {
    Album
  },

  data() {
    return {
      albums:[]
    }
  },
    async mounted() {
      let result = await fetch('https://jsonplaceholder.typicode.com/albums');
      this.albums = await result.json();
  },

}
</script>
<style scoped>
.album {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>