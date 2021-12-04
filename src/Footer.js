import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import './Footer.css';
import { red } from '@mui/material/colors';
import { fab } from "@fortawesome/free-brands-svg-icons";

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

  
const Footer=()=>{

    return (
  //     <Box sx={{ flexGrow: 1 }}>
      
  //     <AppBar style={{position:'relative',
  //  bottom:0,
  // height:130,
  
  
   
  //  }} color="primary" sx={{ top: 'auto', bottom: 0 }}>
  //       <Toolbar>
  //         <IconButton
  //           size="large"
  //           edge="start"
  //           color="inherit"
  //           aria-label="menu"
  //           sx={{ mr: 2 }}
  //         >
  //         </IconButton>
  //         <Typography style={{textAlign:'center'}}>
  //           Footer
  //         </Typography>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  <>
  
<div >

 
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: '#1c2331',marginTop:100}}
          >
    {/* <!-- Section: Social media --> */}
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: '#1976d2'}}
             >
      {/* <!-- Left --> */}
      <div className="me-5">
        <span >Get connected with us on social networks:</span>
      </div>
      {/* <!-- Left --> */}

      {/* <!-- Right --> */}
      <div>
        <a href="https://www.facebook.com/
        " className="text-white me-4">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.google.com/" className="text-white me-4">
          <i className="fa fa-google"></i>
        </a>
        <a href="https://www.instagram.com/" className="text-white me-4">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/login" className="text-white me-4">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/" className="text-white me-4">
          <i className="fa fa-github"></i>
        </a>
      </div>
      {/* <!-- Right --> */}
    </section>
    {/* <!-- Section: Social media --> */}

    {/* <!-- Section: Links  --> */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: 60, backgroundColor: '#7c4dff', height: 2}}
                />
            <p>
            Krishana Shopping center
            </p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: 60, backgroundColor: '#7c4dff', height: 2}}
                />
            <p>
              <a href="#!" className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-white">Bootstrap Angular</a>
            </p>
          </div>
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: 60, backgroundColor: '#7c4dff', height: 2}}
                />
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: 60, backgroundColor: '#7c4dff', height: 2}}
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div
         class="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >KrishanaShoppingcenter.com</a
        >
    </div>
    
  </footer>
 

</div>

  </>
    )

}

export default Footer;