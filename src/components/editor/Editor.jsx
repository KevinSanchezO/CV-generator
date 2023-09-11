import github from '../../assets/github.svg';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import EducationalInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';

import LanguagesInfo from './LanguagesInfo';

function Editor(props) {

    const {
        formData,
        handlePersonalInfoChange,
        handleContactInfoChange,
    } = props;

    const smallGitHubIconStyle = {
        width: '32px', 
        height: '32px',
    };

    return (
        <div className='editor'>
            <header className='header'>
                <h1 className="header-title">CV generator</h1>
                <p className='header-description'>
                    Create your CV filling the forms and check its changes dinamically in the preview
                </p>

                <a className='header-github' href='https://github.com/KevinSanchezO/CV-generator' target="_blank">
                    <p>Made by Kevin Sánchez</p>
                    <img src={github} id="footer-img" alt="GitHub Logo" style={smallGitHubIconStyle}/>
                </a>
            </header>

            <PersonalInfo data={formData.personalInfo} 
            handleChange={handlePersonalInfoChange}/>
            
            <ContactInfo data={formData.contactInfo} 
            handleChange={handleContactInfoChange} />

            <EducationalInfo data={formData.educationalInfo} />
        
            <ExperienceInfo data={formData.experienceInfo}/>

            <LanguagesInfo data={formData.languages} />

        </div>
    )
}

export default Editor;