/* eslint-disable react/prop-types */
import "react-dropdown/style.css";

import React, { useEffect, useMemo, useState } from "react";

import ExternalDropDown from "../../libraries/externalDropdown";
import Pagination from "./pagination/pagination";
import Search from "./search/search";
import TableHeader from "./tableHeader/tableHeader";

export default function CustomTable({
    data,
    fieldsSetup,
    paginationOptions,
    defaultPaginationOption,
}) {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(defaultPaginationOption);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({
        field: "startDateString",
        order: "asc",
        type: "date",
    });
    const firstItemIndexDisplayed = (currentPage - 1) * itemsPerPage;
    const lastItemIndexDisplayed = currentPage * itemsPerPage;

    function handlePaginationChange(e) {
        setItemsPerPage(e.value);
        setCurrentPage(1);
    }

    useEffect(() => {
        setItems(data);
    }, []);

    const tableData = useMemo(() => {
        let computedTableData = Object.assign([], items);

        if (search) {
            computedTableData = computedTableData.filter((item) =>
                Object.keys(item).some((key) =>
                    item[key].toLowerCase().includes(search.toLowerCase())
                )
            );
        }

        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedTableData = computedTableData.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        setTotalItems(computedTableData.length);

        let slicedData = computedTableData.slice(
            firstItemIndexDisplayed,
            lastItemIndexDisplayed
        );

        return slicedData;
    }, [items, currentPage, itemsPerPage, search, sorting]);

    return (
        <>
            <div className="table-options-area">
                <div className="pagination-settings-container">
                    Show
                    <ExternalDropDown
                        onChange={handlePaginationChange}
                        name="pagination-settings"
                        id="pagination-settings"
                        options={paginationOptions}
                        value={defaultPaginationOption}
                    />
                    Results
                </div>
                <div className="search-container">
                    <label htmlFor="search">Search</label>
                    <Search
                        onSearch={(value) => {
                            setSearch(value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
            </div>
            <table className="items-table">
                <TableHeader
                    headers={fieldsSetup}
                    onSorting={(field, order) => {
                        setSorting({ field, order });
                        setCurrentPage(1);
                    }}
                />
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={"row" + index}>
                            {fieldsSetup.map((field) => (
                                <td key={item[field.fieldDisplay] + index}>
                                    {item[field.fieldDisplay]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Pagination
                    total={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                    firstItemIndex={firstItemIndexDisplayed + 1}
                    lastItemIndex={firstItemIndexDisplayed + tableData.length}
                />
            </div>
        </>
    );
}
