import { useState } from 'react';
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

function DropdownListItem({ item, onEdit }) {
    return (
        <div onClick={onEdit} className="dropdown-list-item">
            <p>{item.firstLabel}</p> {/* Displaying the firstLabel as an example */}
            <IconSwitcher />
        </div>
    );
}


function Dropdown(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [isActive, setIsActive] = useState(false);
    const [menuHeight, setMenuHeight] = useState(null);
    const [formData, setFormData] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const handleMenuChange = (menuName) => {
        setActiveMenu(menuName);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {
            firstLabel: event.target.elements[props.firstFormLabel].value,
            secondLabel: event.target.elements[props.secondFormLabel].value,
        };

        if (editingItem) {
            // Update logic
            const updatedFormData = formData.map(item =>
                item === editingItem ? newEntry : item
            );
            setFormData(updatedFormData);
            setEditingItem(null); // Reset editing state
        } else {
            // Add logic
            setFormData([...formData, newEntry]);
        }

        handleMenuChange('list'); // Switch to 'list' menu after form submission
    };

    const handleEditItem = (item) => {
        setEditingItem(item); // Set the item to be edited
        setActiveMenu('main'); // Switch back to the form
    };

    const handleDeleteItem = () => {
        if (editingItem) {
            setFormData(formData.filter(item => item.firstLabel !== editingItem.firstLabel));
            setEditingItem(null); // Reset the editing state
            setActiveMenu('list'); // Optionally switch back to the list view
        }
    };

    return (
        <div className="dropdown">
            <div className="dropdown-button" onClick={() => setIsActive(!isActive)}>
                <p>{props.title}</p>
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
                                <DropdownFormItem inputTitle={props.firstFormLabel} defaultValue={editingItem ? editingItem.firstLabel : ''} />
                                <DropdownFormItem inputTitle={props.secondFormLabel} defaultValue={editingItem ? editingItem.secondLabel : ''} />
                                <DropdownFormItem inputTitle="Start date" type="date" containerClassName="dropdown-form-item unspan" />
                                <DropdownFormItem inputTitle="End date" type="date" containerClassName="dropdown-form-item unspan" />
                                <div className="dropdown-form-item">
                                    <button type="submit" className="primary">Save</button>
                                    {editingItem && (
                                        <button type="button" className="danger" onClick={handleDeleteItem}>Delete</button>
                                    )}
                                    <button type="button" className="secondary" onClick={() => setIsActive(false)}>Cancel</button>
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
                            {formData.map((item, index) => (
                                <DropdownListItem key={index} item={item} onEdit={() => handleEditItem(item)} />
                            ))}
                            <div className="dropdown-list-item">
                                <button onClick={() => handleMenuChange('main')}>+ Add</button>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    firstFormLabel: PropTypes.string.isRequired,
    secondFormLabel: PropTypes.string.isRequired,
};

export default Dropdown;