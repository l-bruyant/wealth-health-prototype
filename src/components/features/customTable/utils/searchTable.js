export default function searchTable(table, input) {
	let data = table
	data = data.filter((item) =>
		Object.keys(item).some((key) =>
			item[key].toLowerCase().includes(input.toLowerCase())
		)
	)
	return data
}
