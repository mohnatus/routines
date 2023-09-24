import { IAppState } from '../store';

export function selectToastsList(state: IAppState) {
	return state.toast.toasts;
}
