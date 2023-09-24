import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type TCopyFn<T> = (value: T) => T
type TUseLocalState<T> = [T, Dispatch<SetStateAction<T>>]

const defaultCopy = <T>(value: T) => value

export function useLocalState<T>(value: T, copy: TCopyFn<T> = defaultCopy): TUseLocalState<T> {
	const [localValue, setLocalValue] = useState<T>(copy(value));

	useEffect(() => {
		if (JSON.stringify(value) !== JSON.stringify(localValue)) {
			setLocalValue(copy(value));
		}
		// eslint-disable-next-line
	}, [value]);


  return [localValue, setLocalValue]
}
