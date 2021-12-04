import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Items from './Items';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Cart from './Cart';
import Checkout from './Checkout';
import Footer from './Footer'
import { useState, useEffect } from 'react';
import Dialogs from './Dialog';
import Paypal from './Paypal';
import Signin from './Signin';
import Signup from './signup';
import Carousell from './Carousel';

const App = () => {

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [activeStep, setActiveStep] = React.useState(0);

  const [paid, setPaid] = React.useState(false);
  
  const [token,setToken]=useState("");

  const [refresh,setRefresh]=useState(false);

  const [login,setLogin]=useState(false)

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const productArry=[];
  //onst [item, setItem] = useState([])

  const addItem = (data) => {

    setCart([...cart, data]);
    //jab ham koi operaion inside...then we need to return....
    const updateProductCount = products.filter(product => {
      //if ye conditon hai to is pe required changes and remain ko as it is return
      if (product.id == data.id) {
        product.count = product.count + 1;
      }
      return product;
    })
    setProducts(updateProductCount)

  }
  const increaseCount = (data) => {

    const uniqueCartItem = removeDuplicateItemFromCart();

    const updatedDataCount = uniqueCartItem.filter(cartItem => {
      if (cartItem.id == data.id) {

        cartItem.count = data.count + 1

      }
      return cartItem;
    })
    setCart(updatedDataCount);

  }

  const decreaseCount = (data) => {

    const uniqueCartItem = removeDuplicateItemFromCart();

    const updatedDataCount = uniqueCartItem.filter(cartItem => {
      if (cartItem.id == data.id && cartItem.count > 1) {
        cartItem.count = data.count - 1;
      }
      return cartItem;
    })
    setCart(updatedDataCount);

  }
  const removeItem = (data) => {

    const items = cart.filter(item => item.id != data.id)
    setCart(items);

  }

  const removeDuplicateItemFromCart = () => {

    const uniqueCartItem = Array.from(new Set(cart.map(a => a.id)))
      .map(id => {
        return cart.find(a => a.id === id)
      });
    return uniqueCartItem;
  }

  const searchItem=(event)=>{
    
    let keyword = event.target.value;
    const lowercasedValue = keyword.toLowerCase();
      //console.log(products);
      const filtered = products.filter(product => {
        if(lowercasedValue === ""){
          return product
        }
       return product.title.toLowerCase().includes(keyword.toLowerCase())
      })
      setProducts(filtered);
    
  }

  const uniqueAddresses = Array.from(new Set(cart.map(a => a.id)))
        .map(id => {
            return cart.find(a => a.id === id)
        })
    //console.log("without duplicate", uniqueAddresses)
//total price

const totalPrice=uniqueAddresses.map(data=>data.count*data.price).reduce( (acc, value) => {
  const updatedSum = acc + value;
  return updatedSum;
  
},0);

const logins=()=>{
setLogin(true)

}

const samePage=()=>{
  setLogin(false)
}

const logout=()=>{

  //setLogin(false)
  setToken("")
}
const signin=(data)=>{
  setLogin(data);
}
// const onToken=(data)=>{
//   setToken(data);
// }

const refreshs=()=>{
setRefresh(true)
}

const setsigninToken=(data)=>{
  setToken(data);
}

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        //const output=json;  
        for (let i = 0; i <= json.length - 1; i++) {
          json[i].count = 0;

        }
        productArry.push(json)
        setProducts(json);

      });

  }, []);


  return (
    <Router>
     
      <Header onSamepage={()=>samePage()} onLogin={()=>logins()} onLogout={()=>logout()} logs={token} item={cart} onSearch={(data)=>searchItem(data)}></Header>
      
      <Switch>
      {/* <Route exact path="/" component={() => <Items data={products} onAdd={(product) => addItem(product)} />} /> */}

        <Route exact path="/" component={Items} >
       
      <Items data={products}  loginToken={token} onAdd={(product) => addItem(product)}></Items>
        </Route> 
        <Route path="/cart" component={() => <Cart log={token} data={cart} onIncrease={(data) => increaseCount(data)} onDecrease={(data) => decreaseCount(data)}
          onRemove={(data) => removeItem(data)}
        />} />
 <Route exact path="/checkout" component={() => <Checkout  price={totalPrice} data={activeStep} onNext={(data) => handleNext(data)}  onBack={(data) => handleBack(data)} />} />
 <Route exact path="/dialog" component={() => <Dialogs  />} />
 <Route exact path="/signin" component={() => <Signin onsig={()=>refreshs()} onSignin={(data)=>signin(data)} setTokens={(data)=>setsigninToken(data)} />} />
 <Route exact path="/signup" component={() => <Signup  />} />
 {/* <Route exact path="/footer" component={() => <Footer  />} /> */}
        {/* <Route path="/explore" component={Checkout} /> */}
      </Switch>
      <Footer></Footer>

    </Router>

  )


}

export default App;
