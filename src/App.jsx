
import './App.css'
import Dropdown from './Dropdown.jsx';



 



function App() {


  return (
    <>
      <h1>CV creator</h1>
      <div className='form-container'>
        <Dropdown title="Education" firstFormLabel="School" secondFormLabel="Degree" />
        <Dropdown title="Expirience" firstFormLabel="Company Name" secondFormLabel="Position Title" />
        </div>
    </>
  )
}

export default App
