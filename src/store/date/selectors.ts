import { IAppState } from '../store';

export function selectDate(state: IAppState) {
	return state.date.date;
}
