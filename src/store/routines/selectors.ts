import { getNextMoment } from '@/utils/routines';
import { IAppState } from '../store';

export function selectRoutinesList(state: IAppState) {
	return state.routines.routines;
}

export function selectDateRoutinesList(state: IAppState, date: TMoment) {
	const routines = selectRoutinesList(state);

	return routines.filter((routine) => {
		if (!routine.active) return false;
		if (routine.createdAt > date) return false;
		if (routine.lastCheck === date) return true;

		const nextMoment = getNextMoment(routine);
		if (nextMoment === date) return true;

		return false;
	});
}

export function selectRoutine(state: IAppState, routineId?: string) {
	if (!routineId) return null;

	const routines = selectRoutinesList(state);

	return routines.find((routineData) => routineData.id === routineId);
}
