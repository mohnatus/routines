import { Dispatch } from 'redux';
import { DateActionTypes, TDateNextAction } from './types';
import { IAppState } from '../store';
import { getDateMoment, getNextDate } from '@/utils/date';

export function dateNextAction() {
	return (dispatch: Dispatch<TDateNextAction>, getState: () => IAppState) => {
		const { date } = getState();
		const nextDate = getNextDate(date.date);

		dispatch({
			type: DateActionTypes.next,
			payload: getDateMoment(nextDate),
		});

		return true;
	};
}
