function ContactInfo(props) {
    const {data, handleChange} = props;

    return (
        <>
            <h1 className="contact-info-title">Contact Information</h1>
            <input name="email" type="text" placeholder="E-mail" onChange={handleChange} value={data.email} />
            <input name="phone" type="text" placeholder="Phone" onChange={handleChange} value={data.phone} />
            <input name="address" type="text" placeholder="Address" onChange={handleChange} value={data.address} />
            <input name="website" type="text" placeholder="Website" onChange={handleChange} value={data.website} />
        </>
    )
}

export default ContactInfo;