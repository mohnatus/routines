import { nanoid } from 'nanoid';
import { createRoutine } from '@/db';
import { getDateMoment } from '@/utils/date';
import { getTime } from '@/utils/time';
import { RoutinesActionTypes, TAddRoutineAction, TRoutineData } from './types';
import { TRoutine } from '../types';
import { getRepeat } from './utils';

export function addRoutineAction(params: TRoutineData): TAddRoutineAction {
	const { name } = params;

	const routine: TRoutine = {
		id: nanoid(),
		name,
		createdAt: getDateMoment(),
		lastCheck: null,
		active: true,
		repeat: getRepeat(params),
		time: getTime(),
	};

	createRoutine(routine);

	return {
		type: RoutinesActionTypes.add,
		payload: routine,
	};
}
