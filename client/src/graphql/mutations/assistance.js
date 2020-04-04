import { gql } from 'apollo-boost';

export const ASK_ASSISTANCE = gql`
  mutation createAssistance($data: CreateAssistanceInput!) {
    createAssistance(input: $data) {
      id
      lat
      lng
      requester
      contactNumber
      details
    }
  }
`;
