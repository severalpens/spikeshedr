/* tslint:disable */
/* eslint-disable */
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
export const getTtTask = /* GraphQL */ `
  query GetTtTask($id: ID!) {
    getTtTask(id: $id) {
      IsRunning
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
      TtTaskId
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
        TtTaskId
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
        IsRunning
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
