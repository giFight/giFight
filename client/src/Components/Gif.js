import React from 'react';

const Gif = props => (
  <li className="gif-wrap" style={{margin:'.5rem'}}>
    <img src={props.url} alt="" onClick={pickGif}/>
  </li>
);


const pickGif = (e) => {
  console.log(e.target)
}

export default Gif;