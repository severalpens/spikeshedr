/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSwimTime = /* GraphQL */ `
  query GetSwimTime($id: ID!) {
    getSwimTime(id: $id) {
      SwimDate
      SwimMins
      SwimSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const listSwimTimes = /* GraphQL */ `
  query ListSwimTimes(
    $filter: ModelSwimTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSwimTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        SwimDate
        SwimMins
        SwimSecs
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
