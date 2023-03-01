
  import {useMutation, gql} from '@apollo/client';

export const Payment =gql`

mutation Payment($amount: Int!, $account_number: Int!, $beneficiary_name: String!) {
    transfer(account_number: $account_number, amount: $amount, beneficiary_name: $beneficiary_name) {
      message
    }
  }
  `