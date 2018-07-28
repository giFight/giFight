import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  const styles = {
    listStyles: {
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    }
  };
  
  const results = props.data;
    let gifs;
    if (results.length > 0){
      gifs = results.map(gif =>
      <Gif url={gif.images.fixed_height.url} key={gif.id} selectedGif={props.selectedGif} />);
    } else {
      gifs= <NoGifs />
    }
  
  
  return(
    <div className='inner-container'>
      <ul className="gif-list" style={styles.listStyles}>
        {gifs}
      </ul> 
    </div>
  );
}

export default GifList;