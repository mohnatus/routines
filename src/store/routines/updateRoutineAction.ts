import { updateRoutine } from '@/db';
import { RoutinesActionTypes, TUpdateRoutineAction, TRoutineData } from './types';
import { TRoutine } from '../types';
import { getRepeat } from './utils';

export function updateRoutineAction(
	routine: TRoutine,
	params: TRoutineData
): TUpdateRoutineAction {
	const { name } = params;

	const updatedRoutine: TRoutine = {
		...routine,
		name,
		active: true,
		repeat: getRepeat(params),
	};

	updateRoutine(updatedRoutine);

	return {
		type: RoutinesActionTypes.update,
		payload: updatedRoutine,
	};
}
