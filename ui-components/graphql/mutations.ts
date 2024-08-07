/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSwimTime = /* GraphQL */ `
  mutation CreateSwimTime(
    $condition: ModelSwimTimeConditionInput
    $input: CreateSwimTimeInput!
  ) {
    createSwimTime(condition: $condition, input: $input) {
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
export const deleteSwimTime = /* GraphQL */ `
  mutation DeleteSwimTime(
    $condition: ModelSwimTimeConditionInput
    $input: DeleteSwimTimeInput!
  ) {
    deleteSwimTime(condition: $condition, input: $input) {
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
export const updateSwimTime = /* GraphQL */ `
  mutation UpdateSwimTime(
    $condition: ModelSwimTimeConditionInput
    $input: UpdateSwimTimeInput!
  ) {
    updateSwimTime(condition: $condition, input: $input) {
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
