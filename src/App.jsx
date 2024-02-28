
import './App.css'
import { Dropdown, DropdownFormItem } from './Dropdown.jsx';
import Content from './Content.jsx';
import { useState } from 'react';


function App() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [formData, setFormData] = useState({
    personalInfo: [],
    education: [],
    experience: []
  });

  const handleFormDataChange = (category, newData) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [category]: [...prevFormData[category], newData]
    }));
  };

//   const toggleVisibility = (index) => {
//     const updatedData = [...submittedData];
//     updatedData[index] = {
//         ...updatedData[index],
//         visible: !updatedData[index].visible,
//     };
//     setSubmittedData(updatedData);
// };

  return (
    <>
      <div className='main-container'>
        <div className='form-container'>
        <h1>CV creator</h1>
          <Dropdown onFormDataChange={data => handleFormDataChange('personalInfo', data)} title="Personal Information">
            <DropdownFormItem inputTitle='Name' />
            <DropdownFormItem inputTitle='Surname' />
            <DropdownFormItem inputTitle='Position' />
            <DropdownFormItem inputTitle="Phone" />
            <DropdownFormItem inputTitle="Email" />
            <DropdownFormItem inputTitle="Links" />
          </Dropdown>
          <Dropdown onFormDataChange={data => handleFormDataChange('education', data)} title="Education" firstFormLabel="School" secondFormLabel="Degree">
            <DropdownFormItem inputTitle="School" />
            <DropdownFormItem inputTitle="Degree" />
            <DropdownFormItem inputTitle="Start date" type="date" containerClassName="dropdown-form-item unspan" />
            <DropdownFormItem inputTitle="End date" type="date" containerClassName="dropdown-form-item unspan" />
          </Dropdown>
          <Dropdown onFormDataChange={data => handleFormDataChange('experience', data)} title="Expirience" firstFormLabel="Company Name" secondFormLabel="Position Title" >
            <DropdownFormItem inputTitle='Company Name' />
            <DropdownFormItem inputTitle="Position Title" />
            <DropdownFormItem inputTitle='Description'  />
            <DropdownFormItem inputTitle="Start date" type="date" containerClassName="dropdown-form-item unspan" />
            <DropdownFormItem inputTitle="End date" type="date" containerClassName="dropdown-form-item unspan" />
          </Dropdown>
        </div>
        <Content  {...formData} isVisible={true} />
      </div>
      
    </>
  )
}

export default App
