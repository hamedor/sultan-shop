import styles from "../../styles/footer.module.css";

interface ListItemProps{
    text: string;
}

const ListItem = ({text}:ListItemProps) => {

    return(
        <li className={styles.item}>
            <a href="/#">{text}</a>
      </li>
    )
}

export default ListItem;