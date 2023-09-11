import PersonalInfoView from "./PersonalInfoView";

function Preview(prop) {
    const {formData} = prop

    return (
        <div className="preview">
            <PersonalInfoView data={formData.personalInfo}/>
        </div>
    )
}

export default Preview;