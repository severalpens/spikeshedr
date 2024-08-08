/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const onCreateSwimTime = /* GraphQL */ `
  subscription OnCreateSwimTime(
    $filter: ModelSubscriptionSwimTimeFilterInput
    $owner: String
  ) {
    onCreateSwimTime(filter: $filter, owner: $owner) {
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
export const onDeleteSwimTime = /* GraphQL */ `
  subscription OnDeleteSwimTime(
    $filter: ModelSubscriptionSwimTimeFilterInput
    $owner: String
  ) {
    onDeleteSwimTime(filter: $filter, owner: $owner) {
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
export const onUpdateSwimTime = /* GraphQL */ `
  subscription OnUpdateSwimTime(
    $filter: ModelSubscriptionSwimTimeFilterInput
    $owner: String
  ) {
    onUpdateSwimTime(filter: $filter, owner: $owner) {
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
