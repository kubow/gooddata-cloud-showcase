// (C) 2019-2023 GoodData Corporation
import React from "react";
import { BackendProvider, WorkspaceProvider, HeaderPredicates } from "@gooddata/sdk-ui";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { attributeIdentifier } from "@gooddata/sdk-model";

import { backend } from "./backend.js";
import { RawTable } from "./CustomData.jsx";
import { CustomReScatter } from "./CustomRecharts.jsx";
//import { CustomD3Scatter } from "./CustomD3.jsx";
import CustomHighchart from "./CustomHighcharts.jsx";
import * as Md from "./catalog.js";
import img from "./assets/gooddata-logo.svg";

// Workspace ID is injected by WebPack based on the value in package.json
const workspaceId = WORKSPACE_ID;

// Define the drill handler function using function keyword
function onDrillHandler(event) {
    console.log("Drill event:", event);
    window.location.href = "https://www.google.com"; // Redirect to google.com on drill
}


export const App = () => {
    return (
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspaceId}>
                <div className="app">
                    <h1>Hello GoodWorld!</h1>
                    <p>
                        Edit <code>/src/App.jsx</code> to get started. Learn more about this
                        template in <code>README.md</code>.
                    </p>
                    <pre>
                        <code>
                            &lt;Dashboard dashboard=&#123;Md.Dashboards._1Overview&#125; /&gt;
                        </code>
                    </pre>
                    <figure>
                        <Dashboard 
                            dashboard={Md.Dashboards._1Overview} 
                            onStateChange={(event) => {
                                //console.log("with this event we can catch various dashboard details:");
                                //console.log(event);
                            }}
                            eventHandlers={[
                                {
                                  eval: () => true,
                                  handler: (event, dashboardDispatch, stateSelect) => {
                                    // list of events: https://github.com/gooddata/gooddata-ui-sdk/blob/da546a50cf6ef21f688fd61d60377e891d9627a9/libs/sdk-ui-dashboard/src/model/commands/base.ts#L13
                                    if (event.type === "GDC.DASH/EVT.DRILL.DRILL_TO_CUSTOM_URL.REQUESTED") {
                                        console.log("catching custom URL drill event");
                                        window.location.href = "https://www.google.com/maps";
                                    }
                                  },
                                },
                              ]}
                        />
                    </figure>
                    <p>
                        Here lies a single visual.
                    </p>
                    <pre>
                        <code>
                            &lt;InsightView insight=&#123;Md.Insights.CustomersByState&#125; /&gt;
                        </code>
                    </pre>
                    <figure>
                        <InsightView 
                            insight={Md.Insights.CustomersByState} 
                            showTitle
                            onDrill={onDrillHandler} // Assign the onDrillHandler function here
                            drillableItems={[
                                HeaderPredicates.identifierMatch(attributeIdentifier(Md.CustomerState)) // Replace with your drillable identifier
                            ]} 
                        />
                    </figure>
                    <p>
                        The same data just in raw format.
                    </p>
                    <RawTable />
                    <p>
                        And finally a custom visual using ReCharts:
                    </p>
                    {/* */ <CustomReScatter /> /**/}
                    <p>
                        Also a custom visual using D3:
                    </p>
                    {/* <CustomD3Scatter /> */}
                    <p>
                        Also a custom visual using HighCharts:
                    </p>
                    {/* <CustomHighchart /> */}
                    <footer>
                        <img src={img} alt="" />
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html"
                        >
                            GoodData.UI docs
                        </a>
                    </footer>
                </div>
            </WorkspaceProvider>
        </BackendProvider>
    );
};
