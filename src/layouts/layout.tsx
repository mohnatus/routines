import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import { Toast } from '@/components/Toast';
import { selectToastsList } from '@/store/toast';

import s from './style.module.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const toasts = useSelector(selectToastsList);
	return (
		<div>
			{children}

			{toasts.length &&
				createPortal(
					<div className={s.Toasts}>
						<div className={s.ToastsContainer}>
							{toasts.map((toast) => (
								<Toast key={toast.id} toast={toast} />
							))}
						</div>
					</div>,
					document.getElementById('toasts') as HTMLElement
				)}
		</div>
	);
};
