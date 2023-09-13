function EducationalInfo(props) {
    const {data, submitEducationInfo, updateEducation, deleteEducation} = props

    return (
        <>
            <h1 className="education-info-title">Education</h1>
            
            {data.map((i) => {
                return (
                    <div key={i.id}>
                        <form key={i.id} onSubmit={(e) => updateEducation(e, i.id)}>
                            <input name="course" type="text" defaultValue={i.course}/>
                            <input name="institute" type="text" defaultValue={i.institute}/>
                            <input name="startDate" type="text" defaultValue={i.startDate}/>
                            <input name="graduateDate" type="text" defaultValue={i.graduateDate}/>
                            <button type="submit" className="btn-save-education">Update</button>
                            <button className="btn-delete-education" onClick={(e) => deleteEducation(i.id)}>Delete</button>
                        </form>
                    </div>
                )
            })}

            <form onSubmit={submitEducationInfo}>
                <input name="course" type="text" placeholder="Course"/>
                <input name="institute" type="text" placeholder="Institute"/>
                <input name="startDate" type="text" placeholder="Start Year (mm/yyyy)"/>
                <input name="graduateDate" type="text" placeholder="Graduate Year (mm/yyyy or On-going)"/>
                <button className="btn-add-education" type="submit">Add</button>
            </form>
        </>
    )
}

export default EducationalInfo;