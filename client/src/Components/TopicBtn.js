import React from "react";
import {Link} from "react-router-dom";
import "./TopicBtn.css";




const TopicBtn = props => { 
  

  const classArray = ['btn btn-success', 'btn btn-danger', 'btn btn-info', 'btn btn-warning', 'btn btn-primary', 'btn btn-primary']
  const randomClassName= classArray[Math.floor(Math.random() * classArray.length)]
  
  return(

    <Link to={`/convo/${props.id}`}><button type = "button" className={`${randomClassName}`}> {props.name} </button></Link>

  );
}




export default TopicBtn;