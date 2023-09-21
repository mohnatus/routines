export function getTime(date: Date = new Date()): TTime {
	return (
		date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()
	);
}
