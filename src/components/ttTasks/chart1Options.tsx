import type { Schema } from "../../../amplify/data/resource";



function chart1Options(ttTaskTimeBlocks: Array<Schema["TtTaskTimeBlock"]["type"]>) {
    const distinctTaskIds = [...new Set(ttTaskTimeBlocks.map(ttTaskTimeBlock => ttTaskTimeBlock.TtTaskId))];
    const taskTimes = distinctTaskIds.map(taskId => {
        const taskTime = ttTaskTimeBlocks
            .filter(ttTaskTimeBlock => ttTaskTimeBlock.TtTaskId === taskId)
            .reduce((acc, ttTaskTimeBlock) => {
                const startTime = new Date(ttTaskTimeBlock.StartTime ?? new Date()).getTime();
                const endTime = ttTaskTimeBlock.EndTime ? new Date(ttTaskTimeBlock.EndTime).getTime() : new Date().getTime();
                return acc + (endTime - startTime);
            }, 0);
        return taskTime;
    });

    
const chartOptions = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Time Spent on Tasks',
      align: 'left'
  },
  xAxis: {
      categories: distinctTaskIds,
      crosshair: true,
      accessibility: {
          description: 'TaskIds'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Time spent'
      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [
      {
          name: 'taskTime',
          data: taskTimes
      }
  ]
};

return chartOptions;
  }
export default chart1Options;  