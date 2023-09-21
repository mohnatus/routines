import { getDb } from './db';
import { clearRoutinesTransaction, getRoutinesTransaction } from './routines';
import { RoutinesDBData } from './types';

export async function readDBData(): Promise<RoutinesDBData> {
	const db = await getDb();

	const routines = await getRoutinesTransaction(db);

	return { routines };
}

export async function clearDBData() {
	const db = await getDb();
	await clearRoutinesTransaction(db);
}
