import styles from '../../styles/header.module.css';

interface NavigationItemProps{
    text: string;
}

const NavigationItem = ({text}:NavigationItemProps) => {

    return(
        <li>
            <li className={styles.navigationItem}>
                <a href="/#">{text}</a>
            </li>
        </li>
    )
}

export default NavigationItem;