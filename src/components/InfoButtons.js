import React from "react";

import "./InfoButtons.css";

function InfoButtons() {
  return (
    <div className="buttons_div">
      <div className="main_div">
        <button type="button">
          <i className="fas fa-shopping-cart"></i> სამომხმარებლო კალათა
        </button>
      </div>
      <div className="main_div">
        <button type="button">
          <i className="far fa-newspaper"></i> პრეს რელიზი
        </button>
      </div>
    </div>
  );
}

export default InfoButtons;
