import { nanoid } from 'nanoid';
import { createRoutine } from '@/db';
import { getDateMoment } from '@/utils/date';
import { getTime } from '@/utils/time';
import { RoutinesActionTypes, TAddRoutineAction } from './types';

export function addRoutineAction({
	name,
}: Pick<TRoutine, 'name'>): TAddRoutineAction {
	const routine: TRoutine = {
		id: nanoid(),
		name,
		createdAt: getDateMoment(),
		lastCheck: null,
		active: true,
		repeat: {
			type: 'days',
			value: 2,
		},
		time: getTime(),
	};

	createRoutine(routine);

	return {
		type: RoutinesActionTypes.add,
		payload: routine,
	};
}
