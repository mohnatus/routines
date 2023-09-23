import { FC } from 'react';
import { Routine } from '../Routine';
import { TRoutine } from '@/store/types';

export type TRoutinesListProps = {
	routines: TRoutine[];
	onRoutineClick?: (routine: TRoutine) => void
};

export const RoutinesList: FC<TRoutinesListProps> = ({ routines, onRoutineClick }) => {
	const handleRoutineClick = (routine: TRoutine) => {
		if (onRoutineClick) onRoutineClick(routine)
	}

	return (
		<div>
			{routines.map((routine) => (
				<Routine key={routine.id} routine={routine} onClick={() => handleRoutineClick(routine)}></Routine>
			))}
		</div>
	);
};
