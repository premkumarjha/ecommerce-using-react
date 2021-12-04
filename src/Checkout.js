import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Dialogs from './Dialog';
import Paypal from './Paypal';
import Paypaldocs from './Paypaldocs'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Personaldetailform from './Personaldetailform';
import Shippingform from './Shippingform';

const getStep=()=>{
    return ['Personal Detail', 'Shipping Address', 'Payment Details'];
}

const steps=getStep();

const validationSchema = Yup.object().shape({

  firstName: Yup.string()
      .required('First Name is required'),
  lastName: Yup.string()
      .required('Last name is required'),
  email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
  
});



const Checkout=(props)=> {

  const [paid, setPaid] = useState(false);

  const [form,setForm]=useState(false);

  const [valid,setValid]=useState(false);

  //const [shiping,setShiping]=useState(false);

  const [activeStep, setActiveStep] = React.useState(0);

  const validationpersonal=(data)=>{
    console.log("personal-->",data)
    setValid(data)
    }

    const validationshipping=(data)=>{
      console.log("shipping ",data)
      setValid(data)

    }
  const pay=()=>{
    setPaid(true);
    setActiveStep(3)
    console.log("in checkpout",activeStep)
  }
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });
     
  
//const formOptions = { resolver: yupResolver(validationSchema) };



  const getStepContent=(step)=>{
     //const { errors } = formState;
    
        const onSubmit=(data) =>{
          console.log("form data",data)
            // display form data on success
    
            //alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
            //return false;
        }
    
    switch (step) {
      case 0:
        return (
          <>
         <Personaldetailform onSubmittedpersonalform={(data)=>validationpersonal(data)}></Personaldetailform>
         
          </>
        );
  
      case 1:
        return (
          <>
          
           <Shippingform onSubmittedshipppingform={(data)=>validationshipping(data)}></Shippingform>
            
          </>
        );
      case 2:
        return (
          <>
             {/* <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              name="cardNumber"
            />
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              name="cardMonth"
              
            />
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              name="cardYear"
            /> */}
            <Paypal onPayment={()=>pay()} totalPrice={props.price}></Paypal>
            {/* <Paypaldocs></Paypaldocs> */}
          </>
        );
      default:
        return "unknown step";
    }
  }

  //let activeStep = props.data;

  console.log("in checkout component",props);
  console.log("in checkout component",paid)

  
  

  const handleNext = () => {

    props.onNext();
    //setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {

    props.onBack();
   // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <Grid  container spacing={2}>
    <Grid item xs={2}>
      {/* <Item>xs=8</Item> */}
    </Grid>
   
    <Grid style={{ marginTop: 30, }} item xs={8}> 
    <Card style={{backgroundColor: '#f0f0f0' }} >
      <CardContent>
    <Box sx={{ width: '100%' }}>
      
      {paid===true ? (<Dialogs></Dialogs>):(
          <>
          <Stepper activeStep={props.data}>
        {steps.map((label, index) => {
    
          return (
            <Step>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {getStepContent(props.data)}
      <div style={{paddingTop:10,paddingBottom:10,float:'right'}}>
          <Button style={{marginRight:10}} variant="contained" color="primary" onClick={handleBack} disabled={props.data === 0}>Back</Button>
          { !valid  ? (<Button  variant="contained" color="primary" onClick={handleNext} disabled >Next</Button>):
          (<Button  variant="contained" color="primary" onClick={handleNext}  >Next</Button>)
          }
        
        </div>
     </>
     )
     }

     {}
     
    </Box>
    
    </CardContent>
      </Card >
    </Grid>
    
    <Grid item xs={2}>
      {/* <Item>xs=4</Item> */}
    </Grid>
    
  </Grid>
    
  );
            }

export default Checkout;