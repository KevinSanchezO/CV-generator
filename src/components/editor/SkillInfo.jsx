function SkillInfo(props) {
    const {data, submitSkillInfo, updateSkillInfo, deleteSkill} = props

    const textPlaceholder = "Skill 1, Skill 2, Skill 3";

    return (
        <>
            <h1>Skills</h1>
            
            {data.map((i) => {
                return (
                    <div key={i.id}>
                        <form key={i.id} onSubmit={(e) => updateSkillInfo(e, i.id)}>
                            <input name="titleSkillSection" type="text" defaultValue={i.titleSkillSection}></input>
                            <textarea name="contentSkill" defaultValue={i.contentSkill}></textarea>
                            <button type="submit" className="btn-update">Update</button>
                            <button className="btn-delete" onClick={(e) => deleteSkill(i.id)}>Delete</button>
                        </form>
                    </div>
                )
            })}
            
            <form onSubmit={submitSkillInfo}>
                <input name="titleSkillSection" type="text" placeholder="Skill section title"></input>
                <textarea name="contentSkill" placeholder={textPlaceholder}></textarea>
                <button type="submit" className="btn-add">Add</button>
            </form>
        </>
    )
}
export default SkillInfo;