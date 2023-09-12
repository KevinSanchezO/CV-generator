import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faLink
} from "@fortawesome/free-solid-svg-icons";

function ContactInfoView (props) {
    const {data} = props;

    return (
        <section className="contact-info-area-preview">
            <p>
                <FontAwesomeIcon icon={faEnvelope} /> {data.email || 'johndoe@email.com'}
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} /> {data.phone || '+111 222 3333'}
            </p>
            <p>
                <FontAwesomeIcon icon={faLocationDot} /> {data.address || 'London, UK'}
            </p>
            <p>
                <FontAwesomeIcon icon={faLink} /> {data.website || 'linkedin.sample.com/johndoe'}
            </p>
        </section>
    )
}

export default ContactInfoView