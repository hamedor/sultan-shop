import styles from '../../styles/header.module.css';

interface NavigationItemProps{
    text: string;
}

const NavigationItem = ({text}:NavigationItemProps) => {

    return(
        <li>
            <p className={styles.navigationItem}>
                <a href="/#">{text}</a>
            </p>
        </li>
    )
}

export default NavigationItem;