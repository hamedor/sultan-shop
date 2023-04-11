import Contacts from "./contacts";
import NavigationList from "./navigationList";
import styles from "../../styles/header.module.css";

const TopLine = () => {
    return (
      <div className={styles.topLine}>
        <Contacts />
        <NavigationList />
      </div>
    );
};


export default TopLine