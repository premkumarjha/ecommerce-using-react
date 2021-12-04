import React, { useState, useEffect, useRef } from 'react'
//import { ListGroup, ListGroupItem } from 'reactstrap'
import Typography from '@mui/material/Typography';
import Checkout from './Checkout';

const Paypal =(props) =>{
    const { items, total } = props
    const [paid, setPaid] = React.useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    console.log("in pypal component-->",props);

    // if(paid){
    //   const payment=()=>{

    //   }
    // }
    

   useEffect(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Your description",
                    amount: {
                      // currency_code: "INR",
                      value: props.totalPrice,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
                // This function captures the funds from the transaction.
              const order = await actions.order.capture();
              //props.onPayment()
              setPaid(true);
              console.log(order);
            },
            onError: (err) => {
            //   setError(err),
              console.error(err);
            },
          })
          .render(paypalRef.current);
      }, []);

    if (paid) {
        return (
          <>
          {paid === true ? (props.onPayment()):(<Typography variant="h5" align='center' sx={{ mt: 2, mb: 3 }}>
          Error in processing order. Please Retry again
          </Typography>)}
          {/* <Checkout payment={paid}></Checkout> */}
          {/* <Typography variant="h5" align='center' sx={{ mt: 2, mb: 3 }}>
         successfull payment !!!
         </Typography> */}
         </>
        )
    }

    if (error) {
        return (
            <div>
                Error in processing order. Please Retry again
            </div>
        )
    }

    return (
        <div style={{marginLeft:99,paddingTop:30}}>
          <h4>Total Amount in Rs. : {props.totalPrice} /-</h4>
          <div ref={paypalRef} />
        </div>
      );
}

export default Paypal