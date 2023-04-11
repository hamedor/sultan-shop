
import styles from "../../styles/header.module.css";

interface BurgerMenuProps{
    burgerOpen:boolean;
    burgerToggle: () => void;

}

const BurgerMenu = ({burgerOpen, burgerToggle}:BurgerMenuProps) => {

    
    return(
        <div
        onClick={burgerToggle}
        className={
          burgerOpen
            ? `${styles.burger} ${styles.burgerActive}`
            : styles.burger
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
}

export default BurgerMenu;