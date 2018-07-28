import React from 'react';

const ConvoItem = props => (
  <div className="convoGif" style={{margin:'.5rem'}}>
    <img src={props.url} alt="" onClick={likeGif}/>
  </div>
);


const likeGif = (e) => {
  console.log(e.target)
}

export default ConvoItem;