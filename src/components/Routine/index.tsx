import { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { IAppState, useStoreDispatch, useStoreSelector } from '@/store/store';
import {
	checkRoutineAction,
	removeRoutineAction,
	uncheckRoutineAction,
} from '@/store/routines';
import { todayMoment } from '@/utils/date';
import { TRoutine } from '@/store/types';

export type TRoutineProps = {
	routine: TRoutine;
	onClick?: () => void
};

export const Routine: FC<TRoutineProps> = ({ routine, onClick }) => {
	const dispatch = useStoreDispatch();
	const { date } = useStoreSelector((state: IAppState) => state.date);

	const checked = routine.lastCheck === date;
	const disabled = date > todayMoment

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const input = e.target as HTMLInputElement;
		if (input.checked) {
			dispatch(checkRoutineAction(routine));
		} else {
			dispatch(uncheckRoutineAction(routine));
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
			<div onClick={onClick}>{routine.name}</div>
			<div>
				<button type='button' onClick={handleRemove}>
					&times;
				</button>
			</div>
		</div>
	);
};
