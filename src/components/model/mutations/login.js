import {useMutation, gql} from '@apollo/client';

export const LOGIN =gql`

mutation LoginMutation($email:String!, $pswd:String!) {
    login(email: $email, password: $pswd) {
      token
      
    }
  }
  `