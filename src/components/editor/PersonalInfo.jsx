function PersonalInfo (props) {
    const {data, handleChange} = props;

    return (
        <div>
            <h1 >Personal Information</h1>
            <input name="fullName" type="text" placeholder="Fullname" onChange={handleChange} value={data.fullName}/>
            <input name="title" type="text" placeholder="Title" onChange={handleChange} value={data.title}/>
            <textarea name="selfSummary" placeholder="Description" onChange={handleChange} value={data.selfSummary}></textarea>
        </div>
    )
}

export default PersonalInfo;