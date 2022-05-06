<template>
	<div>
		<h1>TODO LIST</h1>

		<todo	v-for="todo of todos"
				:key="todo.id"
				:todo="todo" />
	</div>
</template>

<script>
// @ fait revenir au répertoire "src"
// import Todo from '../components/TodoComponent.vue';
import Todo from '@/components/TodoComponent.vue';

export default {
	components: {
		Todo
	},

	data() {
		return {
			todos: []
		}
	},

	async mounted() {
		let result = await fetch('https://jsonplaceholder.typicode.com/todos');
		let todos = await result.json();

		this.todos = todos;
	},

	// mounted() {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 	.then(result => result.json())
	// 	.then(todos => this.todos = todos);
	// }
}
</script>