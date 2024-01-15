import React, { useMemo } from "react";
const { useState, useEffect, useCallback } = React;

import * as d3 from "d3";
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import * as Md from "./catalog.js";

import { Axis } from "d3-axis-for-react";

export const CustomD3Scatter = () => {
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.NetSalesVsOrders),
    });

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result) return <div>Loading...</div>;
    

    const titleLabel = "Doping in Professional Bicycle Racing";
    const subtitleLabel = "35 Fastest times up Alpe d'Huez";

    const width = 960;
    const height = 500;
    const margin = { top: 50, right: 20, bottom: 30, left: 110 };
    

    const slices = result.data().series().toArray();
    const data = [];
    // console.log(slices);
    for (let i = 1; i <= slices.length; i++) {
      console.log(`Row ${slices[i-1].sliceTitles()}: ${slices[i-1].rawData()}`);
      // console.log(slices[i-1])
      data.push({ x: slices[i-1].rawData()[0], y: slices[i-1].rawData()[1], z: slices[i-1].sliceTitles() });
    }

    const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, width]);

    const yScale = useMemo(
      () =>
        d3
          .scaleLinear()
          .domain([0, 1])
          .range([height, 0]),
      [height]
    );

    

    return (
        <div>
            <g transform={`translate(${x}, ${y})`}>
              {data.map(d => (
                <circle cx={xScale(d[0])} cy={yScale(d[1])} r={3} />
              ))}
              <Axis x={0} y={height} scale={xScale} />
              <Axis x={0} y={0} scale={yScale} type={"Left"} />
            </g>
        </div>
    );
};
