import { observer } from "mobx-react-lite";
import todo from "./store/todo";
import React, { useState } from "react";

function Todo() {
	const [value, setValue] = useState("");
	const [num, setNum] = useState('');
	console.log(JSON.parse(JSON.stringify(todo.arrId)));
	console.log(JSON.parse(JSON.stringify(todo.todos)));

	function inputHandler(data) {
		if (data.length > 0) {todo.addTodo({ id: todo.IdCounter, title: data, completed: false });
		todo.addCounter();
		setValue("");}
		
	}

	return (
		<div className="wrapper_todos">
			<div className="todo_wrapper">
				<input
					className="input"
					type="text"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<button className="todo_button" onClick={() => inputHandler(value)}>
					add
				</button>
			</div>
			<div className="wrapper_fetch">
				<input
					type="number"
					value={num}
					onChange={(e) => setNum(Number(e.target.value))}
					className="input"
					placeholder="choose id todo"
					min="1" max="200"
				/>
				<button
					className="fetch_button"
					onClick={() => {
						todo.fetchTodos(num);
					}}
				>
					Add todo from server
				</button>
			</div>
			{todo.todos.map((t) => (
				<div className="todo" key={t.id}>
					<input
						type="checkbox"
						checked={t.completed}
						onChange={() => todo.completeTodo(t.id)}
					/>

					{t.title}

					<button onClick={() => todo.removeTodo(t.id)}>X</button>
				</div>
			))}
		</div>
	);
}

export default observer(Todo);
