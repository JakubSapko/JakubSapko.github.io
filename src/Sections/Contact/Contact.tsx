import { ContactForm } from "../../components/ContactForm";
import { ContactItems } from "../../components/ContactItems";
import "./contact.scss";
export const Contact = () => {
    return (
        <div id="contact" className="panel">
            <h1 className="important-text heading">Contact</h1>
            <div className="contact-content">
                <ContactForm />
                <ContactItems />
            </div>
        </div>
    );
};
