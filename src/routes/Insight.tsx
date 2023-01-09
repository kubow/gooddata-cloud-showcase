import React from "react";

import { InsightView } from "@gooddata/sdk-ui-ext";
import * as Md from "../md/full"

import Page from "../components/Page";

const style = {height: 400};

const Insight: React.FC = () => {
    return <Page>
        <div style={style}>
            <InsightView insight={Md.Insights.RevenuePer$VsBudgetByCampaign} />
        </div>
           
    </Page>;
};

export default Insight;
