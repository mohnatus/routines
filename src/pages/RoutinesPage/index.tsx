import { IAppState, useStoreDispatch, useStoreSelector } from '@/store/store';
import { dateNextAction, datePrevAction } from '@/store/date';
import { RoutinesList } from '@/components/RoutinesList';
import { getNextMoment } from '@/utils/routines';
import { getDateString } from '@/utils/date';
import { TRoutine } from '@/store/types';
import { Link } from 'react-router-dom';

export const RoutinesPage = () => {
	const dispatch = useStoreDispatch();
	const { routines } = useStoreSelector((state: IAppState) => state.routines);
	const { date } = useStoreSelector((state: IAppState) => state.date);

	const dateRoutines = routines.filter((routine) => {
		if (!routine.active) return false;
		if (routine.createdAt > date) return false;
		if (routine.lastCheck === date) return true;

		const nextMoment = getNextMoment(routine);
		if (nextMoment === date) return true;

		return false;
	});

	const handlePrev = () => {
		dispatch(datePrevAction());
	};

	const handleNext = () => {
		dispatch(dateNextAction());
	};

	return (
		<div>
			<button type='button' onClick={handlePrev}>
				Prev
			</button>
			{`${getDateString(date)}`}
			<button type='button' onClick={handleNext}>
				Next
			</button>

			<br />

			<Link to='/routine/new'>Create routine</Link>

			<RoutinesList routines={dateRoutines} />
		</div>
	);
};
