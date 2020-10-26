import React from 'react';

import './spinner.scss';

// const Spinner = () => {
//   return (
//     <div className="Spinner-overlay">
//       Loading
//       <div className="Spinner-container"/>
//     </div>
//   )
// }

const Spinner = () => {
  return (
    <div className="loading-container">
      <div className="loading bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading-name"> Loading </div>
    </div>
  )
}

export default Spinner;