/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const getRaceTime = /* GraphQL */ `
  query GetRaceTime($id: ID!) {
    getRaceTime(id: $id) {
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
export const getTimerPeriod = /* GraphQL */ `
  query GetTimerPeriod($id: ID!) {
    getTimerPeriod(id: $id) {
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
export const getTimerProject = /* GraphQL */ `
  query GetTimerProject($id: ID!) {
    getTimerProject(id: $id) {
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
export const getTimerTask = /* GraphQL */ `
  query GetTimerTask($id: ID!) {
    getTimerTask(id: $id) {
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
export const getTtProject = /* GraphQL */ `
  query GetTtProject($id: ID!) {
    getTtProject(id: $id) {
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const getTtProjectTask = /* GraphQL */ `
  query GetTtProjectTask($id: ID!) {
    getTtProjectTask(id: $id) {
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
export const getTtTask = /* GraphQL */ `
  query GetTtTask($id: ID!) {
    getTtTask(id: $id) {
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
export const getTtTaskTimeBlock = /* GraphQL */ `
  query GetTtTaskTimeBlock($id: ID!) {
    getTtTaskTimeBlock(id: $id) {
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
export const listRaceTimes = /* GraphQL */ `
  query ListRaceTimes(
    $filter: ModelRaceTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaceTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTimerPeriods = /* GraphQL */ `
  query ListTimerPeriods(
    $filter: ModelTimerPeriodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimerPeriods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        EndTime
        StartTime
        TimerTaskId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTimerProjects = /* GraphQL */ `
  query ListTimerProjects(
    $filter: ModelTimerProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimerProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTimerTasks = /* GraphQL */ `
  query ListTimerTasks(
    $filter: ModelTimerTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimerTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Name
        TimerProjectId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTtProjectTasks = /* GraphQL */ `
  query ListTtProjectTasks(
    $filter: ModelTtProjectTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTtProjectTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Name
        ProjectId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTtProjects = /* GraphQL */ `
  query ListTtProjects(
    $filter: ModelTtProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTtProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTtTaskTimeBlocks = /* GraphQL */ `
  query ListTtTaskTimeBlocks(
    $filter: ModelTtTaskTimeBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTtTaskTimeBlocks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        EndTime
        StartTime
        TimerTaskId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTtTasks = /* GraphQL */ `
  query ListTtTasks(
    $filter: ModelTtTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTtTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ProjectName
        TaskName
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
