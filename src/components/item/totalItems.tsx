import ItemImage from "./itemImage";
import ItemSize from "./itemSize";
import ItemTitle from "./itemTitle";
import ItemKeyValue from "./itemKeyValue";
import ItemPrice from "./itemPrice";
import AddToCartButton from "./addToCartButton";
import Categories from "./Categories";



import { Item } from "../../interfaces";

interface TotalItemsProps{
    category?:string[];
    item:Item;
    size:number | undefined;
    sizeType:string | undefined;
    isItemEdit: boolean;

}

const TotalItems = ({category ,item, isItemEdit, size, sizeType}:TotalItemsProps) => {

    return(
        <>
            {item.image && <ItemImage item={item} isItemEdit={isItemEdit} />}
            <Categories category={category}/>
            <ItemSize sizeType={sizeType} size={size}/>
            <ItemTitle item={item}/>
            <ItemKeyValue item={item} label={'Штрихкод'} value = {'barcode'}/>
            <ItemKeyValue item={item} label={'Производитель'} value = {'producer'}/>
            <ItemKeyValue item={item} label={'Бренд'} value = {'brand'}/>
            <div style={{ display: "flex", marginTop:'auto', alignItems:'center', position:'absolute', bottom:'0.4rem' }}>
                <ItemPrice item={item}/>
                <AddToCartButton item={item}/>
            </div>
        </>
    )
}

export default TotalItems;