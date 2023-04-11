import styles from "../../styles/header.module.css";
import operator from "../../assets/icons/operator.png";


const ContactBlock = () => {
    return (
      <div className={styles.contactBlock}>
        <div className={styles.column}>
          <a className={styles.contactTextBold} href="tel:+77774900091">
            +7 (777) 490-00-91
          </a>
          <p className={styles.contactText}>время работы: 9:00-20:00</p>
          <button className={styles.buttonUnderline}>Заказать звонок</button>
        </div>
        <div className={styles.image}>
          <img src={operator} alt="картинка оператора"></img>
        </div>
      </div>
    );
};

export default ContactBlock;