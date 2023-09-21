 type TMoment = number;
 type TTime = number;

 type TRepeatDays = {
	type: 'days';
	value: number;
};

 type TRepeatWeekDay = {
	type: 'weekDay';
	value: number[];
};

 type TRepeatMonthDay = {
	type: 'monthDay';
	value: number[];
};

 type TRepeat = TRepeatDays | TRepeatWeekDay | TRepeatMonthDay;

type TRoutine = {
	id: string;
	name: string;
	createdAt: TMoment;
	active: boolean;
	lastCheck: TMoment | null;
	repeat: TRepeat | null;
	time: TTime | null;
};
