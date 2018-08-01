import React from "react";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const TopicBtn = props => {

  const styles = {
    btnStyles: {
      fontFamily: 'Raleway-SemiBold',
      fontSize: '13px',
      color: rgba(217, 83, 78, 0.75),
      letterSpacing: '1px',
      lineHeight: '15px',
      borderRadius: '40px',
      transition: 'all 0.3s ease 0s'
    }  
  }


  <span className="create-btn btn btn-danger" style={{styles.btnStyles}} {...props}>
    Create
  </span>
};

export default TopicBtn;