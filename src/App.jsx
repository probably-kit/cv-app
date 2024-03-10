import React, { useState } from 'react';
import './App.css';
import { Dropdown, DropdownFormItem } from './Dropdown.jsx';
import Content from './Content.jsx';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
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

  const generatePdfFromContent = () => {
    const docDefinition = {
      content: [
        // Directly using static data for demonstration; adjust according to your actual data structure
        { text: 'Mikita Lohinau', style: 'header' },
        { text: 'Full Stack Developer', style: 'subheader' },
        {
          canvas: [
            { type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 2 }
          ],
          margin: [0, 10]
        },
        {
          columns: [
            {
              width: '*',
              text: 'Contact',
              style: 'sectionHeader'
            },
            {
              width: 'auto',
              text: [
                { text: '+48516557455\n', margin: [0, 5] },
                { text: 'mikita.lohinau@gmail.com\n', margin: [0, 5] },
                { text: 'Gdansk, Poland\n', margin: [0, 5] },
                { text: 'Github: ', link: 'https://github.com/probably-kit', decoration: 'underline', color: 'blue' },
                { text: '\nLinkedIn: ', link: 'https://www.linkedin.com/in/mikita-lohinau-0a5239235/', decoration: 'underline', color: 'blue' }
              ],
              margin: [0, 5]
            }
          ]
        },
        // More content following your structure
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment: 'center'
        },
        subheader: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        sectionHeader: {
          fontSize: 14,
          bold: true,
          decoration: 'underline',
          margin: [0, 10, 0, 5]
        },
        // Add more styles as needed
      },
      defaultStyle: {
        columnGap: 20,
      }
    };

    pdfMake.createPdf(docDefinition).download("CV_Mikita_Lohinau.pdf");
  };

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
            <DropdownFormItem inputTitle='Description' />
            <DropdownFormItem inputTitle="Start date" type="date" containerClassName="dropdown-form-item unspan" />
            <DropdownFormItem inputTitle="End date" type="date" containerClassName="dropdown-form-item unspan" />
          </Dropdown>
          <button onClick={generatePdfFromContent}>Download PDF</button>
        </div>
        <Content {...formData} isVisible={true} />
      </div>
    </>
  );
}

export default App;