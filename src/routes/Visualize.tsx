import React from "react";

import * as Md from "../md/full"

import Page from "../components/Page";


const style = {height: 400};


const Insight: React.FC = () => {
    return <Page>
        <div style={style}>
            <p>Variable overview</p>
            <p>{Md.NetOrders.measure.localIdentifier} : </p>
            <p>{Md.ActiveCustomers.measure.localIdentifier} : </p>
            <p>{Md.Returns.measure.definition.measureDefinition.computeRatio} : </p>
        </div>
           
    </Page>;
};

export default Insight;
