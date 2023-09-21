export enum DateActionTypes {
	prev = 'date/prev',
	next = 'date/next',
}

export type TDatePrevAction = {
	type: DateActionTypes.prev;
	payload: TMoment;
};

export type TDateNextAction = {
	type: DateActionTypes.next;
	payload: TMoment;
};

export type TDateAction = TDatePrevAction | TDateNextAction;

export interface IDateState {
	date: TMoment
}