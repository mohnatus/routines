import { RepeatTypes, TRoutine } from '@/store/types';
import { getNextMonthDay, getNextWeekDay, getPrevDate, todayMoment } from './date';

export function getNextMoment(routine: TRoutine): TMoment | null {
	const { createdAt, lastCheck, repeat } = routine;

	// начинается позже
	if (createdAt > todayMoment) return createdAt;

	// не настроен повтор
	if (!repeat) {
		// если уже чекнуто, не показывать
		// если нет, показывать сегодня
		return lastCheck ? null : todayMoment;
	}

	// настроен повтор

	let nextMoment;

	// повтор через n дней
	if (repeat.type === RepeatTypes.period) {
		// если еще не чекнуто, то показывать сегодня
		if (!lastCheck) nextMoment = todayMoment;
		// показывать через n дней после чека
		else if (repeat.value > 0) {
			const date = new Date(lastCheck);
			date.setDate(date.getDate() + repeat.value);
			nextMoment = +date;
		}
	}

	// повтор по дням недели
	else if (repeat.type === RepeatTypes.weekDay) {
		// если чек был, берем следующий подходящий день после него
		// если не было, берем подходящий день после вчерашнего (включая сегодня)
		const start = lastCheck || getPrevDate(todayMoment)
		const nextDate = getNextWeekDay(start, repeat.value);
		if (nextDate) nextMoment = +nextDate;
	}

	// повтор по дням месяца
	else if (repeat.type === RepeatTypes.monthDay) {
		// если чек был, берем следующий подходящий день после него
		// если не было, берем подходящий день после вчерашнего (включая сегодня)
		const start = lastCheck || getPrevDate(todayMoment)
		const nextDate = getNextMonthDay(start, repeat.value);
		if (nextDate) nextMoment = +nextDate;
	}

	// если срок прошел, показывать сегодня
	if (!nextMoment || nextMoment < todayMoment) return todayMoment;

	return nextMoment;
}
