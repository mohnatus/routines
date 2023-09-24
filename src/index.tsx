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
import { RoutinePage } from './pages/RoutinePage';
import { Layout } from './layouts/layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RoutinesPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/routine/new',
		element: <RoutinePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/routine/:routineId',
		element: <RoutinePage />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

readDBData().then((data) => {
	store.dispatch(initRoutinesAction(data.routines));
});

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
