import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    contact: Yup.string()
    .max(10, "max is 10")
    .required('Contact No is required'),
  });
  
  
//   const { register, handleSubmit, formState } =  useForm({
//     mode: "onChange" // I want to change it to onBlur
//   });;
  //const { isValid, touchedFields, errors } = formState;

  const Personaldetailform=(props)=>{

    const Validation=(data)=>{

    props.onSubmittedpersonalform(data)
    
    }

    const { register, handleSubmit, formState:{ errors,isValid } } = useForm({
    mode: "onChange" ,// I want to change it to onBlur
    resolver: yupResolver(validationSchema),
      });
      const onSubmit=(data) =>{
          console.log(data.firstName)
        console.log("form data",data)
      }

    return (
    <div className="card m-3">
            <h5 className="card-header">Enter personal Detail</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>First Name</label>
                            <input name="firstName" type="text" placeholder="Enter Your First Name" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group col-5">
                            <label>Last Name</label>
                            <input name="lastName" type="text" placeholder="Enter Your Last Name" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Email</label>
                            <input name="email" type="text" placeholder="Enter Your Email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Contact No</label>
                            <input name="contact" type="text"  placeholder="Enter Your Contact No" {...register('contact') } className={`form-control ${errors.contact ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.contact?.message}</div>
                        </div>
                    </div>
                    
                    <div style={{paddingTop:10}} className="form-group">
                        <button type="submit" onClick={()=>Validation(isValid)} disabled={!isValid} className="btn btn-primary mr-1">Submit</button>
                        {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                    </div>
                </form>
            </div>
        </div>
         

)
  }
  
  export default Personaldetailform;