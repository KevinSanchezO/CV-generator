function EducationalInfo(props) {
    const {data} = props

    return (
        <>
            <h1 className="education-info-title">Education</h1>
            
            {data.map((edu) => {
                return (
                    <li>
                    <input name="course" type="text" />
                    <input name="institute" type="text" />
                    <input name="startDate" type="text" />
                    <input name="graduateDate" type="text" />
                    <button className="btn-save-education">Save</button>
                    <button className="btn-delete-education">Delete</button>
                    </li>
                )
            })}


            <input name="course" type="text" placeholder="Course"/>
            <input name="institute" type="text" placeholder="Institute"/>
            <input name="startDate" type="text" placeholder="Start Year (mm/yyyy)"/>
            <input name="graduateDate" type="text" placeholder="Graduate Year (mm/yyyy or On-going)"/>
            <button className="btn-add-education">Add</button>
        </>
    )
}

export default EducationalInfo;