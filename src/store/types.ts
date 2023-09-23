export const enum RepeatTypes {
	'period' = 'period',
	'weekDay' = 'weekDay',
	'monthDay' = 'monthDay',
}

export type TRepeatPeriod = {
	type: RepeatTypes.period;
	value: number;
};

export type TRepeatWeekDay = {
	type: RepeatTypes.weekDay;
	value: TWeekDay[];
};

export type TRepeatMonthDay = {
	type: RepeatTypes.monthDay;
	value: TMonthDay[];
};

export type TRepeat = TRepeatPeriod | TRepeatWeekDay | TRepeatMonthDay;

export type TRoutine = {
	id: string;
	name: string;
	createdAt: TMoment;
	active: boolean;
	lastCheck: TMoment | null;
	repeat: TRepeat | null;
	time: TTime | null;
};
