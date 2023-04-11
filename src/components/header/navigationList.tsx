import styles from "../../styles/header.module.css";
import NavigationItem from "./navigationItem";

const NavigationList = () => {
    return (
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <NavigationItem text={'О компании'}/>
          <NavigationItem text={'Доставка и оплата'}/>
          <NavigationItem text={'Возврат'} />
          <NavigationItem text={"Контакты"} />
        </ul>
      </nav>
    );
  };

  export default NavigationList;