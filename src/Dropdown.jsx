import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Dropdown.css';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

function Dropdown(props) {
    const [activeMenu, setActiveMenu] = useState('main'); // Controls which menu is active
    const [isActive, setIsActive] = useState(false); // Controls if the dropdown is active
    const [menuHeight, setMenuHeight] = useState(null); // Controls the height of the dropdown
    
    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const handleMenuChange = (menuName) => {
        setActiveMenu(menuName);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleMenuChange('list'); // Switch to 'list' menu after form submission
    };

    return (
        <div className="dropdown">
            <div className="dropdown-button" onClick={() => setIsActive(!isActive)}>
                <p>{props.title}</p>
                <svg style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }} width="4em" height="4em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="black" />
                </svg>
                {/* <ArrowIcon style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }} />  */}
            </div>
            {isActive && (
                <div className='animate-height' style={{height:menuHeight}}>
                    <CSSTransition
                        in={activeMenu === 'main'}
                        unmountOnExit
                        timeout={500}
                        onEnter={calcHeight}
                        classNames="menu-primary">
                        <form className="dropdown-content" onSubmit={handleSubmit}>
                            <div className="dropdown-form-item">
                                <input type="text" id="school" className="form-control" placeholder=" " /*required*/ />
                                <label htmlFor="school" className="form-label">{props.firstFormLabel}</label>
                            </div>
                            <div className="dropdown-form-item">
                                <input type="text" id="degree" className="form-control" placeholder=" " /*required*/ />
                                <label htmlFor="degree" className="form-label">{props.secondFormLabel}</label>
                            </div>
                            <div className="dropdown-form-item unspan">
                                <input type="date" id="start-date" className="form-control" placeholder="" /*required*/ />
                                <label htmlFor="start-date" className="form-label">Start date</label>
                            </div>
                            <div className="dropdown-form-item unspan">
                                <input type="date" id="end-date" className="form-control" placeholder="" /*required*/ />
                                <label htmlFor="end-date" className="form-label">End date</label>
                            </div>
                            <div className="dropdown-form-item">
                                <button type="submit" className="primary">Save</button>
                                <div className='button-container'>
                                    <button type="button" className="primary" onClick={() => setIsActive(false)}>Cancel</button>
                                    <button type="button" className="primary" onClick={() => {/* Implement delete logic */ }}>Delete</button>
                                </div>
                            </div>
                        </form>
                    </CSSTransition>
                    <CSSTransition
                        in={activeMenu === 'list'}
                        unmountOnExit
                        timeout={500}
                        onEnter={calcHeight}
                        classNames="menu-secondary">
                        <div className='dropdown-content'>
                            <div className='dropdown-list-item' >
                            <p>Title</p>
                            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </div>
                            
                            <div className='dropdown-list-item'>
                                <button onClick={() => handleMenuChange('main')}>+ Add</button>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
