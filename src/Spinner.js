import './Spinner.css';
import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui segment spinner">
      <div className="ui active dimmer">
        <div className="ui text loader">
          {props.message}
        </div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading!',
};

export default Spinner;