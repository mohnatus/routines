import { MONTH_DAYS } from '@/constants/month';
import { FC, FormEventHandler, useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { useControlModal } from '@/hooks/useControlModal';
import { useLocalState } from '@/hooks/useLocalState';
import { toggleArrayElement } from '@/utils/array';

export type TMonthProps = {
	value: TMonthDay[];
	onChange: (value: TMonthDay[]) => void;
};

export const Month: FC<TMonthProps> = ({ value, onChange }) => {
	const [localValue, setLocalValue] = useLocalState(value, (value) => [
		...value,
	]);
	const { openModal, closeModal, modalProps } = useControlModal();

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
					? `Выбрано: ${value.join(', ')}`
					: 'Выберите дни'}
			</button>

			<Modal {...modalProps}>
				<form onSubmit={handleSubmit}>
					<div>
						{MONTH_DAYS.map((day) => {
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
