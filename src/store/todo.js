import { makeAutoObservable, runInAction } from "mobx";

class Todo {
	todos = [];
	arrId = [];
	IdCounter = 201;

	constructor() {
		makeAutoObservable(this);
	}

	addCounter() {
		this.IdCounter++;
	}

	addTodo(todo) {
		this.todos.push(todo);
	}
	removeTodo(id) {
		console.log("indexof", this.arrId.indexOf(id), "id = ", id);
		this.arrId.splice(this.arrId.indexOf(id), 1);
		this.todos = this.todos.filter((todo) => todo.id !== id);
	}
	completeTodo(id) {
		this.todos = this.todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
	}
	fetchTodos(num) {
		console.log('nummmmmmmmmmmmm', num)
			if (!this.arrId.includes(num) && (typeof num === 'number')) {
				fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
					.then((response) => response.json())
					.then((json) => {
						runInAction(() => {
							this.todos = [
								...this.todos,
								{
									completed: false,
									title: json.title,
									id: json.id,
								},
							];
						}) 
					});
				console.log("num=", typeof num);
				this.arrId.push(num);
			}
		
	}
}

export default new Todo();
