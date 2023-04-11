import styles from '../../styles/features/paginatedButtons.module.css'

interface PaginationButtonsButtonProps{
    clickF: () => void;
    direction: string;

}

const PaginationButtonsButton = ({clickF, direction}:PaginationButtonsButtonProps) => {

    const className = direction === "left" ? styles.leftButton : styles.rightButton;

    return(
        <li className={className}>
            <button data-testid={direction} onClick={clickF}></button>
        </li>
    )
}

export default PaginationButtonsButton;