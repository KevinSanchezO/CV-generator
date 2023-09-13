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

            <p className="self-summary-preview">
                {data.selfSummary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tristique lorem, eu sagittis lectus. Duis ultrices vulputate orci eu imperdiet. Mauris ac ipsum odio.'}
            </p>
        </section>
    )
}

export default PersonalInfoView;