import { TToastHideAction, ToastActionTypes } from './types';

export function hideToastAction(toastId: string): TToastHideAction {
	return {
		type: ToastActionTypes.hide,
		payload: toastId,
	};
}
