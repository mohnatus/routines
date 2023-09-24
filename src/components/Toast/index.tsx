import { FC } from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { hideToastAction } from '@/store/toast';
import { TToast } from '@/store/toast/types';

export type TToastProps = {
	toast: TToast;
};

export const Toast: FC<TToastProps> = ({ toast }) => {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(hideToastAction(toast.id));
	};

	return (
		<div className={s.Root}>
			<button type='button' onClick={handleClose}></button>
			{toast.text}
		</div>
	);
};
