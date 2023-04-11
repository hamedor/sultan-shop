import ImageInput from "./ImageInput";
import SizeInput from "./sizeInput";
import SizeTypeSelect from "./sizeTypeSelect";
import TitleInput from "./titlteInput";
import ProducerInput from "./producerInput";
import BrandInput from "./brandInput";
import PriceInput from "./priceInput";
import DescriptionInput from "./descriptionInput";
import CategoriesSelect from "./categoriesSelect";

import { Item } from "../../interfaces";
import { Dispatch, SetStateAction } from "react";

import styles from "../../styles/itemAndForm.module.css";

interface TotalFormProps{
  wide?:boolean;
  setItem: Dispatch<SetStateAction<Item>>;
  item:Item;
  categories:string[];
  saveItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const TotalForm = ({wide,setItem, item, categories, saveItem}:TotalFormProps) => {

    

    return(

        <div className={styles.form} style={{width: wide ? '20rem' : 'auto'}}  data-testid='form'> 
          <ImageInput setItem={setItem}/>
          <div className={styles.flex}>
            <SizeInput setItem={setItem} size={item.size}/>
            <SizeTypeSelect setItem={setItem} sizeType={item.sizeType}/>
          </div>
          <TitleInput  setItem={setItem} title={item.title}/>
          <ProducerInput setItem={setItem} producer={item.producer}/>
          <BrandInput setItem={setItem} brand={item.brand}/>
          <PriceInput setItem={setItem} price={item.price}/>
          <DescriptionInput setItem={setItem} description={item.description}/>
          <CategoriesSelect item={item} setItem={setItem} categories={categories}/>
          
          
          <button
                type="submit"
                className={styles.adminButton}
                onClick={(e) => saveItem(e)}
              >
                Сохранить
              </button>

        </div>

    )

}

export default TotalForm;