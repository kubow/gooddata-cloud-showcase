import React from "react";
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import { styled } from '@mui/system';
import { TablePagination, TablePaginationClasses as classes} from "@mui/material";
import * as Md from "./catalog.js";

export const RawTable = () => {
    // MUIexample taken from https://mui.com/base-ui/react-table-pagination/
    console.log("pagination expample loading");


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);  // number of rows per page

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // load data from GoodData's semantic layer
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.CustomerLocation),
    });

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result) return <div>Loading...</div>;

    const slices = result.data().slices().toArray();

    //console.log(slices);
    function handleChangePage(MouseEvent, number) {
        setPage(newPage);
    }

    return (
        <table aria-label="custom pagination table">
            <thead>
            <tr>
                <th>column1</th>
                <th>column2</th>
            </tr>
            </thead>
            <tbody>

            {(rowsPerPage > 0
                ? slices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : slices
            ).map((slice) => {
                const title = slice.sliceTitles().join(" - ");
                console.log(slice.dataPoints());
                const value = slice
                    .dataPoints()
                    .map((dp) => dp.rawValue)
                    .join(", ");
                
                return (
                    <tr key={title}>
                        <td style={{border:'1px solid'}}>{title}</td>
                        <td style={{border:'1px solid'}}>{value}</td>
                    </tr>
                );
            })}

            {emptyRows > 0 && (
                <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} aria-hidden />
                </tr>
            )}
            
            </tbody>
            <tfoot>
            <td class="base-TablePagination-root">
                <div class="toolbar">
                    <p class="base-TablePagination-displayedRows">1–5 of 13</p>
                    <div class="base-TablePagination-actions">
                    <button 
                        disabled="" 
                        aria-label="Go to first page" 
                        title="Go to first page" 
                        onClick={handleChangePage}>
                        <span>|⇽</span>
                    </button>
                    <button
                        disabled=""
                        aria-label="Go to previous page"
                        title="Go to previous page"
                        onClick={handleChangePage}
                    >
                        <span>⇽</span>
                    </button>
                    <button aria-label="Go to next page" title="Go to next page">
                        <span>⇾</span>
                    </button>
                    <button aria-label="Go to last page" title="Go to last page">
                        <span>⇾|</span>
                    </button>
                    </div>
                </div>
                </td>

            </tfoot>
        </table>
    );
};
