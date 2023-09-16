import { useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Editor Components
import PersonalInfo from './components/editor/PersonalInfo';
import ContactInfo from './components/editor/ContactInfo';
import EducationalInfo from './components/editor/EducationInfo';
import ExperienceInfo from './components/editor/ExperienceInfo';
import SkillInfo from './components/editor/SkillInfo';
import LanguagesInfo from './components/editor/LanguagesInfo';

// Preview Components
import PersonalInfoView from "./components/preview/PersonalInfoView";
import ContactInfoView from "./components/preview/ContactInfoView";
import EducationalInfoView from "./components/preview/EducationInfoView";
import ExperienceInfoView from "./components/preview/ExperienceInfoView";
import SkillInfoView from "./components/preview/SkillInfoView";
import LanguageInfoView from "./components/preview/LanguageInfoView";
import SelfSummaryInfoView from "./components/preview/SelfSummaryInfoView";

//css
import './app.css'

import { v4 as uuidv4 } from "uuid";
import ReactToPrint from "react-to-print";

function App() {
  let componentRef = null;
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


  const submitSkillInfo = (e) => {
    e.preventDefault();
    const id = uuidv4(); //to identify the language and delete or modify
    const titleSkillSection = e.target[0].value;
    const contentSkill = e.target[1].value;

    const formDataCopy = {...formData};
    formDataCopy.skills.push({id, titleSkillSection, contentSkill});

    setFormData(formDataCopy);
    clear(e);
  }

  const updateSkillInfo = (e, id) => {
    e.preventDefault();

    const titleSkillSection = e.target[0].value;
    const contentSkill = e.target[1].value;

    setFormData((prevData) => {
      const updatedFormData = {...prevData};
      updatedFormData.skills = updatedFormData.skills.map((skillItem) => {
        if (skillItem.id === id) {
          return { ...skillItem,
            titleSkillSection: titleSkillSection,
            contentSkill: contentSkill
          };
        }
        return skillItem;
      })
      return updatedFormData;
    })
  }

  const deleteSkill = (id) => {
    setFormData((prevData) => {
      const updatedFormData = {...prevData};

      updatedFormData.skills = updatedFormData.skills.filter((skill) =>{
        return skill.id != id;
      });

      return updatedFormData;
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
      <div className='editor'>
        <header className='header-editor'>
          <h1>CV Generator</h1>
            <p>
              Create your CV filling the forms and check its changes dinamically in the preview
            </p>

            <a className='header-github' href='https://github.com/KevinSanchezO/CV-generator' target="_blank">
              <p><FontAwesomeIcon icon={faGithub}/> Made by Kevin Sánchez</p>
            </a>
        </header>

            <PersonalInfo data={formData.personalInfo} 
            handleChange={handlePersonalInfoChange}/>
            
            <ContactInfo data={formData.contactInfo} 
            handleChange={handleContactInfoChange} />

            <EducationalInfo data={formData.educationalInfo} 
            submitEducationInfo = {submitEducationInfo}
            updateEducation = {updateEducation}
            deleteEducation = {deleteEducation}/>
        
            <ExperienceInfo data={formData.experienceInfo}
            submitExpInfo = {submitExpInfo}
            updateExp = {updateExp}
            deleteExp = {deleteExp}/>

            <SkillInfo data={formData.skills}
            submitSkillInfo={submitSkillInfo} 
            updateSkillInfo={updateSkillInfo} 
            deleteSkill={deleteSkill}/>

            <LanguagesInfo data={formData.languages}
            submitLanguageInfo={submitLanguageInfo}
            updateLanguage = {updateLanguage}
            deleteLanguage = {deleteLanguage}/>

            <ReactToPrint
              trigger={() => {
                return <button className='btn-print'>Print CV</button>
              }}
              content={() => componentRef}
              documentTitle= 'CV'
            />
      </div>

      <div className='preview' ref={(el) => (componentRef = el)}>
        <div className='header-preview'>
          <div className="personal-info"><PersonalInfoView data={formData.personalInfo}/></div>
          <div className="contact-info"><ContactInfoView data={formData.contactInfo}/></div>
        </div>

        <SelfSummaryInfoView data={formData.personalInfo}/>
        
        <div className='main-content'>
          <div className='left-column'>
            <EducationalInfoView data={formData.educationalInfo}/>
            <ExperienceInfoView data={formData.experienceInfo}/>
          </div>
              
          <div className='right-column'>
            <SkillInfoView data={formData.skills}/>
            <LanguageInfoView data={formData.languages}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App