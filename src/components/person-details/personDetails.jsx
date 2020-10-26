import React from 'react';

import './personDetails.scss';

const PersonDetails = ({ personInfo }) => {
  return (
    personInfo
    ?
      <div className="Details-container">
        <div className="Section">
          General Information
          <div className="Section-item">
            <div className="Section-item-title">
              Eye Color
            </div>
            <div className="Section-item-value">
              { personInfo.eyeColor.charAt(0).toUpperCase() + personInfo.eyeColor.slice(1) }
            </div>
          </div>
          <div className="Section-item">
            <div className="Section-item-title">
              Hair Color
            </div>
            <div className="Section-item-value">
              { personInfo.hairColor.charAt(0).toUpperCase() + personInfo.hairColor.slice(1) }
            </div>
          </div>
          <div className="Section-item">
            <div className="Section-item-title">
              Skin Color
            </div>
            <div className="Section-item-value">
              { personInfo.skinColor.charAt(0).toUpperCase() + personInfo.skinColor.slice(1) }
            </div>
          </div>
          <div className="Section-item">
            <div className="Section-item-title">
              Birth Year
            </div>
            <div className="Section-item-value">
              { personInfo.birthYear.charAt(0).toUpperCase() + personInfo.birthYear.slice(1) }
            </div>
          </div>
        </div>
        {
          Object.values(personInfo.vehicleConnection.vehicles).length
          ?
          <div className="Section">
          Vehicles
          {
            Object.values(personInfo.vehicleConnection.vehicles).map((vehicle, idx) => 
              <div className="Section-item" key={idx}>
                <div className="Section-item-title">
                  { vehicle.name }
                </div>
              </div>
            )
          }
          </div>
          : null
        }
      </div>
    : null
  )
}

export default PersonDetails;