import './Content.css'
function Content() {
  return (
    <div>
      <h1>Content</h1>
      <div className='content'>
        <div className="personal-info">
          <p>John Doe</p>
          <p>Phone: 123456789</p>
          <p>Email:</p>
          <p>Links</p>
        </div>
        <div className="education" >
          <h2>Education</h2>
          <p>University of Life</p>
          <p>2010-2014</p>
        </div>
        <div className="expirience">
          <h2>Expirience</h2>
          <p>Company Name</p>
          <p>Position Title</p>
        </div>

      </div>
    </div>
  )
}
export default Content;