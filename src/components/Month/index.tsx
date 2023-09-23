import { MONTH_DAYS } from '@/constants/month';
import { FC } from 'react';

export type TMonthProps = {
	value: TMonthDay[];
	onChange: (value: TMonthDay[]) => void;
};

export const Month: FC<TMonthProps> = ({ value, onChange }) => {
	const handleDayToggle = (dayId: TWeekDay, isChecked: boolean) => {
		const newValue = value.filter((id) => id !== dayId);
		if (isChecked) {
			newValue.push(dayId);
		}
		onChange(newValue);
	};

	console.log({ MONTH_DAYS})

	return (
		<div>
			{MONTH_DAYS.map((day) => {
				return (
					<div key={day.id}>
						<input
							type='checkbox'
							checked={value.includes(day.id)}
							onChange={(e) => handleDayToggle(day.id, e.target.checked)}
						/>
						<span>{day.label}</span>
					</div>
				);
			})}
		</div>
	);
};
