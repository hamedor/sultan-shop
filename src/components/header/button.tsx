import { Link } from "react-router-dom";
import styles from "../../styles/header.module.css";

interface ButtonProps {
  text: string;
  link?: string;
  icon?: React.ReactNode;
  mobile?: boolean;
}


const Button = ({text, link, icon, mobile}:ButtonProps) => {
    return (
      mobile ?(
        <button className={`${styles.buttonMobile}`} >
          {icon}
          {link ? <Link to={link}>{text}</Link> : <p>{text}</p>}
      </button>
      ) : (
        <button className={`${styles.button} button-large`} >
          {link ? <Link to={link}>{text}</Link> : <p>{text}</p>}
          {icon}
       </button>
      )
  );
};

export default Button;