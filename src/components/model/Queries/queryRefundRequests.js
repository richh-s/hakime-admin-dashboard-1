import {useQuery, gql} from '@apollo/client';

export const GET_REFUND_REQUEST = gql`

query RefundRequest {
    refund {
      id
      appointment {
        date
        price
        status
        doctor {
          full_name
        }
        user {
          full_name
        }
      }
    }
  }


`;

  
  



  