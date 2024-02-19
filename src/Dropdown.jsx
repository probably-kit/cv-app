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
                <svg style={arrowStyle} width="4em" height="4em" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
</svg>
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