import React from "react";
import "./TopicBtn.css";




const TopicBtn = props => { 
  

  const classArray = ['btn btn-success', 'btn btn-danger', 'btn btn-info', 'btn btn-warning', 'btn btn-primary', 'btn btn-primary']
  const randomClassName= classArray[Math.floor(Math.random() * classArray.length)]
  
  return(

    <a href={`/convo/${props.id}`}><button type = "button" className={`${randomClassName}`}> {props.name} </button></a>

  );
}




export default TopicBtn;