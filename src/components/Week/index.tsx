import { WEEK_DAYS } from '@/constants/week';
import { FC } from 'react';

export type TWeekProps = {
	value: TWeekDay[];
	onChange: (value: TWeekDay[]) => void;
};

export const Week: FC<TWeekProps> = ({ value, onChange }) => {
	const handleDayToggle = (dayId: TWeekDay, isChecked: boolean) => {
		const newValue = value.filter((id) => id !== dayId);
		if (isChecked) {
			newValue.push(dayId);
		}
		onChange(newValue);
	};

	return (
		<div>
			{WEEK_DAYS.map((day) => {
				return (
					<div key={day.id}>
						<input
							type='checkbox'
							checked={value.includes(day.id)}
							onChange={(e) =>
								handleDayToggle(day.id, e.target.checked)
							}
						/>
						<span>{day.label}</span>
					</div>
				);
			})}
		</div>
	);
};
