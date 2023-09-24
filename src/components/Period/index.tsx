import { useControlModal } from '@/hooks/useControlModal';
import { useLocalState } from '@/hooks/useLocalState';
import { FC, FormEventHandler } from 'react';
import { Modal } from '../Modal';

export type TPeriodProps = {
	value: number;
	onChange: (value: number) => void;
};

export const Period: FC<TPeriodProps> = ({ value, onChange }) => {
	const [localValue, setLocalValue] = useLocalState(value);
	const { openModal, closeModal, modalProps } = useControlModal();

	const handleDecrease = () => {
		setLocalValue(localValue - 1);
	};

	const handleIncrease = () => {
		setLocalValue(localValue + 1);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onChange(localValue);
		closeModal();
	};

	return (
		<div>
			<button type='button' onClick={openModal}>Повторять через {value} дней</button>

			<Modal {...modalProps}>
				<form onSubmit={handleSubmit}>
					<div>
						<button type='button' disabled={localValue <= 1} onClick={handleDecrease}>
							-
						</button>
						{localValue}
						<button type='button' onClick={handleIncrease}>
							+
						</button>
					</div>
					<div>
						<button type='button' onClick={closeModal}>
							Отменить
						</button>
						<button type='submit'>Подтвердить</button>
					</div>
				</form>
			</Modal>
		</div>
	);
};
