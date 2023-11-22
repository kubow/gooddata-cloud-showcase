import * as Md from "../md/full";
import { useInsightDataView } from "@gooddata/sdk-ui";
import { idRef } from "@gooddata/sdk-model";

//import Page from "../components/Page";

export const CustomViz = () => {
    const { result, error, status } = useInsightDataView({
        insight: idRef(Md.Insights.ActiveCustomersBreakdown),
    });

    if (error) {
        console.error(error);
        return <div>Error...</div>;
    }

    if (status !== "success" || !result) return <div>Loading...</div>;

    console.log(result.data().series().toArray());
    const slices = result.data().slices().toArray();
    console.log(slices);

    return (
        <table>
            <tbody>
                {slices.map((slice) => {
                    const title = slice.sliceTitles().join(" - ");
                    const value = slice
                        .dataPoints()
                        .map((dp) => dp.rawValue)
                        .join(", ");

                    return (
                        <tr key={title}>
                            <td>{title}</td>
                            <td>{value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
