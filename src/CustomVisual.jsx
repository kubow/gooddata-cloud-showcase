import React from "react";
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react';
import * as Md from "./catalog.js";

export const Scatter = () => {
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.NetSalesVsOrders),
    });

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result) return <div>Loading...</div>;

    const slices = result.data().slices().toArray();

    console.log(slices);

    const options = {
        chart: {
          type: 'scatter',
        },
        title: {
          text: 'Scatter Plot with Custom Data',
        },
        xAxis: {
          title: {
            text: 'X Axis',
          },
        },
        yAxis: {
          title: {
            text: 'Y Axis',
          },
        },
        series: data,
      };

    return (
        <div>
            <HighchartsReact chart={Highcharts.chart('scatter-plot', options)} />
        </div>
    );
};