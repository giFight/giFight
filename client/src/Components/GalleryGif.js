import React from 'react';

//* this component is the gif itself on the gif wallpaper background. 

const Gifs = [{
  src:"https://media.giphy.com/media/8UGExSQNcx97skuyxB/giphy.gif"
},
{
  src:"https://media.giphy.com/media/3o7btXv9i4Pnjb1m0w/giphy.gif"
},
{
  src:""
},
{
  src:""
},
{
  src:""
},
{
  src:""
},
{
  src:""
},
{
  src:""
},
{
  src:""
},
{
  src:""
},
]





const Gallerygif = props => (
  <figure className="gallery">
    <img src={props.url} className="gallery__img" alt="" />
  </figure>
)
export default Gallerygif;