import React, { useState } from 'react';
import { Data } from './Data';

const Popup = () => {

    const [popup, setPopup] = useState(false);
    const showPopup = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false)
    }
  return (
    <div className='popup-window'>

        {popup ? <div className="backdrop" onClick={closePopup}></div> : null }
        
        <button className='show-popup' type='button' onClick={showPopup}>Show popup</button>
        {popup ? 
            <div className="card">
                <div className="title">
                    <h2>Theme Color</h2>
                    <h3>Change Theme</h3>
                </div>

                {Data.map((colors) => (
                    <div className="colors">
                        <p>{ colors.element }</p>
                        <div className="show-color">
                            <p>{ colors.hexColor }</p>
                            <div className={`color ${colors.class}`}>{ colors.color }//</div>
                        </div>
                    </div>
                ))}

                <div className="buttons">
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div> : null
        
        }
    </div>
  )
}

export default Popup;