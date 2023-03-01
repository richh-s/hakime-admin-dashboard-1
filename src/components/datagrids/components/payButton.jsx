import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Payment } from '../../model/mutations/makePayment';
import { useMutation } from "@apollo/client";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import { Label } from '@mui/icons-material';
import { TextField } from '@mui/material';

export default function PayButton(props) {
  const [open, setOpen] = React.useState(false);
 
  const [amount, setAmount] = React.useState(props.amount);
  const [beneficiaryName, setBeneficiaryName] = React.useState(props.name);
  const [accountNumber, setAccountNumber] = React.useState(props.account);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 const handlePayment = (event)=>{
  event.preventDefault();
   
   pay({ variables: { account_number: accountNumber , amount:amount , beneficiary_name: beneficiaryName} });
    handleClose();

 }

const[pay,{loading,error,data}] = useMutation(Payment
//   refetchQueries: [
//     {query: GET_NEW_DOCTORS}, // DocumentNode object parsed with gql
//     'Unapproved_doctors', // Query name
   
//   ],
);
if (loading) return <p>loading</p>;
if (error) return <p>Error : {error.message}</p>;
if(data) return <p className='text-red-900 font-bold'>suspended</p>
  
  return (
   
    <div className=''>

      <Button  onClick={handleClickOpen} variant="text" size="small" color="error">
    
         Pay
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Fill out the form</DialogTitle>
        <DialogContent>
         <form onSubmit={handlePayment}>
         <TextField
            fullWidth
            margin="dense"
            id="beneficiary name"
            label="Beneficiary name"
            type="text"
            variant="standard"
            required
            value={beneficiaryName}
            onChange = {(e)=>setBeneficiaryName(e.target.value)}
            error = {!beneficiaryName}
            helperText= {
              !beneficiaryName? 'Required' : " "
            }
          /><br/><br/>
        <TextField
            fullWidth
            margin="dense"
            id="account"
            label="Account Number"
            type="text"
            variant="standard"
            required
            value={accountNumber}
            onChange = {(e)=>setAccountNumber(e.target.value)}
            error = {!accountNumber}
            helperText= {
              !accountNumber? 'Required' : " "
            }
          /><br/><br/>
            <TextField
            fullWidth
            margin="dense"
            id="name"
            label="amount"
            type="text"
            variant="standard"
            required
            
            value={amount}
            onChange = {(e)=>setAmount(e.target.value)}
            error = {!amount}
            helperText= {
              !amount? 'Required' : " "
            }
          /><br/><br/>
           
       
          
       
        </form> 
      

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' >Proceed</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}