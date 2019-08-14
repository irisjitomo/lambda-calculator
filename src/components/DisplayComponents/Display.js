import React from "react";

const Display = (props) => {
  return <div className='display'>
    <div className="display-value">{props.number}</div>
  </div>;
};

export default Display;
