function EducationalInfoView (prop) {
    const {data} = prop;

    return (
        <section className="educational-info-area-preview">
            <h2>Education</h2>
            <ul>
                {data.map((i) => {
                    return (
                        <div>
                            <h3>{i.course}, {i.institute}</h3>
                            <p>{i.startDate} - {i.startDate}</p>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default EducationalInfoView;