import { RepeatTypes, TRoutine } from "../types";

export enum RoutinesActionTypes {
	init = 'routines/init',
	add = 'routine/add',
	update = 'routine/update',
	remove = 'routine/remove',
	check = 'routine/check',
	uncheck = 'routine/uncheck',
	changeDate = 'date/change',
}

export type TInitRoutinesAction = {
	type: RoutinesActionTypes.init;
	payload: TRoutine[];
};

export type TAddRoutineAction = {
	type: RoutinesActionTypes.add;
	payload: TRoutine;
};

export type TUpdateRoutineAction = {
	type: RoutinesActionTypes.update;
	payload: TRoutine;
};

export type TRemoveRoutineAction = {
	type: RoutinesActionTypes.remove;
	payload: string;
};

export type TCheckRoutineAction = {
	type: RoutinesActionTypes.check;
	payload: Pick<TRoutine, 'id' | 'lastCheck'>;
};

export type TUncheckRoutineAction = {
	type: RoutinesActionTypes.uncheck;
	payload: Pick<TRoutine, 'id'>;
};

export type TChangeDateAction = {
	type: RoutinesActionTypes.changeDate;
	payload: TMoment;
};

export type TRoutineAction =
	| TInitRoutinesAction
	| TAddRoutineAction
	| TUpdateRoutineAction
	| TRemoveRoutineAction
	| TCheckRoutineAction
	| TUncheckRoutineAction
	| TChangeDateAction;


export interface IRoutinesState {
	routines: TRoutine[]
}

export type TRoutineData = {
	name: string;
	repeatType: RepeatTypes | null;
	period: number;
	weekDays: TWeekDay[];
	monthDays: TMonthDay[];
}