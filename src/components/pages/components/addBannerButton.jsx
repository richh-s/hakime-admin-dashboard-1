import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import { Label } from '@mui/icons-material';
import { useMutation } from "@apollo/client";
import { INSERT_BANNER, INSERT_BANNER_IMAGE } from '../../model/mutations/advertisementMutations';
import UploadImageButton from './uploadImage';
export default function AddBannerButton() {
  const [open, setOpen] = React.useState(false);
  const [start_date, setStart_date] = React.useState("");
  const [end_date, setEnd_date] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [bussinessName, setBussinessName] = React.useState("");




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleSubmit = (event)=>{
  event.preventDefault();
  
  //  insert_banner({ variables: { url: img, start_date:start_date, end_date:end_date} });


  event.preventDefault();
 }

const[insert_banner_image, {data,loading,error}] = useMutation(INSERT_BANNER_IMAGE);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  if (data) return 'sucesss'
  return (
    //  setImgId(data.insert_images.returning[0].id),
    //  console.log(imgId),
    <div className='m-4 mt-12'>
      <Button variant="contained" onClick={handleClickOpen}>
       <AddIcon/> Publish a new Banner
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Upload a new Banner</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            margin="dense"
            id="name"
            label="Bussiness name"
            type="text"
            variant="standard"
            required
            value={bussinessName}
            onChange = {(e)=>setBussinessName(e.target.value)}
            error = {!bussinessName}
            helperText= {
              !bussinessName? 'Required' : " "
            }
          /><br/><br/>
         <p className='text-gray-700'> Start Date:</p>
           <TextField
           fullWidth
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="date"
            variant="standard"
            required
            value={start_date}
            onChange = {(e)=>setStart_date(e.target.value)}
            error = {!start_date}
            helperText= {
              !start_date? 'Required' : " "
            }
          />
        <p className='text-gray-700'> End Date:</p>

           <TextField
            autoFocus
            fullWidth
            margin="dense"
            id="name"
            label=""
            type="date"
            value={end_date}
            variant="standard"
            required
            onChange = {(e)=>setEnd_date(e.target.value)}
            error = {!end_date}
            helperText= {
              !end_date? 'Required' : " "
            }
          /><br/><br/>
          
         
  <UploadImageButton/>
  </form>
      

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}