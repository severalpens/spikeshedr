/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const createRaceTime = /* GraphQL */ `
  mutation CreateRaceTime(
    $condition: ModelRaceTimeConditionInput
    $input: CreateRaceTimeInput!
  ) {
    createRaceTime(condition: $condition, input: $input) {
      RaceDate
      RaceDistance
      RaceMins
      RaceSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTimerPeriod = /* GraphQL */ `
  mutation CreateTimerPeriod(
    $condition: ModelTimerPeriodConditionInput
    $input: CreateTimerPeriodInput!
  ) {
    createTimerPeriod(condition: $condition, input: $input) {
      EndTime
      StartTime
      TimerTask {
        Name
        TimerProjectId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      TimerTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTimerProject = /* GraphQL */ `
  mutation CreateTimerProject(
    $condition: ModelTimerProjectConditionInput
    $input: CreateTimerProjectInput!
  ) {
    createTimerProject(condition: $condition, input: $input) {
      Name
      TimerTasks {
        nextToken
        __typename
      }
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTimerTask = /* GraphQL */ `
  mutation CreateTimerTask(
    $condition: ModelTimerTaskConditionInput
    $input: CreateTimerTaskInput!
  ) {
    createTimerTask(condition: $condition, input: $input) {
      Name
      TimerPeriods {
        nextToken
        __typename
      }
      TimerProject {
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      TimerProjectId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTtProject = /* GraphQL */ `
  mutation CreateTtProject(
    $condition: ModelTtProjectConditionInput
    $input: CreateTtProjectInput!
  ) {
    createTtProject(condition: $condition, input: $input) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTtProjectTask = /* GraphQL */ `
  mutation CreateTtProjectTask(
    $condition: ModelTtProjectTaskConditionInput
    $input: CreateTtProjectTaskInput!
  ) {
    createTtProjectTask(condition: $condition, input: $input) {
      Name
      ProjectId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTtTaskTimeBlock = /* GraphQL */ `
  mutation CreateTtTaskTimeBlock(
    $condition: ModelTtTaskTimeBlockConditionInput
    $input: CreateTtTaskTimeBlockInput!
  ) {
    createTtTaskTimeBlock(condition: $condition, input: $input) {
      EndTime
      StartTime
      TimerTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteRaceTime = /* GraphQL */ `
  mutation DeleteRaceTime(
    $condition: ModelRaceTimeConditionInput
    $input: DeleteRaceTimeInput!
  ) {
    deleteRaceTime(condition: $condition, input: $input) {
      RaceDate
      RaceDistance
      RaceMins
      RaceSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTimerPeriod = /* GraphQL */ `
  mutation DeleteTimerPeriod(
    $condition: ModelTimerPeriodConditionInput
    $input: DeleteTimerPeriodInput!
  ) {
    deleteTimerPeriod(condition: $condition, input: $input) {
      EndTime
      StartTime
      TimerTask {
        Name
        TimerProjectId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      TimerTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTimerProject = /* GraphQL */ `
  mutation DeleteTimerProject(
    $condition: ModelTimerProjectConditionInput
    $input: DeleteTimerProjectInput!
  ) {
    deleteTimerProject(condition: $condition, input: $input) {
      Name
      TimerTasks {
        nextToken
        __typename
      }
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTimerTask = /* GraphQL */ `
  mutation DeleteTimerTask(
    $condition: ModelTimerTaskConditionInput
    $input: DeleteTimerTaskInput!
  ) {
    deleteTimerTask(condition: $condition, input: $input) {
      Name
      TimerPeriods {
        nextToken
        __typename
      }
      TimerProject {
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      TimerProjectId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTtProject = /* GraphQL */ `
  mutation DeleteTtProject(
    $condition: ModelTtProjectConditionInput
    $input: DeleteTtProjectInput!
  ) {
    deleteTtProject(condition: $condition, input: $input) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTtProjectTask = /* GraphQL */ `
  mutation DeleteTtProjectTask(
    $condition: ModelTtProjectTaskConditionInput
    $input: DeleteTtProjectTaskInput!
  ) {
    deleteTtProjectTask(condition: $condition, input: $input) {
      Name
      ProjectId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTtTaskTimeBlock = /* GraphQL */ `
  mutation DeleteTtTaskTimeBlock(
    $condition: ModelTtTaskTimeBlockConditionInput
    $input: DeleteTtTaskTimeBlockInput!
  ) {
    deleteTtTaskTimeBlock(condition: $condition, input: $input) {
      EndTime
      StartTime
      TimerTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateRaceTime = /* GraphQL */ `
  mutation UpdateRaceTime(
    $condition: ModelRaceTimeConditionInput
    $input: UpdateRaceTimeInput!
  ) {
    updateRaceTime(condition: $condition, input: $input) {
      RaceDate
      RaceDistance
      RaceMins
      RaceSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTimerPeriod = /* GraphQL */ `
  mutation UpdateTimerPeriod(
    $condition: ModelTimerPeriodConditionInput
    $input: UpdateTimerPeriodInput!
  ) {
    updateTimerPeriod(condition: $condition, input: $input) {
      EndTime
      StartTime
      TimerTask {
        Name
        TimerProjectId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      TimerTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTimerProject = /* GraphQL */ `
  mutation UpdateTimerProject(
    $condition: ModelTimerProjectConditionInput
    $input: UpdateTimerProjectInput!
  ) {
    updateTimerProject(condition: $condition, input: $input) {
      Name
      TimerTasks {
        nextToken
        __typename
      }
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTimerTask = /* GraphQL */ `
  mutation UpdateTimerTask(
    $condition: ModelTimerTaskConditionInput
    $input: UpdateTimerTaskInput!
  ) {
    updateTimerTask(condition: $condition, input: $input) {
      Name
      TimerPeriods {
        nextToken
        __typename
      }
      TimerProject {
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      TimerProjectId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTtProject = /* GraphQL */ `
  mutation UpdateTtProject(
    $condition: ModelTtProjectConditionInput
    $input: UpdateTtProjectInput!
  ) {
    updateTtProject(condition: $condition, input: $input) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTtProjectTask = /* GraphQL */ `
  mutation UpdateTtProjectTask(
    $condition: ModelTtProjectTaskConditionInput
    $input: UpdateTtProjectTaskInput!
  ) {
    updateTtProjectTask(condition: $condition, input: $input) {
      Name
      ProjectId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTtTaskTimeBlock = /* GraphQL */ `
  mutation UpdateTtTaskTimeBlock(
    $condition: ModelTtTaskTimeBlockConditionInput
    $input: UpdateTtTaskTimeBlockInput!
  ) {
    updateTtTaskTimeBlock(condition: $condition, input: $input) {
      EndTime
      StartTime
      TimerTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
