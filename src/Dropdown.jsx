import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Dropdown.css';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as EyeOpen } from './icons/eye-open.svg';
import { ReactComponent as EyeClosed } from './icons/eye-closed.svg';
import PropTypes from 'prop-types';

function IconSwitcher() {
    const [currentIcon, setCurrentIcon] = useState('iconOpen');

    const toggleIcon = () => {
        setCurrentIcon(currentIcon === 'iconOpen' ? 'iconClosed' : 'iconOpen');
    };

    return (
        <div style={{ cursor: 'pointer' }} onClick={toggleIcon}>
            {currentIcon === 'iconOpen' ? <EyeOpen /> : <EyeClosed />}
        </div>
    );
}

function DropdownFormItem({ inputTitle, updateFormData }) {
    const [inputValue, setInputValue] = useState('');

    // Update local state and notify the Dropdown component of the change
    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        updateFormData(inputTitle, value); // Notify parent component of the update
    };

    return (
        <div className="dropdown-form-item">
            <input type="text" id={inputTitle} className="form-control" value={inputValue} onChange={handleChange} placeholder="" />
            <label htmlFor={inputTitle} className="form-label">{inputTitle}</label>
        </div>
    );
}

DropdownFormItem.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    updateFormData: PropTypes.func.isRequired
};

function Dropdown({ title, onFormDataChange, children }) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [isActive, setIsActive] = useState(false);
    const [menuHeight, setMenuHeight] = useState(null);
    const [formData, setFormData] = useState([]);
    const [submittedData, setSubmittedData] = useState([]);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const handleMenuChange = (menuName) => {
        setActiveMenu(menuName);
    };

    const updateFormData = (inputTitle, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [inputTitle]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData([...submittedData, formData]);
        onFormDataChange(formData); // Optional: If you want to propagate the change up
        setFormData({}); // Reset form data for the next input
        handleMenuChange('list'); // Switch to 'list' menu after form submission
    };

    return (
        <div className="dropdown">
            <div className="dropdown-button" onClick={() => setIsActive(!isActive)}>
                <p>{title}</p>
                <ArrowIcon style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {isActive && (
                <div className="animate-height" style={{ height: menuHeight }}>
                    <CSSTransition
                        in={activeMenu === 'main'}
                        unmountOnExit
                        timeout={500}
                        onEnter={calcHeight}
                        classNames="menu-primary">
                        <div className="dropdown-content">
                            <form className="grid-container" onSubmit={handleSubmit}>
                                {React.Children.map(children, child => {
                                    if (React.isValidElement(child)) {
                                        return React.cloneElement(child, { updateFormData: updateFormData });
                                    }
                                    return child;
                                })}
                                <div className="dropdown-form-item">
                                    <button type="submit" className="primary">Save</button>
                                    <button type="button" className="secondary" onClick={() => handleMenuChange('list')}>View List</button>
                                </div>
                            </form>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={activeMenu === 'list'}
                        unmountOnExit
                        timeout={500}
                        onEnter={calcHeight}
                        classNames="menu-secondary">
                        <div className="dropdown-content">
                            {submittedData.map((item, index) => (
                                <div key={index} className="dropdown-list-item">
                                      <p>{Object.values(item)[0]}</p>
                            <IconSwitcher />
                        
                                </div>
                            ))}
                            <button className="primary" onClick={() => handleMenuChange('main')}>Add New</button>
                        </div>
                    </CSSTransition>
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    onFormDataChange: PropTypes.func.isRequired
};

export { Dropdown, DropdownFormItem };