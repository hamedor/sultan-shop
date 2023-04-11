import ContactItem from "./contactItem";
import styles from "../../styles/header.module.css";

const Contacts = () => {
    return (
      <div className={styles.contacts}>
        <ContactItem type="location" />
        <hr className={styles.hrCursive}></hr>
        <ContactItem type="mail" />
      </div>
    );
};


export default Contacts;