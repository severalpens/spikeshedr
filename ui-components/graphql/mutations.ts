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
      createdAt
      endTime
      id
      owner
      startTime
      timerTask {
        createdAt
        id
        name
        owner
        timerProjectId
        updatedAt
        __typename
      }
      timerTaskId
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
      createdAt
      id
      name
      owner
      timerTasks {
        nextToken
        __typename
      }
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
      createdAt
      id
      name
      owner
      timerPeriods {
        nextToken
        __typename
      }
      timerProject {
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      timerProjectId
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
      createdAt
      endTime
      id
      owner
      startTime
      timerTask {
        createdAt
        id
        name
        owner
        timerProjectId
        updatedAt
        __typename
      }
      timerTaskId
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
      createdAt
      id
      name
      owner
      timerTasks {
        nextToken
        __typename
      }
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
      createdAt
      id
      name
      owner
      timerPeriods {
        nextToken
        __typename
      }
      timerProject {
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      timerProjectId
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
      createdAt
      endTime
      id
      owner
      startTime
      timerTask {
        createdAt
        id
        name
        owner
        timerProjectId
        updatedAt
        __typename
      }
      timerTaskId
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
      createdAt
      id
      name
      owner
      timerTasks {
        nextToken
        __typename
      }
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
      createdAt
      id
      name
      owner
      timerPeriods {
        nextToken
        __typename
      }
      timerProject {
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      timerProjectId
      updatedAt
      __typename
    }
  }
`;
