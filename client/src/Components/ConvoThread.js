import React from 'react';
import ConvoItem from './ConvoItem';


//* this component is the convo box

const ConvoThread = props => { 
  

  const gifs = props.data.map(url => {
    return <ConvoItem url={url} key={url} />
  });
  
  
  return(
    <div className='inner-convo-container'>
      <ul className="convo-thread">
        {gifs}
      </ul> 
    </div>
  );
}

export default ConvoThread;