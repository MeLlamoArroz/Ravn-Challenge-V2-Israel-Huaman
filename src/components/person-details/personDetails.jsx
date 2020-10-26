import React from 'react';

import './personDetails.scss';

const PersonDetails = () => {
  return (
    <div className="Details-container">
      <div className="General-information">
        General Information
        <div className="Eye-color">
          <div className="Eye-color-title">
            Eye Color
          </div>
          <div className="Eye-color-value">
            Eye Color Name
          </div>
        </div>
        <div className="Hair-color">
          <div className="Hair-color-title">
            Hair Color
          </div>
          <div className="Hair-color-value">
            Hair Color Name
          </div>
        </div>
        <div className="Skin-color">
          <div className="Skin-color-title">
            Skin Color
          </div>
          <div className="Skin-color-value">
            Skin Color Name
          </div>
        </div>
        <div className="Birth-year">
          <div className="Birth-color-title">
            Birth Color
          </div>
          <div className="Birth-color-value">
            Birth Color Name
          </div>
        </div>
      </div>
      <div className="Vehicles">

      </div>
    </div>
  )
}

export default PersonDetails;