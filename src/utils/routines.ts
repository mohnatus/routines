import { RepeatTypes, TRoutine } from '@/store/types';
import { getNextMonthDay, getNextWeekDay, todayMoment } from './date';

export function getNextMoment(routine: TRoutine): TMoment | null {
	const { createdAt, lastCheck, repeat } = routine;

	// начинается позже
	if (createdAt > todayMoment) return createdAt;

	// никогда не чекалось
	if (!lastCheck) return todayMoment;

	// уже чекнуто, нет повторов
	if (!repeat) return null;

	let nextMoment;

	if (repeat.type === RepeatTypes.period) {
		if (repeat.value > 0) {
			const date = new Date(lastCheck);
			date.setDate(date.getDate() + repeat.value);
			nextMoment = +date;
		}
	} else if (repeat.type === RepeatTypes.weekDay) {
		const nextDate = getNextWeekDay(lastCheck, repeat.value);
		if (nextDate) nextMoment = +nextDate;
	} else {
		const nextDate = getNextMonthDay(lastCheck, repeat.value);
		if (nextDate) nextMoment = +nextDate;
	}

	if (!nextMoment || nextMoment < todayMoment) return todayMoment;

	return nextMoment;
}
