
import './App.css'
import Dropdown from './Dropdown.jsx';
import Content from './Content.jsx';



 



function App() {


  return (
    <>
      <h1>CV creator</h1>
      <div className='form-container'>
        <Dropdown title="Personal Information" firstFormLabel="First Name" secondFormLabel="Last Name" /> 
        <Dropdown title="Education" firstFormLabel="School" secondFormLabel="Degree" />
        <Dropdown title="Expirience" firstFormLabel="Company Name" secondFormLabel="Position Title" />
        </div>
      <Content />
    </>
  )
}

export default App
