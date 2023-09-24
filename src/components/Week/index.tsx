import { MONTH_DAYS } from '@/constants/month';
import { WEEK_DAYS } from '@/constants/week';
import { useControlModal } from '@/hooks/useControlModal';
import { useLocalState } from '@/hooks/useLocalState';
import { toggleArrayElement } from '@/utils/array';
import { FC, FormEventHandler } from 'react';
import { Modal } from '../Modal';

export type TWeekProps = {
	value: TWeekDay[];
	onChange: (value: TWeekDay[]) => void;
};

export const Week: FC<TWeekProps> = ({ value, onChange }) => {
	const [localValue, setLocalValue] = useLocalState(value, (value) => [
		...value,
	]);
	const { openModal, closeModal, modalProps } = useControlModal();

	const selectedDays = WEEK_DAYS.filter((day) => value.includes(day.id)).map(
		(day) => day.label
	);

	const handleDayToggle = (dayId: TWeekDay, isChecked: boolean) => {
		const newValue = toggleArrayElement(localValue, dayId, isChecked);
		setLocalValue(newValue);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const newValue = [...localValue];
		newValue.sort((a, b) => a - b);
		onChange(newValue);
		closeModal();
	};

	return (
		<div>
			<button type='button' onClick={openModal}>
				{value.length > 0
					? `Выбрано: ${selectedDays.join(', ')}`
					: 'Выберите дни'}
			</button>

			<Modal {...modalProps}>
				<form onSubmit={handleSubmit}>
					<div>
						{WEEK_DAYS.map((day) => {
							return (
								<div key={day.id}>
									<input
										type='checkbox'
										checked={localValue.includes(day.id)}
										onChange={(e) =>
											handleDayToggle(
												day.id,
												e.target.checked
											)
										}
									/>
									<span>{day.label}</span>
								</div>
							);
						})}
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
