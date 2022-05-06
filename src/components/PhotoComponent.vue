<template>
	<div class="photo">
		<div class="titre">{{ photo.title }}</div>

		<div class="image">
			<img :src="photo.url" :alt="photo.title" />
			<div class="delete" @click="supprimerPhoto">Supprimer</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		photo: Object
	},

	methods: {
		supprimerPhoto() {
			this.$emit('delete', this.photo);
		}
	}
}
</script>

<style scoped>
.photo {
	width: 300px;
	margin: 10px;
}

.photo .titre {
	font-size: 18px;
	height: 40px;
}

.photo .image {
	position: relative;
	max-width: 100%;
}

.photo .image > img {
	max-width: 100%;
}


.photo .delete {
	position: absolute;
	top: 0;
	right: 0;
	border-bottom-left-radius: 4px;
	padding: 5px 10px;
	background: rgb(233, 51, 51);
	color: white;
	cursor: pointer;
}
</style>