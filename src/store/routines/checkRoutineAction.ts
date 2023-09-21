import { getDateMoment } from '@/utils/date';
import { RoutinesActionTypes, TCheckRoutineAction } from './types';

export function checkRoutineAction(routine: TRoutine): TCheckRoutineAction {
	return {
		type: RoutinesActionTypes.check,
		payload: {
			id: routine.id,
			lastCheck: getDateMoment(),
		},
	};
}
