import React from "react";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
import WithdrawalRequestDG from "../../../datagrids/WithdrawalRequestDG";
const WithdrawalRequests = () =>{

    // const navigate = useNavigate();

  
    const clickHandler =(params)=>{
      //  navigate ('/individual')
      // console.log(params.row.firstName)
    }
 
    return(
      <div>
        <WithdrawalRequestDG/>
      </div>
    )
  
    
}
export default WithdrawalRequests;