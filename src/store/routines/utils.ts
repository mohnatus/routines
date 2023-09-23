import { RepeatTypes, TRepeat } from '../types';
import { TRoutineData } from './types';

export function getRepeat(params: TRoutineData): TRepeat | null {
	const { repeatType, period, weekDays, monthDays } = params;

	if (!params.repeatType) return null;

	if (repeatType === RepeatTypes.period) {
		return {
			type: repeatType,
			value: period as number,
		};
	}

	if (repeatType === RepeatTypes.weekDay) {
		return {
			type: repeatType,
			value: weekDays as number[],
		};
	}

	if (repeatType === RepeatTypes.monthDay) {
		return {
			type: repeatType,
			value: monthDays as number[],
		};
	}

	return null;
}
