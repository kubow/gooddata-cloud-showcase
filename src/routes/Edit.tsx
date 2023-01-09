import React from "react";

import { IAttribute, idRef, IMeasure, newAttribute, newMeasure } from "@gooddata/sdk-model";
import { ComboChart, IChartConfig } from "@gooddata/sdk-ui-charts";

//import * as Md from "../md/full"

import Page from "../components/Page";


const primaryMeasures: IMeasure[] = [
    newMeasure(idRef("of_active_customers", "measure"), m => m.localId("m_of_active_customers").title("# of Active Customers"))
];
const secondaryMeasures: IMeasure[] = [
    newMeasure(idRef("revenue_per_customer", "measure"), m => m.localId("m_revenue_per_customer").title("Revenue per Customer"))
];
const viewBy: IAttribute[] = [
    newAttribute(idRef("date.month", "displayForm"), a => a.localId("a_date.month"))
];
const config: IChartConfig = {
    dualAxis: true,
    legend: {position: "bottom"},
    primaryChartType: "column",
    secondaryChartType: "line",
    secondary_yaxis: {measures: ["m_revenue_per_customer"]},
    colorPalette: [
        {guid: "01", fill: {r: 206, g: 132, b: 209}},
        {guid: "02", fill: {r: 49, g: 85, b: 229}},
        {guid: "03", fill: {r: 63, g: 52, b: 118}},
        {guid: "04", fill: {r: 192, g: 228, b: 179}},
        {guid: "05", fill: {r: 48, g: 31, b: 53}},
        {guid: "06", fill: {r: 122, g: 163, b: 188}},
        {guid: "07", fill: {r: 251, g: 180, b: 245}},
        {guid: "08", fill: {r: 164, g: 231, b: 225}}
    ],
    separators: {thousand: ",", decimal: "."},
    enableChartSorting: true,
    enableSeparateTotalLabels: true,
    enableJoinedAttributeAxisName: true,
    dataPoints: {visible: "auto"}
};
const style = {height: 400};


const Edit: React.FC = () => {
    return <Page>
        <div style={style}>
            <ComboChart
                primaryMeasures={primaryMeasures}
                secondaryMeasures={secondaryMeasures}
                viewBy={viewBy}
                config={config}
            />
        </div>
    </Page>;
};

export default Edit;

