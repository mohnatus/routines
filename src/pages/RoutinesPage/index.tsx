import { IAppState, useStoreDispatch, useStoreSelector } from '@/store/store';
import { dateNextAction, datePrevAction } from '@/store/date';
import { RoutinesList } from '@/components/RoutinesList';
import { getDateString } from '@/utils/date';
import { Link } from 'react-router-dom';
import { selectDate } from '@/store/date/selectors';
import { selectDateRoutinesList } from '@/store/routines';

export const RoutinesPage = () => {
	const dispatch = useStoreDispatch();

	const date = useStoreSelector(selectDate);
	const dateRoutines = useStoreSelector((state: IAppState) => selectDateRoutinesList(state, date));

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

			{dateRoutines.length === 0 ? (
				<div>Пока рутин нет</div>
			) : (
				<RoutinesList routines={dateRoutines} />
			)}
		</div>
	);
};
