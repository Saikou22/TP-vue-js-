<template>
	<div class="photos">
		<photo	v-for="photo of photos"
            :key="photo.id"
            :photo="photo"
            @delete="deletePhoto" />
	</div>
</template>

<script>
import Photo from '@/components/PhotoComponent.vue';

export default {
	components: {
		Photo
	},
	
	data() {
		return {
			photos: []
		}
	},

	async mounted() {
		let result = await fetch('https://jsonplaceholder.typicode.com/photos');
    this.photos = await result.json();
	},

	methods: {
		deletePhoto(photo) {
			let index = this.photos.indexOf(photo);
			this.photos.splice(index, 1);
		}
	}
}
</script>

<style scoped>
.photos {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>