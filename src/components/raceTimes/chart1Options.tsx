import type { Schema } from "../../../amplify/data/resource";


function formatYAxisLabel(value: number) {
  const mins = Math.floor(value / 60);
  const secs = value % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function chart1Options(raceTimes: Array<Schema["RaceTime"]["type"]>) {
  const chartData = raceTimes.map(raceTime => {
    const raceDate = raceTime.RaceDate ? new Date(raceTime.RaceDate.toString()).getTime() : null;
    const yAxisValues = raceTime.RaceMins ? raceTime.RaceMins * 60 + (raceTime.RaceSecs || 0) : 0;
    return [raceDate, yAxisValues];
  }).filter(data => data[0] !== null);

  const chartOptions = {
    title: {
      text: 'Race Times'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Race Date'
      }
    },
    yAxis: {
      title: {
        text: 'Race Time'
      },
      labels: {
        formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
          return formatYAxisLabel(this.value as number);
        }
      }       },
    series: [{
      name: 'Race Time',
      data: chartData,
      regression: true,
      regressionSettings: {
        type: 'linear',
        color: 'rgba(223, 83, 83, .9)',
        name: 'Trend Line'
      }
    }]
  };
  return chartOptions;
}

export default chart1Options;