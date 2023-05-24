import { ContactForm } from "../../components/ContactForm";
import "./contact.scss";
export const Contact = () => {
    return (
        <div id="contact" className="panel">
            <h1 className="important-text heading">Contact</h1>
            <ContactForm />
        </div>
    );
};
