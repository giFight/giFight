import React from 'react';
import ConvoItem from './ConvoItem';

const ConvoThread = props => { 
  const styles = {
    convoStyles: {
      // listStyle: 'none',
      // display: 'flex',
      // flexWrap: 'wrap',
    }
  };

  const gifs = props.data.map(url => {
    return <ConvoItem url={url} key={url} />
  });
  
  
  return(
    <div className='inner-convo-container'>
      <ul className="convo-thread" style={styles.listStyles}>
        {gifs}
      </ul> 
    </div>
  );
}

export default ConvoThread;