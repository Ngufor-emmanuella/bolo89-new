import React from 'react';

function Popup(props) {
  return (props.trigge) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn"> hey ella</button>
         { props.children }
      </div>
      
    </div>
  ) : "";
}

export default Popup;
