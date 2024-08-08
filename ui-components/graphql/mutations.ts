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
