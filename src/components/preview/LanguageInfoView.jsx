function LanguageInfoView (prop) {
    const {data} = prop;

    return (
        <section className="language,-info-area-preview">
            <h3 className="lang-info-title">Languages</h3>
            <ul>
                {data.map((i) => {
                    return (
                        <li key={i.id}>{i.language}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default LanguageInfoView;