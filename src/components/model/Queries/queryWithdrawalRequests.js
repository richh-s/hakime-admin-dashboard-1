import {useQuery, gql} from '@apollo/client';

export const GET_WITHDRAWAL_REQUEST = gql`
query withdrawalRequest{
  withdrawals (order_by: {created_at: desc}, where: {status: {_eq: "pending"}})  {
    id
    doctor {
      wallet
      full_name
      bank_informations {
        bank_name
        account_number
      }
    }
    amount
    status
  }
}

`;

  

