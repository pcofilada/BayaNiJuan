import { gql } from 'apollo-boost';

export const SIGNIN = gql`
  mutation signin($data: SigninInput!) {
    signin(input: $data) {
      id
    }
  }
`;

export const VERIFY = gql`
  mutation verify($data: VerifyInput!) {
    verify(input: $data) {
      token
    }
  }
`;
