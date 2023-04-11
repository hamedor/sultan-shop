import styles from "../../styles/header.module.css";
import searchIcon from "../../assets/icons/search.png";

const SearchInput = () => {
    return (
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
    );
};

export default SearchInput;
  