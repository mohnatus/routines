type TMatcherFn<T> = (el1: T, el2: T) => boolean;

const defaultMatcher = <T>(el1: T, el2: T) => el1 === el2;

export function toggleArrayElement<T>(
	array: Array<T>,
	element: T,
	isSelected: boolean,
	matcherFn: TMatcherFn<T> = defaultMatcher
) {
	const newValue = array.filter((arrayEl) => !matcherFn(arrayEl, element));
	if (isSelected) {
		newValue.push(element);
	}

	return newValue;
}
