import { deleteRoutine } from '@/db';
import { RoutinesActionTypes, TRemoveRoutineAction } from './types';
import { TRoutine } from '../types';

export function removeRoutineAction(routine: TRoutine): TRemoveRoutineAction {
	deleteRoutine(routine);

	return {
		type: RoutinesActionTypes.remove,
		payload: routine.id,
	};
}
