
import React from 'react';
import Barchart from '../charts/barChart';
import HomeCard from './components/Home_cards';
import { Linechart } from '../charts/linechart';
import PatientsChart from '../charts/patientChart';
import Layout from './Layout';
import {gql, useQuery}   from "@apollo/client";
import Loader from '../utils/loading';
import { GET_OVERVIEWS } from '../model/Queries/overviewQueries';
import UpcomingAppointmentsDG from '../datagrids/UpcomingAppointmentsDG';
import DoctorsOverview from './doctorsOerview';
import { useNavigate } from 'react-router';
const Dashboard = () => {
const navigate = useNavigate()
    const clickHandler = ()=>{
    
        return (
            navigate('/doctor')
        );
    }
    const { loading, error, data } = useQuery(GET_OVERVIEWS);
    
    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        // console.log(data.appointments.length),
        // console.log(data.users.length),
        // console.log(data.refunds.length),
        // console.log(data.withdrawals.length)
     

        <Layout>
        <div className='grid w-full grid-cols-4   my-4' >
            <HomeCard  counter={data.users.length} name="Patients" other="+10 new users his week" other2="+5% engagement" link="/patient"/>
           <HomeCard counter={data.doctors.length} name="Doctor" link="/doctor" other="+10 unapproved doctors" other2="+5 new doctors this week"/>
           <HomeCard counter={2+data.withdrawals.length} name="Requests" link="/Requests" other=" 1 withdrawal 1 refund" other2="5 refund requests" />
           <HomeCard counter={data.appointments.length} name="Appointments" link="/appointments" other="3 upcoming appointments" other2="10 successful this week"/>
           
        </div>
        <div className='h-72 grid w-full grid-cols-3'>
        <div className='rounded-lg shadow-lg bg-white overflow-hidden max-w-2/5 my-2 mr-8 '>
            
            <Linechart/>
            </div>
            <div className='  rounded-lg  bg-white overflow-hidden shadow-lg max-w-2/5 mr-8 my-2 '>

<Barchart/>

</div>
<div className='rounded-lg  bg-white overflow-hidden shadow-lg max-w-2/5 mr-8 my-2 '>

<PatientsChart/>

</div>
        </div>
        <div className='grid grid-cols-3 '>
            <UpcomingAppointmentsDG/>
            <div className='bg-white rounded-lg shadow pt-4 p-8 mr-8 mt-4 '>
            <h4 className='font-bold py-4 px-2 text-green-900'>Doctor's List <span className='text-xs  font-semi-bold underline float-right' onClick={clickHandler}> View all</span></h4>

            <DoctorsOverview/>
             </div>
             
 
        </div>
        </Layout>


    );
};
export default Dashboard;