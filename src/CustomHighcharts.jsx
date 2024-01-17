import React from "react";
import { idRef } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";
import * as Md from "./catalog.js";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);
import HC_exporting from "highcharts/modules/exporting";
// init the module
HC_exporting(Highcharts);

const CustomHighchart = () => {
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.RevenuePer$VsBudgetByCampaign),
    });

    const slices = result?.data().slices().toArray();
    const data = [];

    for (let i = 1; i <= slices?.length || 0; i++) {
        console.log(`Row ${slices[i-1].sliceTitles()}: ${slices[i-1].rawData()}`);
        // console.log(slices[i-1])
        data.push({
            x: slices[i - 1].rawData()[0],
            y: slices[i - 1].rawData()[1],
            name: slices[i - 1].sliceTitles()[0],
        });
    }

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result || data.length == 0) return <div>Loading...</div>;

    const chartOptions = {
        chart: {
            type: "bubble",
            plotBorderWidth: 1,
            zoomType: "xy",
        },

        legend: {
            enabled: false,
        },

        title: {
            text: "Net Sales vs Orders",
        },

        subtitle: {
            text: 'Source: <a href="https://www.gooddata.com/resources/gooddata-technical-architecture-series-what-semantic-layer/">GoodData semantics layer</a>',
        },

        accessibility: {
            point: {
                valueDescriptionFormat:
                    "{index}. {point.name}, Net Sales: {point.x} $, Net Orders: {point.y} $,",
            },
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: "Net Sales",
            },
            labels: {
                format: "{value} $",
            },
            plotLines: [
                {
                    color: "black",
                    dashStyle: "dot",
                    width: 2,
                    value: 1000,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: "italic",
                        },
                        text: "Lowest Sales",
                    },
                    zIndex: 3,
                },
            ],
            accessibility: {
                rangeDescription: "Range: in thousands $.",
            },
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: "Orders",
            },
            labels: {
                format: "{value} $",
            },
            maxPadding: 0.2,
            plotLines: [
                {
                    color: "black",
                    dashStyle: "dot",
                    width: 2,
                    value: 100,
                    label: {
                        align: "right",
                        style: {
                            fontStyle: "italic",
                        },
                        text: "Lowest Orders",
                        x: -10,
                    },
                    zIndex: 3,
                },
            ],
            accessibility: {
                rangeDescription: "Range: in thousands $.",
            },
        },

        tooltip: {
            useHTML: true,
            headerFormat: "<table>",
            pointFormat:
                '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                "<tr><th>Net Sales:</th><td>{point.x} $</td></tr>" +
                "<tr><th>Orders:</th><td>{point.y} $</td></tr>" ,
            footerFormat: "</table>",
            followPointer: true,
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: "{point.name}",
                },
            },
        },

        series: [
            {
                data: data,
                colorByPoint: true,
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default CustomHighchart;