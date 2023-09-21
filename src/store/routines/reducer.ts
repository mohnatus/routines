import { Reducer } from 'react';
import { IRoutinesState, RoutinesActionTypes, TRoutineAction } from './types';

export const defaultState: IRoutinesState = {
	routines: [],
};

export const routinesReducer: Reducer<IRoutinesState, TRoutineAction> = (
	state = defaultState,
	action
) => {
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
		case RoutinesActionTypes.remove:
			return {
				...state,
				routines: state.routines.filter(
					(routine) => routine.id !== action.payload
				),
			};
		case RoutinesActionTypes.check:
		case RoutinesActionTypes.reset:
			const { id, lastCheck } = action.payload;
			const routines = state.routines.map((routine) => {
				if (routine.id === id) {
					return {
						...routine,
						lastCheck,
					};
				}
				return routine;
			});
			return {
				...state,
				routines,
			};

		default:
			return state;
	}
};
