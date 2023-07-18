import React from "react";

import { Headline } from "@gooddata/sdk-ui-charts";
import * as Md from "../md/full"

import Page from "../components/Page";


const style = {height: 400};

const Insight: React.FC = () => {
    return <Page>
        <div style={style}>
            <p>This is an average rating of all the products</p>
            <Headline primaryMeasure={Md.Rating.Avg} />
        </div>
           
    </Page>;
};

export default Insight;
