import { RoutinesActionTypes, TInitRoutinesAction } from './types';

export function initRoutinesAction(routines: TRoutine[]): TInitRoutinesAction {
	return {
		type: RoutinesActionTypes.init,
		payload: routines,
	};
}
