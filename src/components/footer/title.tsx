import styles from "../../styles/footer.module.css";

interface TitleProps{
    title: string;
}

const Title = ({title}:TitleProps) => {

    return(
        <h3 className={styles.title}>{title}</h3>
    )
}

export default Title;