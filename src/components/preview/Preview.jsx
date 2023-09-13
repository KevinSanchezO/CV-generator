import PersonalInfoView from "./PersonalInfoView";
import ContactInfoView from "./ContactInfoView";
import EducationalInfoView from "./EducationInfoView";
import ExperienceInfoView from "./ExperienceInfoView";
import LanguageInfoView from "./LanguageInfoView";

function Preview(prop) {
    const {formData} = prop

    return (
        <div className="preview">
            <PersonalInfoView data={formData.personalInfo}/>
            <ContactInfoView data={formData.contactInfo}/>
            <EducationalInfoView data={formData.educationalInfo}/>
            <ExperienceInfoView data={formData.experienceInfo}/>
            <LanguageInfoView data={formData.languages}/>
        </div>
    )
}

export default Preview;