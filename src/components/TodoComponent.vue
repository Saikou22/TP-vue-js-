<template>
	<div>
		<div class="titre">
			{{ todo.title }}
		</div>

		<div v-if="todo.completed" class="ok">Terminé !</div>
		<div v-else class="ko">A faire</div>
	</div>
</template>

<script>
export default {
	props: {
		todo: Object
	}
}
</script>

<style>
.ok {
	color: green;
}

.ko {
	color: red;
}
</style>