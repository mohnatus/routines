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

export const todayMoment = getDateMoment();
