export default function sortTable(table, sortOrder, sortField) {
    let data = table;
    const reversed = sortOrder === "asc" ? 1 : -1;
    data = data.sort(
        (a, b) => reversed * a[sortField].localeCompare(b[sortField])
    );
    return data;
}
