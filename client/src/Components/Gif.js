import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt="" onClick={pickGif}/>
  </li>
);


const pickGif = (e) => {
  console.log(e.target)
}

export default Gif;