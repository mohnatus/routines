import { Reducer } from 'react';
import { DateActionTypes, IDateState, TDateAction } from './types';
import { todayMoment } from '@/utils/date';

export const defaultDateState: IDateState = {
	date: todayMoment,
};

export const dateReducer: Reducer<IDateState, TDateAction> = (
	state = defaultDateState,
	action
) => {
	switch (action.type) {
		case DateActionTypes.prev:
		case DateActionTypes.next:
			return {
				...state,
				date: action.payload,
			};

		default:
			return state;
	}
};
