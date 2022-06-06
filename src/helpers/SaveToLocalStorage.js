export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
	const value = localStorage.getItem(key);
	return JSON.parse(value);
}

export function remove(key) {
	localStorage.removeItem(key);
}
