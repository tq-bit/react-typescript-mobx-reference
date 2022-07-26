import React, { Fragment } from 'react';
import { Input, Label } from '@ui5/webcomponents-react';

interface TodoInputProps {
	name: string;
	label?: string;
	type?: 'Text' | 'Email' | 'Number' | 'Password' | 'Tel' | 'URL' | undefined;
	onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function AppTodoInput({ name, label, type, onKeyUp }: TodoInputProps) {
	return (
		<Fragment>
			<Label>{label}</Label>
			<Input
				name={name}
				type={type || 'Text'}
				onKeyUp={(e) => onKeyUp(e as React.KeyboardEvent<HTMLInputElement>)}
			></Input>
		</Fragment>
	);
}
