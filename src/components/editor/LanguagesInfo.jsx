function LanguagesInfo(props) {
    const {data} = props;

    return (
        <>
            <h1 className="lang-into-title">Languages</h1>

            {data.map((lamg) => {
                return (
                    <li>
                    <input name="lang-name" type="text"/>
                    <button className="btn-save-lang">Save</button>
                    <button className="btn-delete-lang">Delete</button>
                    </li>
                )
            })}

            <input name='lang' type="text" placeholder="Language"/>
            <button className="btn-add-lang">Add</button>
        </>
    )
}

export default LanguagesInfo;