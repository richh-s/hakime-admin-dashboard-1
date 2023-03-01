import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import  app from '../data/appDB.json';
import {useNavigate} from 'react-router-dom';
import {GET_REFUND_REQUEST} from "../model/Queries/queryRefundRequests";
import { useQuery, useMutation } from "@apollo/client";
import Loader from "../utils/loading";
import PayButton from "./components/payButton";
const RefundRequestDG = ()=>{

    const REFUNDS = [
    // {
    //     Header: "ID",
    //     accessor: "id"
    // },
    {
        Header: "Doctor",
        field: "doctor_name", 
        flex:1,
        headerClassName: 'super-app-theme--header',
      valueGetter: (params) => {

        console.log(params.row)
        return(params.row.doctor.full_name)
      }
    },
    {
        Header: "Wallet",
        field: "wallet", 
        flex:1,
        headerClassName: 'super-app-theme--header',
      valueGetter: (params) => {

        console.log(params.row)
        return(params.row.doctor.wallet)
      }
    },
    {
        Header: "Bank",
        field: "bank", 
        flex:1,
        headerClassName: 'super-app-theme--header',
      valueGetter: (params) => {

        return(params.row.doctor.bank_informations[0].bank_name)
      }
    },
    {
        Header: "Account no",
        field: "account", 
        flex:1,
        headerClassName: 'super-app-theme--header',
      valueGetter: (params) => {

        console.log(params.row)
        return(params.row.doctor.bank_informations[0].account_number)
      }
    },
    {
        Header: "Amount",
        field: "amount",
        flex:1,

    },
   
    {
        Header: "Status",
        field: "status",
        flex:1
    },
    {
        
        field: 'actions',
        flex:2,
        renderCell:(cellValues)=>{
          
          return(
            
              <div className="flex">

                <span>
                  <PayButton id={cellValues.id} />
                 </span>
                 
                 {/* <span>
                  <Button onClick={(e)=>{
                           navigate(`/doctorsdetail/${cellValues.row.id}`);

                  }}><OpenInNewIcon/></Button>
                 </span> */}
               
            </div>
              
      
          )
        }
       
      }
    // {
    //     Header: "Price",
    //     field: "price",
    //     flex:0.5
    // },
  
];

    const [pageSize, setPageSize] = React.useState(15); //make 5 25
    const { loading, error, data } = useQuery(GET_REFUND_REQUEST);
   
    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;

  
    return(
       
    
     <>
      <div className='bg-white rounded-lg shadow pt-4 p-8 mr-8 mt-4 col-span-2'>
                {/* <h4 className='font-bold p-4 text-green-900'>Upcoming appointments</h4>
                <p className="text-right"> view all</p> */}
                <DataGrid
        rows={data.refund}
        columns={REFUNDS}
        pageSize={5}
        // onPageSizeChange={(newPage) => setPageSize(newPage)}
        pagination
        autoHeight
        // components={{Toolbar:GridToolbar}}
   

      />
      

            </div>
    
    </>
    )
}

export default RefundRequestDG;