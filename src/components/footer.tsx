import styles from "../styles/footer.module.css";
import logo from "../assets/logo/sultanLogoWhite.svg";
import whatsup from "../assets/icons/whatsup.png";
import telegram from "../assets/icons/telegramm.png";

import visa from "../assets/icons/visa.png";
import mastercard from "../assets/icons/mastercard.png";
import triangle from "../assets/icons/triangle.png";
import downloadIcon from "../assets/icons/download.svg";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <a href="#">
                <img src={logo} alt="Логотип компании Султан"></img>
              </a>
            </div>
            <p className={styles.text}>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <p className={styles.textSmall}>Подпишись на скидки и новости</p>
            <div className={styles.inputWrapper}>
              <input
                className={`${styles.input} input-large`}
                type="text"
                placeholder="Поиск..."
              ></input>
              <button className={styles.insideButton}>
                <img src={triangle} alt="иконка поиска"></img>
              </button>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Меню сайта:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#">О компании</a>
              </li>
              <li className={styles.item}>
                <a href="#">Доставка и оплата</a>
              </li>
              <li className={styles.item}>
                <a href="#">Возврат</a>
              </li>
              <li className={styles.item}>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Категории:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#">Бытовая химий</a>
              </li>
              <li className={styles.item}>
                <a href="#">Косметика и гигиена</a>
              </li>
              <li className={styles.item}>
                <a href="#">Товары для дома</a>
              </li>
              <li className={styles.item}>
                <a href="#">Товары для детей и мам</a>
              </li>
              <li className={styles.item}>
                <a href="#">Посуда</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Скачать прайс-лист:</h3>

            <button className={`${styles.button} button-large`}>
              <p>Прайс-лист</p>
              <img src={downloadIcon} alt="иконка загрузки"></img>
            </button>

            <p className={styles.item}>Связь в мессенджерах</p>

            <div className={styles.iconContainer}>
              <img src={whatsup} alt="лого whatsup"></img>
              <img src={telegram} alt="лого telegram"></img>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Контакты:</h3>

            <div className={styles.contact}>
              <a className={styles.contactTextBold} href="tel:+77774900091">
                +7 (777) 490-00-91
              </a>
              <p className={styles.contactText}>время работы: 9:00-20:00</p>
              <button className={styles.buttonUnderline}>
                Заказать звонок
              </button>
            </div>

            <div className={styles.contact}>
              <a
                href="mailto: opt.sultan@mail.ru"
                className={styles.contactTextBold}
              >
                opt.sultan@mail.ru
              </a>
              <p className={styles.contactText}>На связи в любое время</p>
            </div>

            <div className={styles.iconContainer}>
              <img src={visa} alt="лого visa"></img>
              <img src={mastercard} alt="лого mastercard"></img>
            </div>
          </div>
        </div>
      </footer>
      <footer className={styles.footerMobile}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <a href="#">
                <img src={logo} alt="Логотип компании Султан"></img>
              </a>
            </div>
            <button className={`${styles.button} button-large`}>
              <p>Прайс-лист</p>
              <img src={downloadIcon} alt="иконка загрузки"></img>
            </button>
          </div>

          <p className={styles.text}>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </p>
          <p className={styles.textSmall}>Подпишись на скидки и новости</p>
          <div className={styles.inputWrapper}>
            <input
              className={`${styles.input} input-large`}
              type="text"
              placeholder="Поиск..."
            ></input>
            <button className={styles.insideButton}>
              <img src={triangle} alt="иконка поиска"></img>
            </button>
          </div>

          <div className={styles.footerFlexMobile}>
            <div>
              <h3 className={styles.title}>Меню сайта:</h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a href="#">О компании</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Доставка и оплата</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Возврат</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.title}>Категории:</h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a href="#">Бытовая химий</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Косметика и гигиена</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Товары для дома</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Товары для детей и мам</a>
                </li>
                <li className={styles.item}>
                  <a href="#">Посуда</a>
                </li>
              </ul>
            </div>
          </div>
          <h3 className={styles.title}>Контакты:</h3>

          <div className={styles.footerFlexMobile}>
            <div className={styles.contact}>
              <a className={styles.contactTextBold} href="tel:+77774900091">
                +7 (777) 490-00-91
              </a>
              <p className={styles.contactText}>время работы: 9:00-20:00</p>
              <button className={styles.buttonUnderline}>
                Заказать звонок
              </button>

              <a
                href="mailto: opt.sultan@mail.ru"
                className={styles.contactTextBold}
              >
                opt.sultan@mail.ru
              </a>
              <p className={styles.contactText}>На связи в любое время</p>

              <div className={styles.iconContainer}>
                <img src={visa} alt="лого visa"></img>
                <img src={mastercard} alt="лого mastercard"></img>
              </div>
            </div>
            <div>
              <p className={styles.item}>Связь в мессенджерах</p>

              <div className={styles.iconContainer}>
                <img src={whatsup} alt="лого whatsup"></img>
                <img src={telegram} alt="лого telegram"></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
