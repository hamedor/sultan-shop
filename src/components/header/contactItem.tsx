import locationicon from "../../assets/icons/location.svg";
import mailicon from "../../assets/icons/mail.svg";
import phoneicon from "../../assets/icons/phoneIcon.svg";
import styles from "../../styles/header.module.css";


interface ContactItemProps{
    type:string;
}

const ContactItem = ({ type }:ContactItemProps) => {
  let icon;
  let boldText;
  let text;

  if (type === 'location') {
    icon = locationicon;
    boldText = 'г. Кокчетав, ул. Ж. Ташенова 129Б';
    text = '(Рынок Восточный)';
  } else if (type === 'mail') {
    icon = mailicon;
    boldText = (
      <a href="mailto: opt.sultan@mail.ru">opt.sultan@mail.ru</a>
    );
    text = 'На связи в любое время';
  } else{
    icon = phoneicon;
    boldText = 'Отдел продаж';
    text = '+7 (777) 490-00-91';
  }

  return (
    <div className={styles.contactItem}>
      <div className={styles.contactIcon}>
        <img src={icon} alt="иконка"></img>
      </div>
      <div className={styles.flex}>
        <p className={styles.contactTextBold}>{boldText}</p>
        <p className={styles.contactText}>{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;