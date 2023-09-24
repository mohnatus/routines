export enum ToastActionTypes {
	show = 'toast/show',
	hide = 'toast/hide',
}

export type TToastShowAction = {
	type: ToastActionTypes.show;
	payload: TToast;
};

export type TToastHideAction = {
	type: ToastActionTypes.hide;
	payload: string;
};

export type TToastAction = TToastShowAction | TToastHideAction;

export type TToast = {
	id: string;
	text: string;
};

export type TToastData = {
  text: string
}

export interface IToastState {
	toasts: TToast[];
}
