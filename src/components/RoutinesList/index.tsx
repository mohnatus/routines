import { FC } from 'react';
import { Routine } from '../Routine';

export type TRoutinesListProps = {
	routines: TRoutine[];
};

export const RoutinesList: FC<TRoutinesListProps> = ({ routines }) => {
	return (
		<div>
			{routines.map((routine) => (
				<Routine key={routine.id} routine={routine}></Routine>
			))}
		</div>
	);
};
