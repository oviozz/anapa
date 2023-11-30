
import React, {useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link, useParams} from "react-router-dom";
import {getCategoryData} from "../../ProductData/category.jsx";
import {useShoppingCart} from "../ShoppingCartProvider/ShoppingCartContext.jsx";

const ProductOverview = () => {

    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(1);
    const { category, itemID } = useParams();
    const [chooseSize, setChooseSize] = useState('')
    const { addToCart } = useShoppingCart();
    const [isAddedToCart, setIsAddedToCart] = useState(false);


    const fetchData = getCategoryData(category)
    const selectedItem = fetchData.find(item => item.id === parseInt(itemID));
    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    const handleAddToCart = (category, name, price, image) => {
        addToCart({
            'category': category,
            'quantity': count,
            "name": name,
            "price": price,
            "size": chooseSize,
            "image": image
        });

        setIsAddedToCart(true);
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 2000);
    };


    return (

        <div className=" animate-fade-down 2xl:container 2xl:mx-auto lg:py-10 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">

                <LazyLoadImage
                    effect={'blur'}
                    loading={'lazy'}
                    src={selectedItem.image}
                    alt=""
                    className="w-full object-contain transition duration-500 group-hover:scale-105 sm:w-[700px] sm:h-[650px]"
                />

                <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">

                    <div className={"flex flex-col lg:gap-10 gap-5"}>
                        <div className={"flex items-center gap-1"}>
                            <Link to={"/"} className="font-normal text-base leading-4 text-gray-600 hover:underline">Home</Link>
                            <h1>/</h1>
                            <Link to={`/category/${category}`} className="font-normal text-base leading-4 text-gray-600 hover:underline">{category}</Link>
                            <h1>/</h1>
                            <p className="font-normal text-base leading-4 text-gray-600 hover:underline">{selectedItem.name}</p>
                        </div>


                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{selectedItem.name}</h2>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{selectedItem.description}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">$ {selectedItem.price}</p>

                    <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                            <div className="flex">
                                <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                    -
                                </span>
                                <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14" type="text" value={count} onChange={(e) => e.target.value} />
                                <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                    +
                                </span>
                            </div>
                        </div>
                        <hr className=" bg-gray-200 w-full my-2" />
                        <div className="items-center mt-4">
                            <p className="font-medium text-base leading-4 text-gray-600">Sizes</p>

                            <div className={"mt-5 flex flex-wrap gap-3"}>
                                {selectedItem.size.map((size, index) => (
                                    <button
                                        key={index}
                                        className={`${
                                            chooseSize === size
                                                ? "bg-black text-white"
                                                : "border border-black"
                                        } p-2`}
                                        onClick={() => setChooseSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}

                            </div>

                        </div>
                        <hr className=" bg-gray-200 w-full mt-4" />
                    </div>

                    <button
                        className={`${isAddedToCart ? 'bg-gray-500' : ''} font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6`}
                        onClick={() => handleAddToCart(category, selectedItem.name, selectedItem.price, selectedItem.image)}
                    >
                        {isAddedToCart ? 'Added to Cart!' : 'Add to Shopping Bag'}
                    </button>
                </div>

            </div>
        </div>

    );
};

export default ProductOverview;
