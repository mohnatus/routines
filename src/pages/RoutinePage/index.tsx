import { RoutineForm } from '@/components/RoutineForm';
import { selectRoutine } from '@/store/routines';
import { IAppState } from '@/store/store';
import { TRoutine } from '@/store/types';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const RoutinePage = () => {
	const navigate = useNavigate();
	const { routineId } = useParams();

	const activeRoutine = useSelector((state: IAppState) =>
		selectRoutine(state, routineId)
	);

	const handleSubmit = (routine: TRoutine) => {
		navigate(`/routine/${routine.id}`);
	};

	return (
		<div>
			<RoutineForm routine={activeRoutine} onSubmit={handleSubmit} />
		</div>
	);
};
