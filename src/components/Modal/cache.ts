const cache: Record<string, boolean> = {};

export function addModal(id: string) {
	cache[id] = true;

	document.body.setAttribute('data-modal', 'true');
}

export function removeModal(id: string) {
	delete cache[id];

	if (Object.keys(cache).length === 0) {
		document.body.removeAttribute('data-modal');
	}
}
