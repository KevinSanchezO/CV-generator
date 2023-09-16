function LanguagesInfo(props) {
    const {data, submitLanguageInfo, updateLanguage, deleteLanguage} = props;

    return (
        <>
            <h1>Languages</h1>
            
            {data.map((i) =>{
                return (
                    <div key={i.id}>
                            <form key={i.id} onSubmit={(e) => updateLanguage(e, i.id)}>
                                <input placeholder="Language" defaultValue={i.language}></input>
                                <div className="btn-lang-list-container">
                                    <button type="submit" className="btn-update">Update</button>
                                    <button className="btn-delete" onClick={(e) => deleteLanguage(i.id)}>Delete</button>
                                </div>
                            </form>
                    </div>
                )
            })}

            <form onSubmit={submitLanguageInfo}>
                <input placeholder="Language"></input>
                <button className="btn-add" type="submit">Add</button>
            </form>
        </>
    )
}

export default LanguagesInfo;