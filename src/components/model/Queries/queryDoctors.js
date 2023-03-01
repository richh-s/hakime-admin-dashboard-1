import {useQuery, gql} from '@apollo/client';
import { useState, useEffect} from 'react';



export const GET_DOCTORS = gql`
query GetDoctors {
  doctors (where: {is_approved: {_eq: true}})  {
    id
    full_name
    sex
    speciallity
    phone_number
    rate
    current_hospital
    experience_year
    is_verified
    is_suspended
    created_at
    speciallities{
      speciallity_name
    }
    profile_image {
      url
    }
    packages {
      chat
      video
      voice
    }
  }
} `;
export const GET_DOCTOR_DETAIL = gql`
query GetDoctors ($id:Int!) {
  doctors (where: {id: {_eq: $id}})  {
    id
    full_name
    email
    sex
    speciallity
    phone_number
    rate
    current_hospital
    experience_year
    is_verified
    is_suspended
    created_at
    experience_year
      experiences {
        department
        designation
        end_date
        hospital_name
        start_date
      }
    speciallities{
      speciallity_name
    }
    profile_image {
      url
    }
    wallet
    packages {
      chat
      video
      voice
    }
    licenceImage {
      url
    }
    rate
    reviews {
      created_at
      rate
      review
      user {
        full_name
        profile_image {
          url
        }
      }
    
  }
    bank_informations {
      bank_name
      account_number
    }
  }
} `;

export const GET_DOCTORS_OVERVIEW = gql`
query queryDoctorsOverview  @cached {
  doctors(limit: 8) {
    id
    full_name
    speciallities {
      speciallity_name
    }
    profile_image {
      url
    }
  }
}
`
export const GET_DOCTOR_BY_ID = gql`
  query GET_DOCTOR_BY_ID ($id:Int!){
    doctors(where: {id: {_eq: $id}}) {
      id
      bio
      created_at
      current_hospital
      email
      date_of_birth
      experience_year
      experiences {
        department
        designation
        end_date
        hospital_name
        start_date
      }
      packages {
        chat
        video
        voice
      }
      full_name
      licence
      licenceImage {
        url
      }
      phone_number
      profile_image {
        url
      }
      image {
        url
      }
    }
  
} `;

