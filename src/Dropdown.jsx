import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Dropdown.css';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as EyeOpen } from './icons/eye-open.svg';
import { ReactComponent as EyeClosed } from './icons/eye-closed.svg';

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

import PropTypes from 'prop-types';

function DropdownFormItem(props) {



    return (
        <div className={props.containerClassName}>
            <input type={props.type} id={props.inputTitle} className="form-control" placeholder="" /*required*/ />
            <label htmlFor={props.inputTitle} className="form-label">{props.inputTitle}</label>
        </div>
    )
}
DropdownFormItem.defaultProps = {
    type: "text",
    inputTitle: "School",
    containerClassName: "dropdown-form-item"
}
DropdownFormItem.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    type: PropTypes.string,
    containerClassName: PropTypes.string
};

function DropdownListItem(props) {
    return (
        <div className='dropdown-list-item'>
            <p>Title</p>
            <IconSwitcher />
        </div>
    )
}


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
                <ArrowIcon style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {isActive && (
                <div className='animate-height' style={{ height: menuHeight }}>
                    <CSSTransition
                        in={activeMenu === 'main'}
                        unmountOnExit
                        timeout={500}
                        onEnter={calcHeight}
                        classNames="menu-primary">
                        <form className="dropdown-content" onSubmit={handleSubmit}>
                            <DropdownFormItem inputTitle={props.firstFormLabel} />
                            <DropdownFormItem inputTitle={props.secondFormLabel} />
                            <DropdownFormItem inputTitle="Start date" type="date" containerClassName="dropdown-form-item unspan"/>
                            <DropdownFormItem inputTitle="End date" type="date" containerClassName="dropdown-form-item unspan"/>
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
                        <DropdownListItem />
                        <DropdownListItem />
                        <DropdownListItem />
                        <DropdownListItem />
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
