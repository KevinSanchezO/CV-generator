function LanguagesInfo(props) {
    const {data, submitLanguageInfo, updateLanguage, deleteLanguage} = props;

    return (
        <>
            <h1 className="lang-into-title">Languages</h1>
            
            {data.map((i) =>{
                return (
                    <div key={i.id}>
                            <form key={i.id} onSubmit={(e) => updateLanguage(e, i.id)}>
                                <input placeholder="Language" defaultValue={i.language}></input>
                                <div className="btn-lang-list-container">
                                    <button type="submit" className="btn-update-lang">Update</button>
                                    <button className="btn-del-lang" onClick={(e) => deleteLanguage(i.id)}>Delete</button>
                                </div>
                            </form>
                    </div>
                )
            })}

            <form onSubmit={submitLanguageInfo}>
                <input className="input-add-lang" placeholder="Language"></input>
                <button className="btn-add-lang" type="submit">Add</button>
            </form>
        </>
    )
}

export default LanguagesInfo;