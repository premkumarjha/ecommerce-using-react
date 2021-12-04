import React, { useState, useEffect } from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Carousell from './Carousel';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Items = (props) => {

  const addCart = (data) => {

    props.onAdd(data);
  }
  console.log("token->",props.loginToken)
  return (
    <div style={{backgroundColor:'#f0f0f0'}}>
    
    {/* <Box sx={{ flexGrow: 1 }} className="prem" style={{marginTop:23,marginBottom:50}}>
    <Grid direction="column" container spacing={3} className="sonu" >
   
    
      <Carousell></Carousell>
     
   
    
      </Grid>
   </Box> */}
    <Box sx={{ flexGrow: 1 }}  >
    {/* <Carousell></Carousell> */}
      <Grid container spacing={3} style={{
        marginTop: 1,
       padding:50
        
      }}  >
        
       
        {props.data.map(product =>
          <Grid item xs={4} 
           >
            {/* //style={{minHeight:400,maxHeight:400}} */}
            <Card style={{
              display: 'flex',gap:16, flexWrap: 'wrap',

              justifyContent: 'space-between',
            }}>

              {/* <CardMedia
                component="img"
                height="300"
                width="300"
                image={product.image}
                alt="green iguana"
              /> */}
              <CardContent style={{height:450,display:'flex',flexDirection:"column"}}>
                <div style={{textAlign:'center'}}>
                <img style={{height:180,width:180}} src={product.image}></img>
                </div>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center'}}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ overflow: 'hidden' }}>
                  {product.description}
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: 20 }}>
                  <div>
                <span style={{backgroundColor:'#388e3c',color:'white',fontSize:17,height: 20,width:45,borderRadius:3,padding:2}}>{product.rating.rate}&#9734;
                </span>
                <span style={{color:"#878787",paddingLeft:8,fontSize:16}}>({product.rating.count})</span>
                </div>
                  <span style={{ fontWeight: 500 }}>Price:</span> &#8377;<span style={{ paddingLeft: 6, fontWeight: 500 }}> {product.price}</span>
                  <span style={{ paddingLeft: 151}}>
                    <Button  variant="contained" style={{backgroundColor:'green',color:'white'}} color="success" onClick={() => addCart(product)}>Add Cart</Button>
                  </span>

                </Typography>
              </CardContent>

            </Card>

          </Grid>
        )}
       
      </Grid>
    </Box>
    </div>
  )

}
export default Items;