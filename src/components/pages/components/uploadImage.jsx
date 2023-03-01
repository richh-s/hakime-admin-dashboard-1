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
import Loader from '../../utils/loading';
export default function UploadImageButton(props) {
 
  const [img, setImg] = React.useState("");
  const [imgId, setImgId] = React.useState(0);

  
  function encodeImageFileAsURL(element) {
  var file = element.target.files[0];
  var reader = new FileReader();
  reader.onloadend = async function() {
    
  //  console.log('RESULT', reader.result.toString().split("base64,")[1]);
    // console.log("zzzzzz", img)
    const response = await insert_banner_image({ variables: { image:reader.result.toString().split("base64,")[1] } });
     console.log("here is ur id",response.data.uploadImage.id);
     setImgId(response.data.uploadImage.id)
     console.log("and your image id",imgId)
  }
  reader.readAsDataURL(file);
       setImg(reader.result.toString().split("base64,")[1]);

 


}

 

const[insert_banner_image, {data,loading,error}] = useMutation(INSERT_BANNER_IMAGE);
  if (loading) return <Loader/>;
  if (error) return `Submission error! ${error.message}`;
  if (data) {
    return (<div><img src={data.uploadImage.url}/></div>)}
  return (
    //  setImgId(data.insert_images.returning[0].id),

    <div className='m-4 mt-12'>
  
        {/* <form onSubmit={props.imageIdCallBack(imgId)}> */}
       <form>
    <input type="file"   onChange = {(e)=>{
      encodeImageFileAsURL(e)
    // console.log(parseInt(data.insert_images.returning[0].id));

    }}
            error = {!img}
            helperText= {
              !img? 'Required' : " "
            }/>
        {img? (<img src={img}/>):(<div></div>)}
        </form>
      

     
    </div>
  );
}