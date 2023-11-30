
import {shoesData} from "../../ProductData/shoesData.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { IoIosArrowForward } from "react-icons/io";
import {clothesData} from "../../ProductData/clothesData.jsx";
import {category} from "../../ProductData/category.jsx";

function HomeMidDisplay(){

    const productDisplay = category.map((itemData) => (
        <ProductCard key={itemData.id} categoryData={itemData} limit={4} />
    ))

    return (
        <>
            {productDisplay}
        </>
)



}


export default HomeMidDisplay;