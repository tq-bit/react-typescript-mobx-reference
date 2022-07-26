import React, { useState } from 'react';
import AppTodoInput from './components/TodoInput';
import AppTodoList from './components/TodoList';

import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { Form, Grid } from '@ui5/webcomponents-react';

import { useContext } from 'react';
import TodoStore from './store/todos';

interface TodoItem {
	title: string;
	description: string;
}

export default function App() {
	const { addTodo, todos } = useContext(TodoStore);
	const [todo, setTodo] = useState<TodoItem>({ title: '', description: '' });

	const onKeyUp = (e: any) => {
		const { value, name } = e?.target;
		setTodo({
			...todo,
			[name]: value,
		});
	};
	const onSubmit = (e: React.KeyboardEvent<HTMLElement>) => {
		e.preventDefault();
		addTodo(todo);
	};
	return (
		<Grid>
			<div data-layout-indent='XL1 L1 M1 S0' data-layout-span='XL8 L8 M8 S12'>
				<Form onSubmit={(e: React.KeyboardEvent<HTMLElement>) => onSubmit(e)}>
					<AppTodoInput name='title' label='Please enter a title' onKeyUp={onKeyUp}></AppTodoInput>
					<AppTodoInput
						name='description'
						label='Please enter a description'
						onKeyUp={onKeyUp}
					></AppTodoInput>
				</Form>

				<AppTodoList todos={todos}></AppTodoList>
			</div>
		</Grid>
	);
}
