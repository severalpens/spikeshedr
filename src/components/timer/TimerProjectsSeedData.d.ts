interface TimerPeriod {
    start: string;
    end: string;
}

interface TimerTask {
    name: string;
    timerPeriods: TimerPeriod[];
}

interface TimerProject {
    name: string;
    timerTasks: TimerTask[];
}

const timerProjectsSeedData: TimerProject[] = [
    {
        name: "Project1",
        timerTasks: [
            {
                name: "Task1",
                timerPeriods: [
                    {
                        start: "2021-06-01T00:00:00.000Z",
                        end: "2021-06-01T00:00:00.000Z"
                    }
                ]
            },
            {
                name: "Task2",
                timerPeriods: [
                    {
                        start: "2021-06-01T00:00:00.000Z",
                        end: "2021-06-01T00:00:00.000Z"
                    }
                ]
            }
        ]
    }
];

export default timerProjectsSeedData;