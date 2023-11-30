
import {useParams} from "react-router-dom";
import ProductList from "../../Components/ProductList/ProductList.jsx";
import {clothesData} from "../../ProductData/clothesData.jsx";
import {category, getCategoryData} from "../../ProductData/category.jsx";
import {useEffect} from "react";


function CategoryProduct(){

    const { item } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [item]);

    return (
        <ProductList category={item} categoryData={getCategoryData(item)}/>
    )

}

export default CategoryProduct;