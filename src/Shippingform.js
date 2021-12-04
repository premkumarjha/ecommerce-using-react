import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

    address1: Yup.string()
        .required('Address 1 is required'),
        address2: Yup.string()
        .required('Address 2 is required'),
    state: Yup.string()
        .required('State is required'),
    country: Yup.string()
        .required('Country is required'),
    pincode: Yup.string()
    .max(6, "max is 6")
    .required('pincodee is required'),
    
    
  });
  
  
//   const { register, handleSubmit, formState } =  useForm({
//     mode: "onChange" // I want to change it to onBlur
//   });;
  //const { isValid, touchedFields, errors } = formState;

  const Shippingform=(props)=>{

    const Validation=(data)=>{

    props.onSubmittedshipppingform(data)
    
    }

    const { register, handleSubmit, formState:{ errors,isValid } } = useForm({
    mode: "onChange" ,// I want to change it to onBlur
    resolver: yupResolver(validationSchema),
      });
      const onSubmit=(data) =>{
         
        console.log("form data",data)
      }

    return (
    <div className="card m-3">
            <h5 className="card-header">Enter Shipping Detail</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Address </label>
                            <input name="address1" type="text" {...register('address1')} className={`form-control ${errors.address1 ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.address1?.message}</div>
                        </div>
                        <div className="form-group col-5">
                            <label>Address 2</label>
                            <input name="address2" type="text" {...register('address2')} className={`form-control ${errors.address2 ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.address2?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>State</label>
                            <input name="state" type="text" {...register('state')} className={`form-control ${errors.state ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.state?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Country</label>
                            <input name="country" type="text" {...register('country')} className={`form-control ${errors.country ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.country?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Pincode</label>
                            <input name="pincode" type="text" {...register('pincode' ,{maxLength:6}) } className={`form-control ${errors.pincode ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.pincode?.message}</div>
                        </div>
                    </div>
                   
                    
                    
                    <div style={{paddingTop:10}} className="form-group">
                        <button type="submit" onClick={(data)=>Validation(isValid)} disabled={!isValid} className="btn btn-primary mr-1">Submit</button>
                        {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                    </div>
                </form>
            </div>
        </div>
         

)
  }
  
  export default Shippingform;