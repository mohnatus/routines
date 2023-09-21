import { IDBPDatabase } from 'idb';
import { STORE_ROUTINES } from './constants';
import { getDb } from './db';
import { RoutinesDB } from './types';

export async function getRoutinesTransaction(db: IDBPDatabase<RoutinesDB>) {
	const transaction = db.transaction(STORE_ROUTINES, 'readonly');
	const store = transaction.objectStore(STORE_ROUTINES);
	const list = (await store.getAll()) || [];
	await transaction.done;
	list.sort((a, b) => {
		return a.createdAt - b.createdAt;
	});
	return list;
}

export async function clearRoutinesTransaction(db: IDBPDatabase<RoutinesDB>) {
	const transaction = db.transaction(STORE_ROUTINES, 'readwrite');
	const store = transaction.objectStore(STORE_ROUTINES);
	await store.clear();
}

export async function saveRoutineTransaction(
	db: IDBPDatabase<RoutinesDB>,
	routine: TRoutine
) {
	const transaction = db.transaction(STORE_ROUTINES, 'readwrite');
	const store = transaction.objectStore(STORE_ROUTINES);
	await store.put(routine);
	await transaction.done;
}

export async function deleteRoutineTransaction(
	db: IDBPDatabase<RoutinesDB>,
	routine: TRoutine
) {
	const transaction = db.transaction(STORE_ROUTINES, 'readwrite');
	const store = transaction.objectStore(STORE_ROUTINES);
	await store.delete(routine.id);
	await transaction.done;
}

export async function createRoutine(routine: TRoutine) {
	const db = await getDb();
	await saveRoutineTransaction(db, routine).then(res => {
			console.log('create routine', res, routine)

	});
}

export async function updateRoutine(routine: TRoutine) {
	const db = await getDb();
	await saveRoutineTransaction(db, routine);
}

export async function deleteRoutine(routine: TRoutine) {
	const db = await getDb();
	await deleteRoutineTransaction(db, routine);
}