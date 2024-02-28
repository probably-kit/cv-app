import React from 'react';
import './Content.css';

function Content({ personalInfo, education, experience }) {
  return (
    <div>
      <h1>Content</h1>
      <div className='content'>
        <div className="personal-info">
          {personalInfo.map((item, index) => (
            <div className='personal-info-container' key={index}>
              <p className='name'>{item.Name}</p> 
              <p> {item.Surname}</p>
              <p>{item.Position}</p>
              <div className='personal-info-items'>
                <p>{item.Phone}</p>
                <p>{item.Email}</p>
                <p>{item.Links}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experience">
          <h2>Experience</h2>
          {experience.map((item, index) => (
            <div className='experience-container' key={index}>
              <div className='experience-item'>
                <p>Start Date: {item["Start date"]}</p>
                <p>End Date: {item["End date"]}</p>
              </div>
              <div className='experience-item'>
                <h2 className='company-name'>{item['Company Name']}</h2>
                <p className='position-title'>{item['Position Title']}</p>
                <p className='description'>{item.Description}</p>
              </div>

            </div>
          ))}
        </div>
        <div className="education">
          <h2>Education</h2>
          {education.map((item, index) => (
            <div key={index}>
              <h2>{item.School}</h2> {/* Adjust based on your inputTitle */}
              <p>{item.Degree}</p>
              <p>Start Date: {item["Start date"]}</p> {/* Adjust keys as per form inputs */}
              <p>End Date: {item["End date"]}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Content;
