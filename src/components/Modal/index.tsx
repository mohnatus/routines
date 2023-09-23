import { FC, PropsWithChildren, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';

import s from './style.module.css';
import { addModal, removeModal } from './cache';

export interface TModalProps extends PropsWithChildren {
	isOpen: boolean;
	onClose: () => void;
}

export const Modal: FC<TModalProps> = ({ isOpen, onClose, children }) => {
  const id = useId();

	useEffect(() => {
    if (isOpen) addModal(id)
    else removeModal(id)
  }, [id, isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<div className={s.Root}>
			<div className={s.Mask} onClick={onClose}></div>
			<div className={s.Frame}>
				<div className={s.CloseContainer}>
					<button type='button' onClick={onClose}>
						&times;
					</button>
				</div>
				<div className={s.Content}>{children}</div>
			</div>
		</div>,
		document.getElementById('modals') as HTMLElement
	);
};
