

function chart1Options(raceTimes: any[]) {
    const chartData = raceTimes.map(raceTime => {
      const raceDate = raceTime.RaceDate ? new Date(raceTime.RaceDate.toString()).getTime() : null;
  
      const raceTimeInSeconds = raceTime.RaceMins ? raceTime.RaceMins * 60 + (raceTime.RaceSecs || 0) : 0;
      return [raceDate, raceTimeInSeconds];
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
          text: 'Race Time (seconds)'
        },
      },
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