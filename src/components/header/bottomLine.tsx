import Logo from "./logo";
import Button from "./button";
import styles from "../../styles/header.module.css";
import SearchInput from "./SearchInput";
import ContactBlock from "./contactBlock";

import CartInfo from "./cartInfo";
import Squares from "./buttonSquares";
import downloadIcon from "../../assets/icons/download.svg";

export interface BottomLineProps{
  itemsCount:number;
  price:number
}

const BottomLine = ({price, itemsCount}:BottomLineProps) => {
    return (
      <>
        <hr className={styles.hr}></hr>
        <div className={styles.content}>
          <Logo />
          <Button text={"Каталог"} icon={<Squares />} link={'/'}/>
          <SearchInput />
          <ContactBlock />
          <Button text={"Прайс-лист"} icon ={<img src={downloadIcon} alt="иконка загрузки"></img>}/>
          <CartInfo price={price} itemsCount={itemsCount}/>
        </div>
      </>
    );
  };

  export default BottomLine;