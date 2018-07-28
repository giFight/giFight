import React from "react";
import "./TopicBtn.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


const TopicBtn = props => { 
  
  //Arrays of topics (Each array is a different color)
  const topicList = ["Friday", "Hungover", "My weekend", "Where's David", "Me at work", "Cats on drugs"];
  const topicListTwo = ["Where's Waldo", "Hello", "My weekend", "Where's David", "Me at work", "I need food"];
  const topicListThree = ["Where's Waldo", "Hello", "My weekend", "HIIIIII", "Me at work", "I need food"];

  let topics = topicList.map(topic =>
    <button type = "button" className="btn btn-success"> {topic} </button>
  );
  <br></br>
  let topicsTwo = topicListTwo.map(topic =>
    <button type = "button" className="btn btn-danger"> {topic} </button>
  );
  let topicsThree = topicListThree.map(topic =>
    <button type = "button" className="btn btn-info"> {topic} </button>
  );
  
  return(
    <div className='inner-container'>
      <ul className="topic-list" >
        {topics}
        {topicsTwo}
        {topicsThree}
      </ul> 
    </div>
  );
}

export default TopicBtn;