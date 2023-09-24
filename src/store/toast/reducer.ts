import { Reducer } from 'react';

import { IToastState, TToastAction, ToastActionTypes } from './types';

export const defaultToastState: IToastState = {
	toasts: [],
};

export const toastReducer: Reducer<IToastState, TToastAction> = (
	state = defaultToastState,
	action
) => {
	switch (action.type) {
		case ToastActionTypes.show:
			return {
				...state,
				toasts: [...state.toasts, action.payload],
			};
		case ToastActionTypes.hide:
			return {
				...state,
				toasts: state.toasts.filter(
					(toast) => toast.id !== action.payload
				),
			};

		default:
			return state;
	}
};
