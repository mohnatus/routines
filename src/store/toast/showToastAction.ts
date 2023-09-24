import { nanoid } from 'nanoid';
import { TToastData, ToastActionTypes } from './types';
import { Dispatch } from 'redux';
import { hideToastAction } from './hideToastAction';

export function showToastAction(data: TToastData) {
	return (dispatch: Dispatch) => {
		const toast = {
			id: nanoid(),
			text: data.text,
		};

		dispatch({ type: ToastActionTypes.show, payload: toast });

		setTimeout(() => {
			dispatch(hideToastAction(toast.id));
		}, 3000);
	};
}
