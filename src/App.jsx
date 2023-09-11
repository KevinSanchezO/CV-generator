import { useState } from 'react'
import Editor from './components/editor/Editor'
import Preview from './components/preview/Preview'

function App() {
  const [formData, setFormData] = useState(
    {
      personalInfo: {
        fullName: '',
        title: '',
        selfSummary: ''
      },
      contactInfo: {
        email: '',
        phone: '',
        address: '',
        website: '',
      },
      educationalInfo:[],
      experienceInfo:[],
      skills:[],
      languages: [],
    }
  )
  

  const handlePersonalInfoChange = (e) => {
    const {name, value} = e.target;    
    setFormData((prevData) => ({...prevData, personalInfo:{...prevData.personalInfo,[name]: value}}));
  }

  const handleContactInfoChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, contactInfo:{...prevData.contactInfo,[name]: value}}));
  }

  return (
    <div className='app'>
      <Editor formData={formData}
              handlePersonalInfoChange = {handlePersonalInfoChange}
              handleContactInfoChange = {handleContactInfoChange}/>
      <Preview formData={formData}/>
    </div>
  )
}

export default App
