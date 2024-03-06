import React from 'react';
import './Content.css';

function Content({ personalInfo, education, experience }) {
  return (
    <div>
      <h1>Content</h1>
      <div className='content'>
        {/* {personalInfo.map((item, index) => (
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
          ))} */}
        <div className='content-item span-5'>
          <p className='name'>Mikita</p>
          <p className='name'>Lohinau</p>
          <p className='position'>Full Stack Developer</p>
        </div>
          <div className='content-item span-2'>
            <p className='title'>CONTACT</p>
            <p>+48516557455</p>
            <p>mikita.lohinau@gmail.com</p>
            <p>Gdansk, Poland</p>
            <p>Github</p>
          </div>
          <div className='content-item span-3'>
            <p className='title'>Summary</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod eum officia possimus repellat blanditiis incidunt illum sed minus ipsam beatae iure culpa fugit, earum quidem numquam hic reiciendis quia similique dignissimos esse accusamus, alias aliquam? Culpa, obcaecati.</p>
          </div>       
            <div className="content-item span-1">
              <p className='title'>SKILLS</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>MySQL</p>
            </div>
          <div className='content-item span-4'>
            <p className='title'>Working experience</p>
              <p>Security Lab</p>
              <p>2022-2023</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat optio corporis, atque distinctio similique quam libero minima, veniam quibusdam accusantium corrupti ullam quasi quos iste earum amet aspernatur tenetur porro maiores alias soluta eum neque? Vitae possimus nemo magni provident ad sed earum eius sint illo! Vero, aliquam. Odit placeat delectus sapiente magni laudantium accusamus deleniti, commodi qui mollitia nobis eum temporibus culpa at doloremque.</p>
          </div>
          <div className="content-item">
              <p className='title'>Education</p>
              <p>Belarusian State University of Informatics and Radioelectronics</p>
              <p>Software Engeneer</p>
              <p>2020-2023</p>
            </div>
      </div>
      {/* <div className="experience">
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
              <h2>{item.School}</h2> 
              <p>{item.Degree}</p>
              <p>Start Date: {item["Start date"]}</p> 
              <p>End Date: {item["End date"]}</p>
            </div>
          ))}
         </div> */}
    </div>
  );
}

export default Content;
