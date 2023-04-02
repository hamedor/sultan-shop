import { useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";

import locationicon from "../assets/icons/location.svg";
import mailicon from "../assets/icons/mail.svg";
import logo from "../assets/logo/sultanLogo.svg";
import cart from "../assets/icons/cart.svg";
import operator from "../assets/icons/operator.png";
import searchIcon from "../assets/icons/search.png";
import downloadIcon from "../assets/icons/download.svg";
import phoneButton from "../assets/icons/phoneButton.png";
import searchBlue from "../assets/icons/searchBlue.svg";

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

          <div className={styles.mobileLogo}>
            <Link to="/">
              <img src={logo} alt="логотип компании Султан"></img>
            </Link>
          </div>

          <div className={styles.cart}>
            <div className={styles.cartImage}>
              <Link className={styles.cartImg} to="/cart">
                <img src={cart}></img>
              </Link>

              <div className={styles.circleOuter}>
                <div className={styles.circle}>
                  <p className={styles.count}>{itemsCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hrMobile}></hr>
        <div className={styles.lineMobile}>
          <button className={styles.buttonMobile}>
            <div className={styles.squares}>
              <div className={styles.square1}></div>
              <div className={styles.square2}></div>
              <div className={styles.square3}></div>
              <div className={styles.square4}></div>
            </div>
            <Link to="/catalog">Каталог</Link>
          </button>
          <hr className={styles.hrVertical}></hr>
          <button className={styles.buttonMobile}>
            <img src={searchBlue} alt="иконка поиска"></img>
            <p>Поиск</p>
          </button>
        </div>
        <hr className={styles.hrMobile}></hr>
        <nav
          className={
            burgerOpen ? `${[styles.nav]} ${styles.active}` : styles.nav
          }
        >
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <img src={locationicon} alt="иконка геолокация"></img>
            </div>
            <div className={styles.flex}>
              <p className={styles.contactTextBold}>
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </p>
              <p className={styles.contactText}>(Рынок Восточный)</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <img src={mailicon} alt="иконка почта"></img>
            </div>
            <div className={styles.flex}>
              <a
                href="mailto: opt.sultan@mail.ru"
                className={styles.contactTextBold}
              >
                opt.sultan@mail.ru
              </a>
              <p className={styles.contactText}>На связи в любое время</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <img src={mailicon} alt="иконка телефон"></img>
            </div>
            <div className={styles.flex}>
              <a className={styles.contactTextBold} href="tel:+77774900091">
                +7 (777) 490-00-91
              </a>
              <p className={styles.contactText}>время работы: 9:00-20:00</p>
            </div>
          </div>
          <div className={styles.flexMobile2}>
            <img src={phoneButton} alt="кнопка телефон"></img>
            <button className={styles.buttonUnderline}>Заказать звонок</button>
          </div>

          <hr className={styles.hrDotted}></hr>

          <h3 className={styles.menu}>Меню сайта:</h3>

          <ul className={styles.navigationList}>
            <li className={styles.navigationItem}>
              <a href="#">О компании</a>
            </li>
            <li className={styles.navigationItem}>
              <a href="#">Доставка и оплата</a>
            </li>
            <li className={styles.navigationItem}>
              <a href="#">Возврат</a>
            </li>
            <li className={styles.navigationItem}>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <button className={`${styles.button} button-large`}>
            <p>Прайс-лист</p>
            <img src={downloadIcon} alt="иконка загрузки"></img>
          </button>
        </nav>
      </header>

      <header className={styles.header}>
        <div className={styles.topLine}>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={locationicon} alt="иконка геолокация"></img>
              </div>
              <div className={styles.flex}>
                <p className={styles.contactTextBold}>
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                </p>
                <p className={styles.contactText}>(Рынок Восточный)</p>
              </div>
            </div>
            <hr className={styles.hrCursive}></hr>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={mailicon} alt="иконка почта"></img>
              </div>
              <div className={styles.flex}>
                <a
                  href="mailto: opt.sultan@mail.ru"
                  className={styles.contactTextBold}
                >
                  opt.sultan@mail.ru
                </a>
                <p className={styles.contactText}>На связи в любое время</p>
              </div>
            </div>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
              <li className={styles.navigationItem}>
                <a href="#">О компании</a>
              </li>
              <li className={styles.navigationItem}>
                <a href="#">Доставка и оплата</a>
              </li>
              <li className={styles.navigationItem}>
                <a href="#">Возврат</a>
              </li>
              <li className={styles.navigationItem}>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.line}>
          <hr className={styles.hr}></hr>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="логотип компании Султан"></img>
              </Link>
            </div>
            <button className={`${styles.button} button-large`}>
              <Link to="/catalog">Каталог</Link>
              <div className={styles.squares}>
                <div className={styles.square1}></div>
                <div className={styles.square2}></div>
                <div className={styles.square3}></div>
                <div className={styles.square4}></div>
              </div>
            </button>

            <div className={styles.inputWrapper}>
              <input
                className={`${styles.input} input-large`}
                type="text"
                placeholder="Поиск..."
              ></input>
              <button className={styles.insideButton}>
                <img src={searchIcon} alt="иконка поиска"></img>
              </button>
            </div>

            <div className={styles.contactBlock}>
              <div className={styles.column}>
                <a className={styles.contactTextBold} href="tel:+77774900091">
                  +7 (777) 490-00-91
                </a>
                <p className={styles.contactText}>время работы: 9:00-20:00</p>
                <button className={styles.buttonUnderline}>
                  Заказать звонок
                </button>
              </div>
              <div className={styles.image}>
                <img src={operator} alt="картинка оператора"></img>
              </div>
            </div>
            <button className={`${styles.button} button-large`}>
              <p>Прайс-лист</p>
              <img src={downloadIcon} alt="иконка загрузки"></img>
            </button>

            <div className={styles.cart}>
              <div className={styles.cartImage}>
                <Link className={styles.cartImg} to="/cart">
                  <img src={cart}></img>
                </Link>

                <div className={styles.circleOuter}>
                  <div className={styles.circle}>
                    <p className={styles.count}>{itemsCount}</p>
                  </div>
                </div>
              </div>
              <div className={styles.cartPrice}>
                <p className={styles.contactText}>Корзина</p>
                <p className={styles.price}>
                  {price} <span>&#8381;</span>
                </p>
              </div>
            </div>
          </div>

          <hr className={styles.hr}></hr>
        </div>
      </header>
    </>
  );
};

export default Header;
