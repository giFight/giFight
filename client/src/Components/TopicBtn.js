import React from "react";
import "./TopicBtn.css";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


const TopicBtn = props => { 
  
  //Arrays of topics (Each array is a different color)
  const topicList = ["Friday", "Hungover", "My weekend", "Where's David?", "Me at work", "Cats", "Dogs"];
  const topicListTwo = ["Where's Waldo?", "Sunday Funday", "YOLO", "Shots o' clock", "Me at work", "People of Bart"];
  const topicListThree = ["LIT", "Love", "Selfie", "Motivation", "I'm done", "I need food", "Aloha"];
  const topicListFour = ["My family", "Walmart People", "Trump", "JJ"]

  let topics = topicList.map(topic =>
    <button type = "button" className="btn btn-success"> {props.name} </button>
  );
  
  let topicsTwo = topicListTwo.map(topic =>
    <button type = "button" className="btn btn-danger"> {topic} </button>
  );
  let topicsThree = topicListThree.map(topic =>
    <button type = "button" className="btn btn-info"> {topic} </button>
  );
  let topicsFour = topicListFour.map(topic =>
    <button type = "button" className="btn btn-success"> {topic} </button>
  );
  
  return(

    <button type = "button" className="btn btn-danger"> {props.name} </button>

  );
}




export default TopicBtn;