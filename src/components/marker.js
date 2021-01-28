import React from 'react';
import '../App.css';

const Marker = () => {
    
    return (
        <div>
            <div className="pin bounce"
                style={{ cursor: 'pointer'}}
                title={'marker'}
            />

            <div className="pulse" />
        </div>      

    );
  };

  export default Marker;