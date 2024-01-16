
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const CustomHigh = (data) => {
    const [chartOptions, setChartOptions] = useState({
        xAxis: {
          type: "scatter",
        },
        yAxis: {},
        series: [
          {
            data: data,
          },
        ],
      })
    
      return (
        <div>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      )
    
}

export default CustomHigh
