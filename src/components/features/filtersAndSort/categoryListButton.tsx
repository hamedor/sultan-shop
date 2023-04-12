import styles from "../../../styles/filtersAndSort/categoryList.module.css";

interface CategoryListButtonProps{
    vertical:boolean;
    setSelectedCategory: (category: string) => void;
    category: string;
}


const CategoryListButton = ({vertical, setSelectedCategory, category}:CategoryListButtonProps) => {



    return(
        <button
            onClick={() => setSelectedCategory(category)}
            className={
              vertical ? styles.buttonVertical : styles.buttonHorizontal
            }
          >
            {category}
        </button>
    )
}

export default CategoryListButton;