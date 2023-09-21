import { FC, FormEventHandler, useEffect, useState } from 'react';
import { useStoreDispatch } from '@/store/store';
import { addRoutineAction } from '@/store/routines';

export type TRoutineFormProps = {
	routine?: TRoutine;
};

export const RoutineForm: FC<TRoutineFormProps> = ({ routine }) => {
	const dispatch = useStoreDispatch();

	const [name, setName] = useState('');

	const reset = () => {
		setName('');
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (!name) return;

		const routineData = {
			name,
		};

		reset();

		dispatch(addRoutineAction(routineData));
	};

	useEffect(() => {
		if (routine) {
			setName(routine.name);
		} else {
			setName('');
		}
	}, [routine]);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
			</div>

			<div>
				<button type='submit'>Сохранить</button>
			</div>
		</form>
	);
};
