// import React from "react";
// import ReactDOM from "react-dom"

// const PayPalButton =window.paypal.Buttons.driver("react", { React, ReactDOM });

// class Paypaldocs extends React.Component {
//   createOrder(data, actions) {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: "0.01",
//           },
//         },
//       ],
//     });
//   }

//   onApprove(data, actions) {
//     return actions.order.capture();
//   }

//   render() {
//     return (
//       <PayPalButton
//         createOrder={(data, actions) => this.createOrder(data, actions)}
//         onApprove={(data, actions) => this.onApprove(data, actions)}
//       />
//     );
//   }
// }

// export default Paypaldocs;