function _getDateObject(date: Date | TMoment): Date {
	if (typeof date === 'number') {
		return new Date(date);
	}
	return date;
}

export function cloneDate(date: Date | TMoment): Date {
	const _date = _getDateObject(date);
	return new Date(+_date);
}

export function getPrevDate(date: Date | TMoment): Date {
	const _date = cloneDate(date);
	_date.setDate(_date.getDate() - 1);
	return _date;
}

export function getNextDate(date: Date | TMoment): Date {
	const _date = cloneDate(date);
	_date.setDate(_date.getDate() + 1);
	return _date;
}

export function getDateMoment(date: Date = new Date()): TMoment {
	const clone = cloneDate(date);
	clone.setHours(0, 0, 0, 0);
	return +clone;
}

export function getDateString(date: Date | TMoment): string {
	const _date = _getDateObject(date);

	const d = _date.getDate();
	const m = _date.getMonth() + 1;
	return `${d.toString().padStart(2, '0')}.${m
		.toString()
		.padStart(2, '0')}.${_date.getFullYear()}`;
}

export function getNextWeekDay(date: Date | TMoment, days: TWeekDay[]): Date | null {
	if (days.length === 0) return null;

	const _date = _getDateObject(date);

	while (true) {
		_date.setDate(_date.getDate() + 1);
		const _weekDay = _date.getDay();
		const weekDay = _weekDay === 0 ? 6 : _weekDay - 1;
		if (days.includes(weekDay)) {
			return _date;
		}
	}
}

export function getNextMonthDay(date: Date | TMoment, days: TMonthDay[]): Date | null {
	console.log('next month day', date, days)
	if (days.length === 0) return null;

	const _date = _getDateObject(date);

	while (true) {
		_date.setDate(_date.getDate() + 1);
		const _monthDay = _date.getDate();
		if (days.includes(_monthDay)) {
			return _date;
		}
	}
}

export const todayMoment = getDateMoment();
