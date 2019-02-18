import React, { Component } from 'react';
import '../App2.css';
//* This is the background for the sign up page. (A wallpaper of gifs)
// 12x12 grid. 8 gifs?

export default class Gallery extends Component {
  render(){
    return(
      <div className="gallery-container">
        <div className="gallery"> 
          <figure className="gallery__item gallery__item--1">
            <img src="https://media.giphy.com/media/3o7btXv9i4Pnjb1m0w/giphy.gif" className="gallery_gif" alt="" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src="https://media.giphy.com/media/8UGExSQNcx97skuyxB/giphy.gif" className="gallery_gif" alt="" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src="https://media.giphy.com/media/l0ExayQDzrI2xOb8A/giphy.gif" className="gallery_gif" alt="" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src="https://media.giphy.com/media/ff0dv4KMGxjna/giphy.gif" className="gallery_gif" alt=""/>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src="https://media.giphy.com/media/3EjqRNFJmn0C4/giphy.gif" className="gallery_gif" alt=""/>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src="https://media.giphy.com/media/lEc7pLgBpipbi/giphy.gif" className="gallery_gif" alt=""/>
          </figure>
          {/* <figure className="gallery__item gallery__item--7">
            <img src="https://media.giphy.com/media/11caEgnSDg0avS/giphy.gif" className="gallery_gif" alt=""/>
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src="https://media.giphy.com/media/3oGNDk2Ue1PbGr8qty/giphy.gif" className="gallery_gif" alt=""/>
          </figure> */}
        </div>
      </div>
    )
  }
}






