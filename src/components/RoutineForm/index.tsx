import { FC, FormEventHandler, useEffect, useState } from 'react';
import { useStoreDispatch } from '@/store/store';
import { addRoutineAction, updateRoutineAction } from '@/store/routines';
import { RepeatTypes, TRoutine } from '@/store/types';
import { Week } from '../Week';
import { TRoutineData } from '@/store/routines/types';
import { Month } from '../Month';

export type TRoutineFormProps = {
	routine?: TRoutine | null;
	onSubmit: () => void;
};

export const RoutineForm: FC<TRoutineFormProps> = ({ routine, onSubmit }) => {
	const dispatch = useStoreDispatch();

	const [name, setName] = useState('');
	const [repeatType, setRepeatType] = useState<RepeatTypes | null>(null);
	const [period, setPeriod] = useState(1);
	const [weekDays, setWeekDays] = useState<TWeekDay[]>([]);
	const [monthDays, setMonthDays] = useState<TMonthDay[]>([]);

	const reset = () => {
		setName('');
		setRepeatType(null);
		setPeriod(1);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (!name) return;

		const routineData: TRoutineData = {
			name,
			repeatType,
			period,
			weekDays,
			monthDays,
		};

		reset();

		dispatch(
			routine
				? updateRoutineAction(routine, routineData)
				: addRoutineAction(routineData)
		);

		if (onSubmit) onSubmit();
	};

	useEffect(() => {
		if (routine) {
			setName(routine.name);
			setRepeatType(routine.repeat?.type || null);
			if (routine.repeat?.type === RepeatTypes.period) {
				setPeriod(routine.repeat.value);
			} else if (routine.repeat?.type === RepeatTypes.weekDay) {
				setWeekDays(routine.repeat.value);
			} else if (routine.repeat?.type === RepeatTypes.monthDay) {
				setMonthDays(routine.repeat.value);
			}
		} else {
			setName('');
			setRepeatType(null);
			setPeriod(1);
			setWeekDays([]);
			setMonthDays([]);
		}
	}, [routine]);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					<input
						type='text'
						value={name}
						placeholder='Введите текст рутины'
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
			</div>

			<div>
				<div>Тип повтора</div>
				<div>
					<button type='button' onClick={() => setRepeatType(null)}>
						Без повтора
					</button>
					<button
						type='button'
						onClick={() => setRepeatType(RepeatTypes.period)}
					>
						Через n дней
					</button>
					<button
						type='button'
						onClick={() => setRepeatType(RepeatTypes.weekDay)}
					>
						День недели
					</button>
					<button
						type='button'
						onClick={() => setRepeatType(RepeatTypes.monthDay)}
					>
						День месяца
					</button>
				</div>

				{repeatType === RepeatTypes.period && (
					<div>
						Повторять через n дней
						<input
							type='number'
							value={period}
							onChange={(e) => setPeriod(Number(e.target.value))}
						/>
					</div>
				)}

				{repeatType === RepeatTypes.weekDay && (
					<div>
						Повторять по дням недели
						<Week value={weekDays} onChange={setWeekDays} />
					</div>
				)}

				{repeatType === RepeatTypes.monthDay && (
					<div>
						Повторять по дням месяца
						<Month value={monthDays} onChange={setMonthDays} />
					</div>
				)}
			</div>

			<div>
				<button type='submit'>Сохранить</button>
			</div>
		</form>
	);
};
