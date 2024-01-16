import React from "react"
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import * as Md from "./catalog.js";

import CustomHigh from "./CustomHigh.jsx";

const CustomHighchart = () => {
  const { result, error, status } = useInsightDataView({
    insight: idRef(Md.Insights.NetSalesVsOrders),
  });


  const slices = result?.data().slices().toArray();
  const data = [];
  
  for (let i = 1; i <= slices?.length || 0; i++) {
  //  console.log(`Row ${slices[i-1].sliceTitles()}: ${slices[i-1].rawData()}`);
    // console.log(slices[i-1])
    data.push({ x: slices[i-1].rawData()[0], y: slices[i-1].rawData()[1], z: slices[i-1].sliceTitles() });
  }

  if (error) {
      console.error(error);
      return <div>Error...</div>;
  }

  if (status !== "success" || !result || data.length == 0) return <div>Loading...</div>;

  return (
    <div>
      <CustomHigh data={data}>
      </CustomHigh>
    </div>
  )
}

export default CustomHighchart