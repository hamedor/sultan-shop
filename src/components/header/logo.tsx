import { Link } from 'react-router-dom';
import logo from "../../assets/logo/sultanLogo.svg";
import styles from "../../styles/header.module.css";

const Logo = () => {
    return (
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="логотип компании Султан"></img>
        </Link>
      </div>
    );
};


export default Logo;