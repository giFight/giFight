import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CreateBtn = props => (
  <span className="create-btn btn btn-danger" style={{marginTop:''}} {...props}>
    Create
  </span>
);

export default CreateBtn;