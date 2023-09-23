import { IAppState, useStoreDispatch, useStoreSelector } from '@/store/store';
import { dateNextAction, datePrevAction } from '@/store/date';
import { RoutineForm } from '@/components/RoutineForm';
import { RoutinesList } from '@/components/RoutinesList';
import { getNextMoment } from '@/utils/routines';
import { getDateString } from '@/utils/date';
import { Modal } from '@/components/Modal';
import { useState } from 'react';
import { TRoutine } from '@/store/types';

export const RoutinesPage = () => {
	const dispatch = useStoreDispatch();
	const { routines } = useStoreSelector((state: IAppState) => state.routines);
	const { date } = useStoreSelector((state: IAppState) => state.date);
	const [activeRoutine, setActiveRoutine] = useState<TRoutine | null>(null)
	const [isRoutineModalOpen, setIsRoutineModalOpen ] = useState(false)

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

	const openRoutineModal = (routine: TRoutine | null) => {
		setActiveRoutine(routine)
		setIsRoutineModalOpen(true)
	}

	const closeRoutineModal = () => {
		setIsRoutineModalOpen(false)
		setActiveRoutine(null)
	}

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

			<button type="button" onClick={() => openRoutineModal(null)}>Добавить рутину</button>

			<RoutinesList routines={dateRoutines} onRoutineClick={openRoutineModal} />

			<Modal isOpen={isRoutineModalOpen} onClose={closeRoutineModal}>
				<RoutineForm routine={activeRoutine} onSubmit={closeRoutineModal} />
			</Modal>
		</div>
	);
};
