import { useState } from "react";
import styles from "../../styles/header.module.css";


import ContactItem from "./contactItem";
import Logo from "./logo";

import phoneButton from "../../assets/icons/phoneButton.png";
import searchBlue from "../../assets/icons/searchBlue.svg";
import TopLine from "./topLine";
import BottomLine from "./bottomLine";
import NavigationList from "./navigationList";
import PriceListButton from "./priceListButton";
import BurgerMenu from "./burgerMenu";
import CartInfo from "./cartInfo";
import Button from "./button";
import Squares from "./buttonSquares";

interface HeaderProps {
  price: number;
  itemsCount: number;
}

const Header = ({ price, itemsCount }: HeaderProps) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerToggle = () => {
    if ((document.body.style.overflow = "hidden")) {
      document.body.style.overflow = "auto";
    }
    setBurgerOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.headerMobile}>
        <div className={styles.flexMobile}>
          <BurgerMenu burgerOpen={burgerOpen} burgerToggle={burgerToggle}/>
          <Logo/>
          <CartInfo itemsCount={itemsCount}/>
        </div>
        <hr className={styles.hrMobile}></hr>
        <div className={styles.lineMobile}>
          <Button text={'Каталог'} icon={<Squares/> } link={'/'} mobile={true}/>
          <Button text={'Поиск'} icon={<img src={searchBlue} alt="иконка поиска"></img>} mobile={true}/>
        </div>
        <hr className={styles.hrMobile}></hr>
        <nav
          className={
            burgerOpen ? `${[styles.nav]} ${styles.active}` : styles.nav
          }
        >
        <ContactItem type="location"/>
        <ContactItem type="mail"/>
        <ContactItem type="phone" />
          <div className={styles.flexMobile2}>
            <img src={phoneButton} alt="кнопка телефон"></img>
            <button className={styles.buttonUnderline}>Заказать звонок</button>
          </div>
          <hr className={styles.hrDotted}></hr>
          <h3 className={styles.menu}>Меню сайта:</h3>
          <NavigationList/>
          <PriceListButton />
        </nav>
      </header>

      <header className={styles.header}>
          <TopLine/>
          <BottomLine price={price} itemsCount={itemsCount}/>
          <hr className={styles.hr}></hr>
      </header>
    </>
  );
};

export default Header;







