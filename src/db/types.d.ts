import { DBSchema } from 'idb';
import { STORE_ROUTINES } from './constants';
import { TRoutine } from '../store/types';

export interface RoutinesDB extends DBSchema {
	[STORE_ROUTINES]: { key: string; value: TRoutine };
}

export type StoreNames = typeof STORE_ROUTINES

export type RoutinesDBData = {
  routines: TRoutine[]
}