function PersonalInfoView (props) {
    const {data} = props;

    return (
        <section className="personal-info-area-preview">
            <h1 className="full-name-preview">
                {data.fullName || 'Jhon Doe'}
            </h1>

            <h3 className="title-preview">
                {data.title || 'Software developer'}
            </h3>
        </section>
    )
}

export default PersonalInfoView;