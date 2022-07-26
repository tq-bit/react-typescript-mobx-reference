import { List, StandardListItem } from '@ui5/webcomponents-react';

interface TodoItem {
	title: string;
	description: string;
}

interface TodoListProps {
	todos: TodoItem[];
}

export default function AppTodoList({ todos }: TodoListProps) {
	return (
		<List>
			{todos.map((todo) => {
				return (
					<StandardListItem key={todo.title} additionalText={todo.title}>
						{todo.description}
					</StandardListItem>
				);
			})}
		</List>
	);
}
