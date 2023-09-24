import { Reducer } from 'react';
import { IRoutinesState, RoutinesActionTypes, TRoutineAction } from './types';

export const defaultState: IRoutinesState = {
	routines: [],
};

export const routinesReducer: Reducer<IRoutinesState, TRoutineAction> = (
	state = defaultState,
	action
) => {
	console.log(action);

	switch (action.type) {
		case RoutinesActionTypes.init:
			return {
				...state,
				routines: action.payload,
			};
		case RoutinesActionTypes.add:
			return {
				...state,
				routines: [...state.routines, action.payload],
			};
		case RoutinesActionTypes.update:
			return {
				...state,
				routines: state.routines.map((routine) => {
					if (routine.id === action.payload.id) return action.payload;
					return routine;
				}),
			};
		case RoutinesActionTypes.remove:
			return {
				...state,
				routines: state.routines.filter(
					(routine) => routine.id !== action.payload
				),
			};
		case RoutinesActionTypes.check:
			return {
				...state,
				routines: state.routines.map((routine) => {
					if (routine.id === action.payload.id) {
						return {
							...routine,
							lastCheck: action.payload.lastCheck,
						};
					}
					return routine;
				}),
			};
		case RoutinesActionTypes.uncheck:
			return {
				...state,
				routines: state.routines.map((routine) => {
					if (routine.id === action.payload.id) {
						return {
							...routine,
							lastCheck: null,
						};
					}
					return routine;
				}),
			};

		default:
			return state;
	}
};
