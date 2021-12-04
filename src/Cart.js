import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useHistory } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontSize: 23,
    paddingTop: 30,
    paddingRight: 40,
    paddingLeft: 40

  },
  MuiTableCell: {
    color: "#000000",
    fontWeight: 'bold',
    lineHeight: 1.5,

  },

  cost: {
    position: 'relative',
    /* float: left; */
    float: 'right',
    paddingRight: 346,
    /* padding-bottom: 10px; */
    paddingTop: 24
  },

});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Cart = (props) => {


  const deleteItem = (del) => {

    props.onRemove(del)
    //props.onDelete(del);

  }
  const increase = (incdata) => {
    props.onIncrease(incdata);


  };

  const decrease = (item) => {
    props.onDecrease(item);

  }
  //const[item,setItem]=useState([]);
  const classes = useStyles();

  const history = useHistory();

  let cartItem = props.data;

  console.log("in cart component-->", props);

  const uniqueAddresses = Array.from(new Set(cartItem.map(a => a.id)))
    .map(id => {
      return cartItem.find(a => a.id === id)
    })
  //console.log("without duplicate", uniqueAddresses)
  //total price

  const totalPrice = uniqueAddresses.map(data => data.count * data.price).reduce((acc, value) => {
    const updatedSum = acc + value;
    return updatedSum;

  }, 0);
  console.log("sum is", totalPrice)
  const convert = (data) => {
    return data.toFixed(3)
  }

  const checkout = () => {

     {localStorage.getItem('token') == null ? (history.push("/cart")): (history.push("/checkout"))}
    
    
  }

  return (
    <>
      {/* <p>Cart Detail</p> */}
      <Grid container spacing={10} >
        <Grid item xs={1}>
          {/* <Item>xs=8</Item> */}
        </Grid>
        <Grid item xs={8}>
          {/* <Item> */}
          <TableContainer style={{ marginTop: 30, backgroundColor: '#f0f0f0' }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.MuiTableCell}>Product</TableCell>
                  <TableCell className={classes.MuiTableCell}>Description</TableCell>
                  <TableCell className={classes.MuiTableCell} >Quantity</TableCell>
                  <TableCell className={classes.MuiTableCell} align="right">PRICE</TableCell>
                  <TableCell className={classes.MuiTableCell} align="right">ACTION</TableCell>
                  <TableCell className={classes.MuiTableCell} align="right">Total Price</TableCell>
                  <TableCell className={classes.MuiTableCell} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {uniqueAddresses.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                {row.id}
                
              </TableCell> */}
                    <TableCell ><img src={row.image} style={{ height: 80, width: 80 }} /></TableCell>
                    <TableCell >{row.title}</TableCell>
                    <TableCell >{row.count}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">

                      <Button variant="contained" style={{ backgroundColor: '#1976d2', color: 'white' }} onClick={() => increase(row)}>
                        +
                      </Button>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input style={{ width: 53, textAlign: 'center' }} readOnly value={row.count}></input>
                      </div>
                      <Button variant="contained" color="secondary" onClick={() => decrease(row)}>
                        -
                      </Button>
                    </TableCell>
                    <TableCell align="right">{row.count * row.price}
                    </TableCell>
                    <TableCell align="right">


                      <Button variant="contained" color="secondary" onClick={() => deleteItem(row)} >Remove</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* </Item> */}
        </Grid>
        <Grid item xs={2}>
          <Card style={{ marginTop: 30, backgroundColor: '#f0f0f0' }} sx={{ minWidth: 275 }}>
            <CardContent>
              {/* <Typography sx={{ fontSize: 14 }}  >
          Word of the Day
        </Typography> */}
              <Typography variant="h5" component="div">
                Total Bill
                <Divider></Divider>
              </Typography>
              <Typography style={{ paddingTop: 30 }} sx={{ mb: 1.5 }} component="div">
                <span style={{ fontWeight: 500 }}>Total Price:</span> &#8377;<span style={{ paddingLeft: 6, fontWeight: 500 }}> {totalPrice}</span>
                <span style={{ paddingLeft: 155 }}></span>
              </Typography>
              {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
            </CardContent>

            <CardActions style={{ paddingLeft: 50 }}>
              {localStorage.getItem('token') == null ? (
                <Tooltip title="Please Sign In" arrow placement="left-start">
                  <Button variant="contained" color="secondary" onClick={() => checkout()} >Procced to Buy</Button>
                </Tooltip>) :

                (<Button variant="contained" color="secondary" onClick={() => checkout()} >Procced to Buy</Button>)}

            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={1}>
          {/* <Item>xs=4</Item> */}
        </Grid>



      </Grid>
    </>
  )
}
export default Cart;