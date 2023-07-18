import React from "react";

import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import * as Md from "../md/full"

import Page from "../components/Page";

const Home: React.FC = () => {
    return <Page>
        <Dashboard dashboard={Md.Dashboards._1Overview}></Dashboard>
    </Page>;
};

export default Home;
