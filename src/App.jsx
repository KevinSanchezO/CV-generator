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
  /*
  Handles the information regarding name, title and summary
  of the user
  */
  const handlePersonalInfoChange = (e) => {
    const {name, value} = e.target;    
    setFormData((prevData) => ({...prevData, personalInfo:{...prevData.personalInfo,[name]: value}}));
  }

  /*
  Handles the information regarding the contacts of the
  user
  */
  const handleContactInfoChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, contactInfo:{...prevData.contactInfo,[name]: value}}));
  }

  const submitEducationInfo = (e) => {
    e.preventDefault();
    const id = uuidv4(); //to identify the education and delete or modify

    const course = e.target[0].value;
    const institute = e.target[1].value;
    const startDate = e.target[2].value;
    const graduateDate = e.target[3].value;

    const formDataCopy = {...formData};
    formDataCopy.educationalInfo.push({id, 
      course, 
      institute,
      startDate,
      graduateDate});
    setFormData(formDataCopy);
    clear(e);
  }

  const updateEducation = (e, id) => {
    e.preventDefault();

    const course = e.target[0].value;
    const institute = e.target[1].value;
    const startDate = e.target[2].value;
    const graduateDate = e.target[3].value;

    setFormData((prevData) => {
      const updatedFormData = {...prevData};
      updatedFormData.educationalInfo = updatedFormData.educationalInfo.map((eduItem) => {
        if (eduItem.id === id) {
          return {...eduItem, 
            course:course, 
            institute:institute, 
            startDate:startDate, 
            graduateDate:graduateDate};
        }
        return eduItem;
      })
      return updatedFormData;
    });
  }

  const deleteEducation = (id) => {
    setFormData((prevData) => {
      const updatedFormData = {...prevData}

      updatedFormData.educationalInfo = updatedFormData.educationalInfo.filter((educ) => {
        return educ.id != id
      });

      return updatedFormData
    });
  }

  const submitExpInfo = (e) => {
    e.preventDefault();
    const id = uuidv4(); //to identify the education and delete or modify

    const position = e.target[0].value;
    const company = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const description = e.target[4].value;

    const formDataCopy = {...formData};
    formDataCopy.experienceInfo.push({id, 
      position, 
      company,
      startDate,
      endDate,
      description});
    setFormData(formDataCopy);
    clear(e);
  }

  const updateExp = (e, id) => {
    e.preventDefault();

    const position = e.target[0].value;
    const company = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const description = e.target[4].value;

    setFormData((prevData) => {
      const updatedFormData = {...prevData};
      updatedFormData.experienceInfo = updatedFormData.experienceInfo.map((expItem) => {
        if (expItem.id === id) {
          return {...expItem, 
            position:position,
            company:company,
            startDate:startDate,
            endDate:endDate,
            description:description
          };
        }
        return expItem;
      })
      return updatedFormData;
    });
  }

  const deleteExp = (id) => {
    setFormData((prevData) => {
      const updatedFormData = {...prevData}

      updatedFormData.experienceInfo = updatedFormData.experienceInfo.filter((exp) => {
        return exp.id != id
      });

      return updatedFormData
    });
  }


  /*
  adds new information to the list regarding languages
  */
  const submitLanguageInfo = (e) => {
    e.preventDefault();
    const id = uuidv4(); //to identify the language and delete or modify
    const language = e.target[0].value;

    const formDataCopy = {...formData};
    formDataCopy.languages.push({id, language});

    setFormData(formDataCopy);
    clear(e);
  }

  /* 
  modifies the information of a language already stored by finding the id
  passed as a parameter
  */
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
  
  /* 
  delete a specific language already stored by the id passed as a parameter 
  */
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

              submitEducationInfo = {submitEducationInfo}
              updateEducation = {updateEducation}
              deleteEducation = {deleteEducation}

              submitExpInfo = {submitExpInfo}
              updateExp = {updateExp}
              deleteExp = {deleteExp}

              submitLanguageInfo = {submitLanguageInfo}
              updateLanguage = {updateLanguage}
              deleteLanguage = {deleteLanguage}
              />
      <Preview formData={formData}/>
    </div>
  )
}

export default App
