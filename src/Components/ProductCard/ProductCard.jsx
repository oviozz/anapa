
import {IoIosArrowForward} from "react-icons/io";
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useRef} from "react";
import {useInView} from "framer-motion";

function ProductCard({categoryData, limit}){

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const {title, route, data} = categoryData


    return (

        <div ref={ref} className={`${isInView ? 'animate-fade-up animate-duration-1000' : ''} px-4 py-3 mx-auto sm:px-6 sm:py-5  lg:px-8`}>
            <header className={"flex items-center justify-between"}>
                <h2 className="text-xl font-bold sm:text-3xl ">
                    {title}
                </h2>

                <Link to={`category/${route}`} className={"hover:text-black text-gray-500 hover:cursor-pointer flex items-center gap-1"}>
                    Shop more <IoIosArrowForward />
                </Link>

            </header>

            <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">

                {
                    data.slice(0,limit).map((item) => (
                        <Link to={`/detail/${route}/${item.id}`} key={item.id}>
                            <div href="#" className="block overflow-hidden group">
                                <LazyLoadImage
                                    effect={'blur'}
                                    loading={'lazy'}
                                    src={item.image}
                                    alt=""
                                    className="lg:h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative pt-3 ">
                                    <h3
                                        className="text-xs group-hover:underline group-hover:underline-offset-4"
                                    >
                                        {item.name}
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider"> ${item.price} USD </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </ul>
        </div>

    )



}

export default ProductCard;