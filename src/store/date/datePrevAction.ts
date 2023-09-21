import { Dispatch } from 'redux';
import { DateActionTypes, TDatePrevAction } from './types';
import { IAppState } from '../store';
import { getDateMoment, getPrevDate } from '@/utils/date';

export function datePrevAction() {
	return (dispatch: Dispatch<TDatePrevAction>, getState: () => IAppState) => {
		const { date } = getState();
		const prevDate = getPrevDate(date.date);

		dispatch({
			type: DateActionTypes.prev,
			payload: getDateMoment(prevDate),
		});
	};
}
