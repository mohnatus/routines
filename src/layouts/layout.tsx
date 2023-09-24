import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';

import { Toast } from '@/components/Toast';
import { Footer } from '@/components/Footer';
import { selectToastsList } from '@/store/toast';

import s from './style.module.css';
import { useStoreSelector } from '@/store/store';

export const Layout = () => {
	const toasts = useStoreSelector(selectToastsList);
	return (
		<div className={s.Root}>
			<div className={s.Main}>
				<div className={s.Container}>
					<Outlet />
				</div>
			</div>

			<div className={s.Footer}>
				<Footer />
			</div>

			{toasts.length > 0 &&
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
