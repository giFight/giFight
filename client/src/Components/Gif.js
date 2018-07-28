import React from 'react';

const Gif = props => (
  <li className="gif-wrap" style={{margin:'.5rem'}}>
    <img src={props.url} alt="" onClick={(e) => pickGif(e, props)}/>
  </li>
);


const pickGif = (e, props) => {
  console.log(e.target)
  props.selectedGif(e); // pasted from GifList which receives a prop from Search
}

export default Gif;