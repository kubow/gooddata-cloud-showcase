import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import * as Md from "./catalog.js";

export const CustomReScatter = () => {
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.NetSalesVsOrders),
    });

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result) return <div>Loading...</div>;
    
    const slices = result.data().slices().toArray();
    const data = [];
    // console.log(slices);
    for (let i = 1; i <= slices.length; i++) {
      console.log(`Row ${slices[i-1].sliceTitles()}: ${slices[i-1].rawData()}`);
      // console.log(slices[i-1])
      data.push({ x: slices[i-1].rawData()[0], y: slices[i-1].rawData()[1], z: slices[i-1].sliceTitles() });
    }

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="$" />
                <YAxis type="number" dataKey="y" name="weight" unit="$" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};



