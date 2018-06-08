import React from "react";

const Whoops404 = props => {
  return (
    <div className="error_banner">
      <div className="container mx-auto">
        <h4>Uh-oh... Something in the background crashed.</h4>
        <button className="btn fadedbutton active" aria-pressed="true" > Refresh site</button>
      </div>
    </div>
  );
};

export default Whoops404;
