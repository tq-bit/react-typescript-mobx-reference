import { observable, reaction, action, computed } from 'mobx';
import { createContext } from 'react';

interface TodoItem {
	title: string;
	description: string;
}

class TodoStore {
	constructor() {
		reaction(
			() => this.todos,
			(_) => console.log(this.todos.length)
		);
	}

	@observable todos: TodoItem[] = [];

	@action addTodo = (todo: TodoItem) => {
		this.todos.push({ ...todo });
	};

	@computed get info() {
		return {
			total: this.todos.length,
		};
	}
}

export default createContext(new TodoStore());
