import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@ui5/webcomponents-react';

import '@ui5/webcomponents-react/dist/Assets';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>
);
