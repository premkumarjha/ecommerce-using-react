import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router,Route, Link,Switch } from "react-router-dom";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const validationSchema = Yup.object().shape({

    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
  });
  
  
//   const { register, handleSubmit, formState } =  useForm({
//     mode: "onChange" // I want to change it to onBlur
//   });;
  //const { isValid, touchedFields, errors } = formState;

  const Signup=(props)=>{

    const [open, setOpen] = React.useState(false);
    const [message,setMessage]=React.useState("");
    const history = useHistory();
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    const signin=(data)=>{

    props.onSubmittedpersonalform(data)
    
    }

    const { register,reset, handleSubmit, formState:{ errors,isValid } } = useForm({
    mode: "onChange" ,// I want to change it to onBlur
    resolver: yupResolver(validationSchema),
      });
      const onSubmit=(data) =>{
          //console.log(data.firstName)
          axios.post('http://localhost:3000/signup', data)
      .then(res =>{
         console.log(res)
          setMessage(res.data.message);
          if(res.data.message==='user alreday exist' || res.data.message==='something went wrong'){
         setOpen(true)
          
          }else if(res.data.message==='signed up successfully, please login'){
            console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii")
            reset(data);
            console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii at 94")
            //setMessage("signed up successfully, please login");
            
         
          }
         })
          .catch((error) => {
         console.log(error);
       });
        
       // console.log(res.data));
      
        //console.log("form data",data)
        
      }

    return (
        <>
        <Grid container spacing={2}>
  <Grid item xs={3} >
    
  </Grid>
  <Grid item xs={6} >
  <Card sx={{ minWidth: 275 }} style={{ marginTop: 30, backgroundColor: '#f0f0f0' }}>
      <CardContent>
      <div className="card m-3">
            <h5 className="card-header" >Sign Up</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Email</label>
                            <input name="email" type="text" placeholder="Enter Your Email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Password</label>
                            <input name="password" type="text"  placeholder="Enter Your Password" {...register('password') } className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                    </div>
                    
                    <div style={{paddingTop:10}} className="form-group">
                        <button type="submit" disabled={!isValid}  className="btn btn-primary mr-1">Submit</button>
                        <Link to='/signin'>
                        <p>Existing user? Log in</p>

                        </Link>
                        {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                    </div>
                </form>
            </div>
        </div>
         

      </CardContent>
      
    </Card>
  
  </Grid>
  <Grid item xs={3} >
  <Snackbar
        open={open}
        autoHideDuration={6000}
        //onClose={handleClose}
        message={message}
        action={action}
      />
  </Grid>
</Grid>
</>
    
)
  }
  
  export default Signup;