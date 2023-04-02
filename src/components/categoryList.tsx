import styles from "../styles/categoryList.module.css";

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
  const setCat = (e: HTMLElement) => {
    setSelectedCategory(e.innerText);
  };

  return (
    <div className={vertical ? styles.vertical : styles.horizontal}>
      <div>
        {" "}
        <button
          onClick={(e) => setCat(e.target as HTMLElement)}
          className={vertical ? styles.buttonVertical : styles.buttonHorizontal}
        >
          Уход за телом
        </button>
      </div>
      {categories?.map((e) => {
        return (
          <button
            onClick={(e) => setCat(e.target as HTMLElement)}
            className={
              vertical ? styles.buttonVertical : styles.buttonHorizontal
            }
            key={e}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;
