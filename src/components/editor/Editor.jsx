import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import EducationalInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import SkillInfo from './SkillInfo';
import LanguagesInfo from './LanguagesInfo';

function Editor(props) {
    const {
        formData,
        handlePersonalInfoChange,

        handleContactInfoChange,

        submitEducationInfo,
        updateEducation,
        deleteEducation,

        submitExpInfo,
        updateExp,
        deleteExp,

        submitSkillInfo, 
        updateSkillInfo, 
        deleteSkill,

        submitLanguageInfo,
        updateLanguage, 
        deleteLanguage,
    } = props;

    return (
        <div className='editor'>
            <header className='header'>
                <h1 className="header-title">CV generator</h1>
                <p className='header-description'>
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
            deleteLanguage = {deleteLanguage}
            />
        </div>
    )
}

export default Editor;