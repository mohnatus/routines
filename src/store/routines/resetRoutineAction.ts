import { TRoutine } from '../types';
import { RoutinesActionTypes, TCheckRoutineAction } from './types';

export function resetRoutineAction(routine: TRoutine): TCheckRoutineAction {
	return {
		type: RoutinesActionTypes.check,
		payload: {
			id: routine.id,
      lastCheck: null
		},
	};
}
