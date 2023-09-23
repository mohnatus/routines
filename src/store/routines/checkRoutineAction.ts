import { getDateMoment } from '@/utils/date';
import { RoutinesActionTypes, TCheckRoutineAction } from './types';
import { TRoutine } from '../types';
import { updateRoutine } from '@/db';

export function checkRoutineAction(routine: TRoutine): TCheckRoutineAction {
	const checkTime = getDateMoment();

	updateRoutine({
		...routine,
		lastCheck: checkTime,
	});

	return {
		type: RoutinesActionTypes.check,
		payload: {
			id: routine.id,
			lastCheck: checkTime,
		},
	};
}
