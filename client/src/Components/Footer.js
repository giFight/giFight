import React from 'react';
import "./Footer.css";



const Footer = ({children}) => (
  
  //Copyright 
 
  <footer className="page-footer font-small mdb-color lighten-3 pt-4">

  
    <div className="container-main">

      
      <div className="row">

        
        <div className="col-lg-2 col-md-12 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media0.giphy.com/media/v6NlYjkDOEoBG/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>  
          </div>

        </div>
      

        
        <div className="col-lg-2 col-md-6 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media3.giphy.com/media/eDgmbiQcujjsA/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div> 
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-6 mb-4">

          <div className="view overlay z-depth-1-half">
            <img src="https://media3.giphy.com/media/90FH7I3McAQ7u/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-12 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media0.giphy.com/media/4agObsH4umYkIwlYZx/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
              
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-6 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media2.giphy.com/media/uZrLs0rcNc9sA/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
              
          </div>

        </div>
        

        
        <div className="col-lg-2 col-md-6 mb-4">

        
          <div className="view overlay z-depth-1-half">
            <img src="https://media2.giphy.com/media/xTiTnDAP0RiCo9k85W/200w.webp" className="img-fluid" alt="">
            </img>
              <div className="mask rgba-white-light"></div>
          
              
          </div>

        </div>
        {/*Grid column */}

      </div>
      {/*Grid Row */}

    
  

    {/*Copyright */}
    <div className="footer-copyright text-center py-3"> <p>© 2018 Copyright:
      Fire Breathing Rubber Duckies </p>
    </div>


</div>

  </footer>
);





export default Footer;