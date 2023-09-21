import { todayMoment } from './date';

export function getNextMoment(routine: TRoutine): TMoment | null {
	const { createdAt, lastCheck, repeat } = routine;

	// начинается позже
	if (createdAt > todayMoment) return createdAt;

	// никогда не чекалось
	if (!lastCheck) return todayMoment;

	// уже чекнуто, нет повторов
	if (!repeat) return null;

	let nextMoment;

	if (repeat.type === 'days') {
		const date = new Date(lastCheck);
		date.setDate(date.getDate() + repeat.value);
		nextMoment = +date;
	} else if (repeat.type === 'weekDay') {
		const date = new Date(lastCheck);
		date.setDate(date.getDate() + 7);
		nextMoment = +date;
	} else {
		const date = new Date(lastCheck);
		date.setMonth(date.getMonth() + 1);
		nextMoment = +date;
	}

	if (!nextMoment || nextMoment < todayMoment) return todayMoment;

	return nextMoment;
}
