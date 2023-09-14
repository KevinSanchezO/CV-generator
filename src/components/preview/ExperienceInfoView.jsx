function ExperienceInfoView(prop) {
    const {data} = prop;
    return(
        <section className="experience-info-area-preview">
            <h2>Experience</h2>
            <ul>
                {data.map((i) => {
                    return (
                        <div >
                            <h3>{i.position}, {i.company}</h3>
                            <p>{i.startDate} - {i.endDate}</p>
                            <p>{i.description}</p>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default ExperienceInfoView