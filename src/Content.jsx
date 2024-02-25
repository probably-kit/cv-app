import React from 'react';
import './Content.css';

function Content({ personalInfo, education, experience }) {
  return (
    <div>
      <h1>Content</h1>
      <div className='content'>
        <div className="personal-info">
          {personalInfo.map((item, index) => (
            <div key={index}>
              <h2>{item.Name}</h2>
              <p>{item.Phone}</p>
              <p>{item.Email}</p>
              <p>{item.Links}</p>
            </div>
          ))}
        </div>
        <div className="education">
          {education.map((item, index) => (
            <div key={index}>
              <h2>{item.School || item.name}</h2> {/* Adjust based on your inputTitle */}
              <p>{item.Degree}</p>
              <p>Start Date: {item["Start date"]}</p> {/* Adjust keys as per form inputs */}
              <p>End Date: {item["End date"]}</p>
            </div>
          ))}
        </div>
        <div className="experience">
          {experience.map((item, index) => (
            <div key={index}>
              <h2>{item['Company Name']}</h2>
              <p>{item['Position Title']}</p>
              <p>{item.Description}</p>
              <p>Start Date: {item["Start date"]}</p>
              <p>End Date: {item["End date"]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
