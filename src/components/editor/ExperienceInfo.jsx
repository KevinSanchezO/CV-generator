function ExperienceInfo(props) {
    const {data} = props

    return (
        <>
            <h1 className="experience-info-title">Experience</h1>
            
            {data.map((exp) => {
                return (
                    <li>
                    <input name="position" type="text" />
                    <input name="company" type="text" />
                    <input name="startDate" type="text" />
                    <input name="endDate" type="text" />
                    <textarea name="description" placeholder="Description"/>
                    <button className="btn-save-experience">Save</button>
                    <button className="btn-delete-experience">Delete</button>
                    </li>
                )
            })}


            <input name="position" type="text" placeholder="Position"/>
            <input name="company" type="text" placeholder="Company"/>
            <input name="startDate" type="text" placeholder="Start Date (mm/yyyy)"/>
            <input name="endDate" type="text" placeholder="End Year (mm/yyyy or On-going)"/>
            <textarea name="description" placeholder="Description"/>
            <button className="btn-add-experience">Add</button>
        </>
    )
}

export default ExperienceInfo;