import './Dropdown.css';
import { useState } from 'react';
function Dropdown() {
    const [isActive, setIsActive] = useState(false); 
    return (

        <div className="dropdown">
            <div className="dropdown-button" onClick={() =>{
                setIsActive(!isActive);
            }}>
                <p>Choose one</p>
                <img src="./src/assets/arrow-down.svg" alt="" />
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">item+</div>
                        <div className="dropdown-item">item+</div>
                        <div className="dropdown-item">item+</div>
                    </div>
                )}

        </div>

    )
}


export default Dropdown;