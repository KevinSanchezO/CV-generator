import { useState, useEffect } from 'react'
import Editor from './components/editor/Editor'
import Preview from './components/preview/Preview'
import { v4 as uuidv4 } from "uuid";

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

  const submitLanguageInfo = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const language = e.target[0].value;

    const formDataCopy = {...formData};
    formDataCopy.languages.push({id, language});

    setFormData(formDataCopy);
    clear(e);
  }

  const updateLanguage = (e, id) => {
    e.preventDefault();

    const updatedLanguage = e.target[0].value;
    setFormData((prevData) => {
      const updatedFormData = {...prevData};

      updatedFormData.languages = updatedFormData.languages.map((languageItem) => {
        if (languageItem.id === id) {
          return { ...languageItem, language: updatedLanguage };
        }
        return languageItem;
      })
      return updatedFormData;
    })
  }
  
  const deleteLanguage = (id) => {

    setFormData((prevData) => {
      const updatedFormData = {...prevData};

      updatedFormData.languages = updatedFormData.languages.filter((language) =>{
        return language.id != id;
      });

      return updatedFormData;
    });
  }

  const clear = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  }

  return (
    <div className='app'>
      <Editor formData={formData}
              handlePersonalInfoChange = {handlePersonalInfoChange}
              handleContactInfoChange = {handleContactInfoChange}
              submitLanguageInfo = {submitLanguageInfo}
              updateLanguage = {updateLanguage}
              deleteLanguage = {deleteLanguage}
              />
      <Preview formData={formData}/>
    </div>
  )
}

export default App
