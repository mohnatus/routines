import {
	RoutinesActionTypes,
	TUncheckRoutineAction,
} from './types';
import { TRoutine } from '../types';
import { updateRoutine } from '@/db';

export function uncheckRoutineAction(routine: TRoutine): TUncheckRoutineAction {
	updateRoutine({
		...routine,
		lastCheck: null,
	});

	return {
		type: RoutinesActionTypes.uncheck,
		payload: {
			id: routine.id,
		},
	};
}
