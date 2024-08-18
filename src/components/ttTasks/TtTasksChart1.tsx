import { useRef } from "react";
import type { Schema } from "../../../amplify/data/resource";
import '@aws-amplify/ui-react/styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import chart1Options from "./chart1Options.tsx";


function TtTasksChart1({ ttTaskTimeBlocks }: { ttTaskTimeBlocks: Array<Schema["TtTaskTimeBlock"]["type"]> }) {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const chartOptions = chart1Options(ttTaskTimeBlocks);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            ref={chartComponentRef}
        />
    )
}

export default TtTasksChart1;

