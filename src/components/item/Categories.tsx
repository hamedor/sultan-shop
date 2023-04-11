import styles from '../../styles/itemAndForm.module.css';

interface CategoriesProps{
    category?:string[];
}

const Categories = ({category}:CategoriesProps) => {

    return(
        <div className={styles.categoryContainer}>
        {category?.map((c: string) => (
          <p className={styles.category} key={c}>
            {c}
          </p>
        ))}
      </div>
    )
}

export default Categories;