import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { RoutinesPage } from './pages/RoutinesPage';
import { store } from './store/store';
import { readDBData } from './db';
import { initRoutinesAction } from './store/routines';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RoutinesPage />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

readDBData().then(data => {
	store.dispatch(initRoutinesAction(data.routines))
})

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
