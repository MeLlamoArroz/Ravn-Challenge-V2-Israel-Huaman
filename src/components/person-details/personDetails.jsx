import React from 'react';

import './personDetails.scss';

const PersonDetails = () => {
  return (
    <div className="Details-container">
      <div className="Section">
        General Information
        <div className="Section-item">
          <div className="Section-item-title">
            Eye Color
          </div>
          <div className="Section-item-value">
            Eye Color Name
          </div>
        </div>
        <div className="Section-item">
          <div className="Section-item-title">
            Hair Color
          </div>
          <div className="Section-item-value">
            Hair Color Name
          </div>
        </div>
        <div className="Section-item">
          <div className="Section-item-title">
            Skin Color
          </div>
          <div className="Section-item-value">
            Skin Color Name
          </div>
        </div>
        <div className="Section-item">
          <div className="Section-item-title">
            Birth Color
          </div>
          <div className="Section-item-value">
            Birth Color Name
          </div>
        </div>
      </div>
      <div className="Section">
        Vehicles
        <div className="Section-item">
          <div className="Section-item-title">
            Snowspeeder
          </div>
        </div>
        <div className="Section-item">
          <div className="Section-item-title">
            Imperial Speeder Bike
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonDetails;