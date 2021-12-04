import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import CarouselSlide from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const Carousell=(props)=>{
    const items = [
        {image: 'https://rukminim1.flixcart.com/flap/1688/280/image/dd13dc9aa97c0ed4.jpeg?q=50'}, 
        {image: 'https://rukminim1.flixcart.com/flap/1688/280/image/8091031a2235c8ff.jpg?q=50'},
        {image: 'https://rukminim1.flixcart.com/flap/844/140/image/f89716b7083269e6.jpg?q=50'}, 
        {image: 'https://rukminim1.flixcart.com/flap/1688/280/image/9955621ee756b877.jpeg?q=50'}, 
        {image: 'https://rukminim1.flixcart.com/flap/1688/280/image/6fe4941782bbb55c.jpg?q=50'},
        {image: 'https://rukminim1.flixcart.com/flap/1688/280/image/ff938f15fd1feb73.jpg?q=50'}, 
        {image: 'https://rukminim1.flixcart.com/flap/1688/280/image/57538e067f1a2c45.jpg?q=50'},
      ];

    return (
        <div >
        <Carousel  autoPlay interval='1000' NavButtonsAlwaysVisible="true"  indicators= 'false'      animation="slide">
            {items.map((item, i) => (
                // <Item key={i} {...item} />
                <CarouselSlide key={item} >
                <Card indicators= "false">
                    <CardMedia
                        image={item.image}
                       
                        style={{
                            height: 0,
                            paddingTop: '25%',
                        }}
                    />
                    {/* <CardContent>
                        <Typography>{title}</Typography>
                    </CardContent> */}
                </Card>
            </CarouselSlide>
            ))}
        </Carousel>
        </div>
    );
}

const Item = ({name, description}) => {
    return (
        <Paper>
            <h2>{name}</h2>
            <p>{description}</p>
            {/* <Button>more info...</Button> */}
        </Paper>
    );
};

export default Carousell;