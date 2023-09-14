function SkillInfoView(prop) {
    const {data} = prop

    return (
        <section className="skill-info-area-preview">
            <h3>Skills</h3>
            <ul>
                {data.map((i) => {
                    return (
                        <div>
                            <h4>{i.titleSkillSection}</h4>
                            <p>{i.contentSkill}</p>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default SkillInfoView;