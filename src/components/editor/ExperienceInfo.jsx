function ExperienceInfo(props) {
    const {data, submitExpInfo, updateExp, deleteExp} = props

    return (
        <>
            <h1>Experience</h1>
            
            {data.map((i) => {
                return (
                    <div key={i.id}>
                        <form key={i.id} onSubmit={(e) => updateExp(e, i.id)}>
                            <input name="position" type="text" defaultValue={i.position}/>
                            <input name="company" type="text" defaultValue={i.company}/>
                            <input name="startDate" type="text" defaultValue={i.startDate}/>
                            <input name="endDate" type="text" defaultValue={i.endDate}/>
                            <textarea name="description" defaultValue={i.description}/>
                            <button type="submit" className="btn-update">Update</button>
                            <button className="btn-delete" onClick={(e) => deleteExp(i.id)}>Delete</button>
                        </form>
                    </div>
                )
            })}

            <form onSubmit={submitExpInfo}>
                <input name="position" type="text" placeholder="Position"/>
                <input name="company" type="text" placeholder="Company"/>
                <input name="startDate" type="text" placeholder="Start Date (mm/yyyy)"/>
                <input name="endDate" type="text" placeholder="End Year (mm/yyyy or On-going)"/>
                <textarea name="description" placeholder="Description"/>
                <button type="submit" className="btn-add">Add</button>
            </form>
        </>
    )
}

export default ExperienceInfo;