// (C) 2019-2023 GoodData Corporation
import React from "react";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";

import { backend } from "./backend.js";
import { RawTable } from "./CustomData.jsx";
import { Scatter } from "./CustomVisual.jsx";
import * as Md from "./catalog.js";
import img from "./assets/gooddata-logo.svg";

// Workspace ID is injected by WebPack based on the value in package.json
const workspaceId = WORKSPACE_ID;

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
                            &lt;Dashboard dashboard=&#123;Md.Dashboards._2Sales&#125; /&gt;
                        </code>
                    </pre>
                    <figure>
                        <Dashboard dashboard={Md.Dashboards._5USADetails} />
                    </figure>
                    <p>
                        Here lies a single visual.
                    </p>
                    <pre>
                        <code>
                            &lt;InsightView insight=&#123;Md.Insights.NetSalesVsOrders&#125; /&gt;
                        </code>
                    </pre>
                    <figure>
                        <InsightView insight={Md.Insights.NetSalesVsOrders} showTitle />
                    </figure>
                    <p>
                        The same data just in raw format.
                    </p>
                    <RawTable />
                    <p>
                        And finally a custom visual:
                    </p>
                    <Scatter />
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
