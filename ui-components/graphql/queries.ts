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
export const getTimerPeriod = /* GraphQL */ `
  query GetTimerPeriod($id: ID!) {
    getTimerPeriod(id: $id) {
      createdAt
      id
      name
      owner
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
export const getTimerProject = /* GraphQL */ `
  query GetTimerProject($id: ID!) {
    getTimerProject(id: $id) {
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
export const getTimerTask = /* GraphQL */ `
  query GetTimerTask($id: ID!) {
    getTimerTask(id: $id) {
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
        createdAt
        id
        name
        owner
        timerTaskId
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
        createdAt
        id
        name
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
        createdAt
        id
        name
        owner
        timerProjectId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
