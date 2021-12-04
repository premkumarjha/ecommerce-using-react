// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// const Product = (props) => {

//   const deleteItem = (id) => {
//     props.onDelete(id)
//     console.log(id);
//     //props.update=false;
//     //props.onDelete(id)
//   };
  
//   const onChangeId = (e, id) => {

//     //console.log("onchangeId-->",e.target.value,id);
//     props.onChangeId(e.target.value, id)
//   }
//   const onChangeDoors = (e, id) => {

//     //console.log("onchangeId-->",e)
//     props.onChangeDoors(e.target.value, id)
//   }
//   const onChangeModel = (e, id) => {

//     //console.log("onchangeId-->",e);
//     props.onChangeModel(e.target.value, id)
//   }
//   console.log(props)
//   return (
//     <table>
//       <tr >
//         <th style={{ paddingRight: 70 }}>Id</th>
//         <th style={{ paddingRight: 70 }}>Model</th>
//         <th style={{ paddingRight: 70 }}>Doors</th>
//         <th style={{ paddingRight: 100 }}>Action</th>
//       </tr>

//       {props.data.Nissan.map(car =>
//         <tbody>
//           {car.updated === false ? (<tr>
//             <td>{car.id}</td>
//             <td>{car.model}</td>
//             <td>{car.doors}</td>
//             <td>
//               {car.updated ? (<Button variant="contained" onClick={() => props.onSave(car.id)} style={{ marginRight: 10 }} size="medium">
//                 save
//               </Button>) : (<Button variant="contained" onClick={() => props.onUpdate(car.id)} style={{ marginRight: 10 }} size="medium">
//                 Update
//               </Button>)}


//               <Button variant="contained" style={{ marginRight: 10 }} onClick={() => deleteItem(car.id)} size="medium">
//                 Delete
//               </Button>

//             </td>
//           </tr>) : (<tr>
//             <td><input onChange={(event) => onChangeId(event, car.id)} type="text" id="standard-basic" defaultValue={car.id} label="Standard" variant="standard" /></td>
//             <td><input onChange={(event) => onChangeModel(event, car.id)} type="text" id="standard-basic" defaultValue={car.model} label label="Standard" variant="standard" /></td>
//             <td><input onChange={(event) => onChangeDoors(event, car.id)} type="text" id="standard-basic" defaultValue={car.doors} labellabel="Standard" variant="standard" /></td>
//             <td>
//               {car.updated ? (<Button variant="contained" onClick={() => props.onSave(car.id)} style={{ marginRight: 10 }} size="medium">
//                 save
//               </Button>) : (<Button variant="contained" onClick={() => props.onUpdate(car.id)} style={{ marginRight: 10 }} size="medium">
//                 Update
//               </Button>)}


//               <Button variant="contained" style={{ marginRight: 10 }} onClick={() => deleteItem(car.id)} size="medium">
//                 Delete
//               </Button>

//             </td>
//           </tr>)}
//         </tbody>

//       )}
//     </table>
//   )
// }
// export default Product;




//below jo hai wo app.js ka part hai jo ki update and delete 


// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import Nav from './Nav';
// import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Product from './Product';
// import Button from '@mui/material/Button';


// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



// //function App() {
// class App extends Component {
  

//   state = {
//     Nissan: [
//       { "id": "1", "model": "Sentra", "doors": 4, "updated": false },
//       { "id": "2", "model": "Maxima", "doors": 4, "updated": false },
//       { "id": "3", "model": "Skyline", "doors": 2, "updated": false },
//       { "id": "4", "model": "kia", "doors": 4, "updated": false }
//     ]
//   }

//   deleteCar(id) {

//     //let cars = [...this.state];

//     this.state.Nissan= this.state.Nissan.filter(data=>data.id!=id);
//    //let carafterdelete = cars.Nissan.filter(data => data.id != id);

//     //console.log("hii i am in app.js id is->", carafterdelete);

//     this.setState(this.state.Nissan)


//   }

//   updateCar(id) {
//     //update prop ko true
//     const cars = [...this.state.Nissan];

//     const updatedcar = cars.filter(data => {

//       if (data.id == id) {
//         data.updated = true;
//       }
//     })
//     this.setState(updatedcar)
//   }

  
//   setId(value, id) {
//     const cars = [...this.state.Nissan];

//     const updatedId = cars.filter(data => {

//       if (data.id == id) {
//         data.id = value;
//       }
//     })
//     this.setState(updatedId)

//   }
//   setModel(value, id) {
//     const cars = [...this.state.Nissan];

//     const updatedModel = cars.filter(data => {

//       if (data.id == id) {
//         data.model = value;
//       }
//     })
//     this.setState(updatedModel)

//   }
//   setDoors(value, id) {

//     const cars = [...this.state.Nissan];

//     const updatedDoors = cars.filter(data => {

//       if (data.id == id) {
//         data.doors = value;
//       }
//     })
//     this.setState(updatedDoors)
//   }

//   saveCar(id) {

//     //update prop ko false kar dena
//     const cars = [...this.state.Nissan];
//     const savedcar = cars.filter(data => {

//       if (data.id == id) {
//         data.updated = false;
//       }
//     })
//     this.setState(savedcar);
//   }
//   onChangecar(e){
//     const cars = [...this.state.Nissan];
// const newCar=e.target.value;
// const listAllCar=[...cars,{newCar}];
// this.setState(listAllCar);
//   }
 
//   render() {
//     return (

//       <Grid container direction="row" spacing={2}>
//         <Grid item xs={12}>
//           <Nav></Nav>
//         </Grid>
//         <Grid item xs={2}>

//         </Grid>
//         <Grid item xs={8}>
//           <Product data={this.state} onDelete={(id) => this.deleteCar(id)} onUpdate={(id) => this.updateCar(id)} onAdd={(id) => this.addCar(id)}
//             onSave={(id) => this.saveCar(id)} update="true"
//             onChangeId={(value, id) => this.setId(value, id)}
//             onChangeDoors={(value, id) => this.setDoors(value, id)}
//             onChangeModel={(value, id) => this.setModel(value, id)}

//           ></Product>
//         </Grid>
//         <Grid item xs={2}>
       
//         </Grid>
//         <Grid item xs={12}>
          
//         </Grid>
        
//       </Grid>


//     );
//   }
// }



// export default App;
