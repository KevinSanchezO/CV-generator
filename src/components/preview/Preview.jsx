import PersonalInfoView from "./PersonalInfoView";
import ContactInfoView from "./ContactInfoView";
import LanguageInfoView from "./LanguageInfoView";

function Preview(prop) {
    const {formData} = prop

    return (
        <div className="preview">
            <PersonalInfoView data={formData.personalInfo}/>
            <ContactInfoView data={formData.contactInfo}/>

            <LanguageInfoView data={formData.languages}/>
        </div>
    )
}

export default Preview;