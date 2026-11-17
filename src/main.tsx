import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@fontsource-variable/inter-tight';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/docs.css';
import './styles/journey.css';
import './styles/demo.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
