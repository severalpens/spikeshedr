/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const onCreateRaceTime = /* GraphQL */ `
  subscription OnCreateRaceTime(
    $filter: ModelSubscriptionRaceTimeFilterInput
    $owner: String
  ) {
    onCreateRaceTime(filter: $filter, owner: $owner) {
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
export const onCreateTimerPeriod = /* GraphQL */ `
  subscription OnCreateTimerPeriod(
    $filter: ModelSubscriptionTimerPeriodFilterInput
    $owner: String
  ) {
    onCreateTimerPeriod(filter: $filter, owner: $owner) {
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
export const onCreateTimerProject = /* GraphQL */ `
  subscription OnCreateTimerProject(
    $filter: ModelSubscriptionTimerProjectFilterInput
    $owner: String
  ) {
    onCreateTimerProject(filter: $filter, owner: $owner) {
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
export const onCreateTimerTask = /* GraphQL */ `
  subscription OnCreateTimerTask(
    $filter: ModelSubscriptionTimerTaskFilterInput
    $owner: String
  ) {
    onCreateTimerTask(filter: $filter, owner: $owner) {
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
export const onCreateTtProject = /* GraphQL */ `
  subscription OnCreateTtProject(
    $filter: ModelSubscriptionTtProjectFilterInput
    $owner: String
  ) {
    onCreateTtProject(filter: $filter, owner: $owner) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onCreateTtProjectTask = /* GraphQL */ `
  subscription OnCreateTtProjectTask(
    $filter: ModelSubscriptionTtProjectTaskFilterInput
    $owner: String
  ) {
    onCreateTtProjectTask(filter: $filter, owner: $owner) {
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
export const onCreateTtTask = /* GraphQL */ `
  subscription OnCreateTtTask(
    $filter: ModelSubscriptionTtTaskFilterInput
    $owner: String
  ) {
    onCreateTtTask(filter: $filter, owner: $owner) {
      ProjectName
      TaskName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onCreateTtTaskTimeBlock = /* GraphQL */ `
  subscription OnCreateTtTaskTimeBlock(
    $filter: ModelSubscriptionTtTaskTimeBlockFilterInput
    $owner: String
  ) {
    onCreateTtTaskTimeBlock(filter: $filter, owner: $owner) {
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
export const onDeleteRaceTime = /* GraphQL */ `
  subscription OnDeleteRaceTime(
    $filter: ModelSubscriptionRaceTimeFilterInput
    $owner: String
  ) {
    onDeleteRaceTime(filter: $filter, owner: $owner) {
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
export const onDeleteTimerPeriod = /* GraphQL */ `
  subscription OnDeleteTimerPeriod(
    $filter: ModelSubscriptionTimerPeriodFilterInput
    $owner: String
  ) {
    onDeleteTimerPeriod(filter: $filter, owner: $owner) {
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
export const onDeleteTimerProject = /* GraphQL */ `
  subscription OnDeleteTimerProject(
    $filter: ModelSubscriptionTimerProjectFilterInput
    $owner: String
  ) {
    onDeleteTimerProject(filter: $filter, owner: $owner) {
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
export const onDeleteTimerTask = /* GraphQL */ `
  subscription OnDeleteTimerTask(
    $filter: ModelSubscriptionTimerTaskFilterInput
    $owner: String
  ) {
    onDeleteTimerTask(filter: $filter, owner: $owner) {
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
export const onDeleteTtProject = /* GraphQL */ `
  subscription OnDeleteTtProject(
    $filter: ModelSubscriptionTtProjectFilterInput
    $owner: String
  ) {
    onDeleteTtProject(filter: $filter, owner: $owner) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTtProjectTask = /* GraphQL */ `
  subscription OnDeleteTtProjectTask(
    $filter: ModelSubscriptionTtProjectTaskFilterInput
    $owner: String
  ) {
    onDeleteTtProjectTask(filter: $filter, owner: $owner) {
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
export const onDeleteTtTask = /* GraphQL */ `
  subscription OnDeleteTtTask(
    $filter: ModelSubscriptionTtTaskFilterInput
    $owner: String
  ) {
    onDeleteTtTask(filter: $filter, owner: $owner) {
      ProjectName
      TaskName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTtTaskTimeBlock = /* GraphQL */ `
  subscription OnDeleteTtTaskTimeBlock(
    $filter: ModelSubscriptionTtTaskTimeBlockFilterInput
    $owner: String
  ) {
    onDeleteTtTaskTimeBlock(filter: $filter, owner: $owner) {
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
export const onUpdateRaceTime = /* GraphQL */ `
  subscription OnUpdateRaceTime(
    $filter: ModelSubscriptionRaceTimeFilterInput
    $owner: String
  ) {
    onUpdateRaceTime(filter: $filter, owner: $owner) {
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
export const onUpdateTimerPeriod = /* GraphQL */ `
  subscription OnUpdateTimerPeriod(
    $filter: ModelSubscriptionTimerPeriodFilterInput
    $owner: String
  ) {
    onUpdateTimerPeriod(filter: $filter, owner: $owner) {
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
export const onUpdateTimerProject = /* GraphQL */ `
  subscription OnUpdateTimerProject(
    $filter: ModelSubscriptionTimerProjectFilterInput
    $owner: String
  ) {
    onUpdateTimerProject(filter: $filter, owner: $owner) {
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
export const onUpdateTimerTask = /* GraphQL */ `
  subscription OnUpdateTimerTask(
    $filter: ModelSubscriptionTimerTaskFilterInput
    $owner: String
  ) {
    onUpdateTimerTask(filter: $filter, owner: $owner) {
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
export const onUpdateTtProject = /* GraphQL */ `
  subscription OnUpdateTtProject(
    $filter: ModelSubscriptionTtProjectFilterInput
    $owner: String
  ) {
    onUpdateTtProject(filter: $filter, owner: $owner) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTtProjectTask = /* GraphQL */ `
  subscription OnUpdateTtProjectTask(
    $filter: ModelSubscriptionTtProjectTaskFilterInput
    $owner: String
  ) {
    onUpdateTtProjectTask(filter: $filter, owner: $owner) {
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
export const onUpdateTtTask = /* GraphQL */ `
  subscription OnUpdateTtTask(
    $filter: ModelSubscriptionTtTaskFilterInput
    $owner: String
  ) {
    onUpdateTtTask(filter: $filter, owner: $owner) {
      ProjectName
      TaskName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTtTaskTimeBlock = /* GraphQL */ `
  subscription OnUpdateTtTaskTimeBlock(
    $filter: ModelSubscriptionTtTaskTimeBlockFilterInput
    $owner: String
  ) {
    onUpdateTtTaskTimeBlock(filter: $filter, owner: $owner) {
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
