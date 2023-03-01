import {useMutation,  gql} from '@apollo/client';

export const DELETE_BANNER =gql`
mutation DeleteBanner($id : Int!) {
  delete_banners_by_pk(id: $id) {
    id
  }
}

  
`;
export const INSERT_BANNER =gql`
mutation InsertBanner($end_date: String!, $start_date:String!, $url:String!,$bussiness_name:String!){
    insert_banners(objects: {end_date: $end_date, bussiness_name:$bussiness_name start_date: $start_date, the_image:{data:{url:$url}}}) {
      affected_rows
      returning {
        image
      }
    }
   
  }
`;
export const INSERT_BANNER_IMAGE  = gql`
mutation uploadImage($image: String!) {
  uploadImage(base64: $image) {
    id
    url
  }
}

`
export const UPDATE_BANNER =gql`
mutation UpdateBanner {
    update_banners(where: {id: {_eq: 10}}, _set: {image: "zzfg", is_active: true, start_date: "jkk", end_date: "nmlk"}) {
     affected_rows
     returning {
       end_date
       id
       image
       is_active
       start_date
     }
   }
 }
 
`;


  
 
