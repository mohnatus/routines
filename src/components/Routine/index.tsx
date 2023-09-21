import { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { IAppState, useStoreDispatch, useStoreSelector } from '@/store/store';
import {
	checkRoutineAction,
	removeRoutineAction,
	resetRoutineAction,
} from '@/store/routines';
import { todayMoment } from '@/utils/date';

export type TRoutineProps = {
	routine: TRoutine;
};

export const Routine: FC<TRoutineProps> = ({ routine }) => {
	const dispatch = useStoreDispatch();
	const { date } = useStoreSelector((state: IAppState) => state.date);

	const checked = routine.lastCheck === date;
	const disabled = date > todayMoment

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const input = e.target as HTMLInputElement;
		if (input.checked) {
			dispatch(checkRoutineAction(routine));
		} else {
			dispatch(resetRoutineAction(routine));
		}
	};

	const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(removeRoutineAction(routine));
	};

	return (
		<div>
			<div>
				<input
					type='checkbox'
					checked={!!checked}
					disabled={disabled}
					onChange={handleChange}
				/>
			</div>
			<div>{routine.name}</div>
			<div>
				<button type='button' onClick={handleRemove}>
					&times;
				</button>
			</div>
		</div>
	);
};
