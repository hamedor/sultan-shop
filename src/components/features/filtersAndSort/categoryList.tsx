import CategoryListButton from "./categoryListButton";
import styles from "../../../styles/filtersAndSort/categoryList.module.css";

interface CategoryListProps {
  categories: string[];
  vertical: boolean;
  setSelectedCategory: (category: string) => void;
}

const CategoryList = ({
  categories,
  vertical,
  setSelectedCategory,
}: CategoryListProps): JSX.Element => {

  return (
    <div className={vertical ? styles.vertical : styles.horizontal}>
      <CategoryListButton 
        vertical={vertical}
        setSelectedCategory={setSelectedCategory}
        category={'Уход за телом'}
      />
    
      {categories?.map((e) => {
        return (
          <CategoryListButton
          key={e} 
          vertical={vertical}
          setSelectedCategory={setSelectedCategory}
          category={e}
        />
        );
      })}
    </div>
  );
};

export default CategoryList;
