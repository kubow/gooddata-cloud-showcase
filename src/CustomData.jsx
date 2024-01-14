import React from "react";
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import * as Md from "./catalog.js";

export const RawTable = () => {
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.NetSalesVsOrders),
    });

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result) return <div>Loading...</div>;

    const slices = result.data().slices().toArray();

    return (
        <table style={{border:'1px solid'}}>
            <tbody>
                {slices.map((slice) => {
                    const title = slice.sliceTitles().join(" - ");
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
            </tbody>
        </table>
    );
};