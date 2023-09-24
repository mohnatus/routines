import {
	createStore,
	applyMiddleware,
	compose,
	combineReducers,
	AnyAction,
} from 'redux';
import thunkMiddleware, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IRoutinesState, routinesReducer } from './routines';
import { IDateState, dateReducer } from './date';
import { TDateAction } from './date';
import { TRoutineAction } from './routines/types';
import { IToastState, TToastAction, toastReducer } from './toast';

export type TAction = TRoutineAction | TDateAction | TToastAction;
export interface IAppState {
	routines: IRoutinesState;
	date: IDateState;
	toast: IToastState
};

type IAppDispatch = ThunkDispatch<IAppState, any, TAction>;

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

export const store = createStore(
	combineReducers({
		routines: routinesReducer,
		date: dateReducer,
		toast: toastReducer
	}),
	composeEnhancers(
		applyMiddleware<IAppDispatch, any>(
			thunkMiddleware as ThunkMiddleware<IAppState, TAction, any>
		)
	)
);

export const useStoreSelector: TypedUseSelectorHook<IAppState> = useSelector;
export const useStoreDispatch = () =>
	useDispatch<ThunkDispatch<IAppState, unknown, AnyAction>>();
