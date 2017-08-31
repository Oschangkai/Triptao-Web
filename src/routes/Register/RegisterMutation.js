import { gql } from "react-apollo";

export const mutation = gql`
mutation($username: String!, $password: String!) {
  cUser(username: $username, password: $password) {
    username
  }
}
`;