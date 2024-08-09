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
