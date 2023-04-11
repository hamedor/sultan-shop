import styles from "../../styles/header.module.css";
import downloadIcon from "../../assets/icons/download.svg";

const PriceListButton = () => {
    return (
      <button className={`${styles.button} button-large`}>
        <p>Прайс-лист</p>
        <img src={downloadIcon} alt="иконка загрузки"></img>
      </button>
    );
  };

  export default PriceListButton;