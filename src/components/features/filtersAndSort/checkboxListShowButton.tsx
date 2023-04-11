import { Dispatch, SetStateAction } from "react";
import styles from "../../../styles/filtersAndSort/checkboxList.module.css";

interface CheckboxListShowButtonProps{
    setShowAllOpened: Dispatch<SetStateAction<boolean>>;
    buttonText:string;
}

const CheckboxListShowButton = ({setShowAllOpened, buttonText}:CheckboxListShowButtonProps) => {

    return(
        <button
            className={styles.smallButton}
            onClick={() => setShowAllOpened((prev) => !prev)}
        >
            {buttonText}
      </button>
    )
}
export default CheckboxListShowButton;