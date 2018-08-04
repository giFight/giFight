import React from 'react';
import "./Footer.css";
import Giphy from '../logo/giphy.png'



const Footer = ({children}) => (
  
  //Copyright 
 
  <footer className="page-footer font-small mdb-color lighten-3 pt-4">

  
    <div className="container-main">

      
      <div className="row">

        
        <div className="col-lg-2 col-md-12 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media2.giphy.com/media/lAqwNegAjH8mQ/200.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>  
          </div>

        </div>
      

        
        <div className="col-lg-2 col-md-6 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media3.giphy.com/media/srb6bXZHbgDsc/giphy.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div> 
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-6 mb-4">

          <div className="view overlay z-depth-1-half">
            <img src="https://media3.giphy.com/media/iyot1GpzSkSqY/giphy.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-12 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media2.giphy.com/media/a8XivWE78nwvm/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
              
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-6 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media2.giphy.com/media/26gsa41wxcaHWcYMg/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
              
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-6 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media1.giphy.com/media/qvDlmf39EGhCU/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
             
              
          </div>

        </div>
        {/*Grid column */}

      </div>
      {/*Grid Row */}

    
  

    {/*Copyright */}
    <div className="footer-copyright text-center py-3"> 
    <p> <img src={Giphy}/> </p>
    <p>© 2018 Copyright: Fire Breathing Rubber Duckies </p>
     
    </div>


</div>

  </footer>
);





export default Footer;