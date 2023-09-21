import { openDB, IDBPDatabase } from 'idb';
import { RoutinesDB } from './types';
import { DB_NAME, DB_VERSION, STORE_ROUTINES } from './constants';

export function initDb(db: IDBPDatabase<RoutinesDB>) {
	const { objectStoreNames } = db;

	if (!objectStoreNames.contains(STORE_ROUTINES)) {
		db.createObjectStore(STORE_ROUTINES, {
			keyPath: 'id',
		});
	}
}

export async function getDb(): Promise<IDBPDatabase<RoutinesDB>> {
	const db = await openDB<RoutinesDB>(DB_NAME, DB_VERSION, {
		upgrade: (db) => {
			initDb(db);
		},
	});
	return db;
}
