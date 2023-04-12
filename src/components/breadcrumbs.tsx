import { Link } from 'react-router-dom';
import styles from '../styles/breadcrumbs.module.css';
import { Item } from '../interfaces';

interface Breadcrumb{
  label: string;
  to: string;
}

interface BreadcrumbsProps{
    item?:Item
    breadcrumbs:Breadcrumb[]
}

const Breadcrumbs = ({item, breadcrumbs}:BreadcrumbsProps) => {

    return (
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map(e=>{
            return(
              <div key={e.label}>
             
              <Link className={styles.child} to={e.to}>
            {e.label}
          </Link>
          <hr className={styles.child}></hr>
          </div>
            )
          })}

          {item ? (
            <>
             
              <p className={styles.child}>{item.title}</p>
            </>
          ):null}
          
        </div>
      );
}

export default Breadcrumbs;