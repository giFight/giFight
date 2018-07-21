import React from 'react';
import Gif from './Gif';

const GifList = props => { 
  const styles = {
    listStyles: {
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    }
  };
  
  const results = props.data;
  let gifs = results.map(gif =>
    <Gif url={gif.images.fixed_width.url} key={gif.id} />
  );
  
  return(
    <ul className="gif-list" style={styles.listStyles}>
      {gifs}
    </ul> 
  );
}

export default GifList;