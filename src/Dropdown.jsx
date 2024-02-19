import './Dropdown.css';
import { useState } from 'react';
function Dropdown(prop) {

    const [isActive, setIsActive] = useState(false);
    const arrowStyle = {
        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    };
    return (

        <div className="dropdown">
            <div className="dropdown-button" onClick={() => {
                setIsActive(!isActive);
                
            }}>
                <p>{prop.title}</p>
                <img src="./src/assets/arrow-down.svg" style={arrowStyle} alt="" />
            </div>
            {isActive && (
                <form className="dropdown-content ">
                    <div className="dropdown-form-item">
                        <input type="text" id="school" className="form-control" placeholder=" " required />
                        <label htmlFor="school" className="form-label">{prop.firstFormLabel}</label>
                    </div>
                    <div className="dropdown-form-item">
                        <input type="text" id="degree" className="form-control" placeholder=" " required />
                        <label htmlFor="degree" className="form-label">{prop.secondFormLabel}</label>
                    </div>
                    <div className="dropdown-form-item unspan">
                        <input type="date" id="start-date" className="form-control" placeholder="" required />
                        <label htmlFor="start-date" className="form-label">Start date</label>
                    </div>
                    <div className="dropdown-form-item unspan">
                        <input type="date" id="end-date" className="form-control" placeholder="" required />
                        <label htmlFor="end-date" className="form-label">End date</label>
                    </div>
                    <div className="dropdown-form-item">
                        <button type="submit" className="primary">Save</button>
                        <div className='button-container'>
                            <button type="" className="primary">Cancel</button>
                            <button type="" className="primary">Delete</button>
                        </div>


                    </div>
                </form>
            )}

        </div>

    )
}


export default Dropdown;