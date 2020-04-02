import { gql } from 'apollo-boost';

export const FETCH_ASSISTANCES = gql`
  query assistances {
    assistances {
      id
      lat
      lng
      requester
      contactNumber
      details
    }
  }
`;
