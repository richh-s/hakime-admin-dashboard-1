import React from "react";
import {ApolloClient,InMemoryCache,ApolloProvider,createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import LoginPage from "./components/pages/Login";
import Layout from "./components/pages/Layout";
import Patients from "./components/pages/Patients";
import Dashboard from "./components/pages/Dashboard";
import {BrowserRouter as Router,Routes,Route,Link,useParams}from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
import { HttpLink } from "@apollo/client";
import Appointments from "./components/pages/appointments";
import Test from "./components/Test";
import DoctorDetails from "./components/pages/doctors/Detail page/doctorsDetail";
import NewDoctorDetails from "./components/pages/doctors/Detail page/newDoctorDetail";
import Ads from "./components/pages/Ads";
import UnapprovedDoctor from "./components/pages/doctors/Detail page/unapprovedDoctorProfile"
import DoctorTabs from "./components/pages/doctors/DoctorsTab";
import ErrorPage from "./components/utils/errorPage"
import RequestTabs from "./components/pages/requests/Request";

// import UnapprovedDoctor from "./components/requests/Detail page/unapprovedDoctorProfile";
// const uri = process.env.REACT_APP_API_URL;
//  const uri = 'https://hakime-admin.hasura.app/v1/graphql'

let token = "token";
const httpLink = createHttpLink({
  uri: 'https://hakime-2.hasura.app/v1/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      // ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      'x-hasura-admin-secret': 'hakime',

    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// const client = ...






function App() {
  // client
  // .query({
  //   query: gql`
  //     query MyQuery {
  //       doctors {
          
  //         name
          
  //       }
  //     }
  //   `,
  // })
  // .then((result) => console.log(result));
  // console.log('hello world')
  return (

  
 <ApolloProvider client={client}>
   {/* <DisplayDoctors/> */}
 
  <Router>
    
    
        <Routes>
        <Route path="/" element={<LoginPage/>}/>

          <Route path="*" element={<ErrorPage/>}/>
        {/* <Route path="/individual" element={<Individual/>}/> */}
        <Route path="/newdoctorsdetail/:doctorId" element={<UnapprovedDoctor/>}/>
        <Route path="/doctorsdetail/:doctorId" element={<DoctorDetails/>}/>

          <Route path="/ads" element={<Ads/>}/>
          <Route path="/home" element={<Dashboard/>}/>
          <Route path="/test" element={<Test/>}/>

          <Route path="/Requests" element={<RequestTabs/>}/>

          <Route path="/Doctor" element={<DoctorTabs/>}/>
          <Route path="/Patient" element={<Patients/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
          {/* <Route path="/newdoctor" element={<UnapprovedDoctor/>}/> */}
        </Routes>
    
       </Router>
     
 </ApolloProvider>
      );
}

export default App;
