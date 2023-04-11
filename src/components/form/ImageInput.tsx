import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";

const ImageInput = ({setItem}:ItemAndFormChildProps) => {

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            setItem(prev => ({...prev, image: e.target.result}));
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      };


      return(
        <input
        className={styles.file}
        type="file"
        onChange={handleImageChange}
      />
      )
}

export default ImageInput;