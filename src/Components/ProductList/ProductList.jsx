
import { IoIosArrowForward } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";

function ProductItem({ item, animate, category }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Link
            to={`/detail/${category}/${item.id}`}
            key={item.id}
            ref={ref}
            className={`${animate && isInView ? 'animate-fade-up animate-duration-1000' : ''}`}
        >
            <a href="#" className="block overflow-hidden group">
                <LazyLoadImage
                    effect={'blur'}
                    loading={'lazy'}
                    src={item.image}
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3">
                    <h3 className="text-xs group-hover:underline group-hover:underline-offset-4">
                        {item.name}
                    </h3>

                    <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>
                        <span className="tracking-wider"> ${item.price} USD </span>
                    </p>
                </div>
            </a>
        </Link>
    );
}

function ProductList({ categoryData, category }) {

    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        setAnimate(false);
        setTimeout(() => setAnimate(true));
    }, [categoryData]);

    return (
        <div className="px-4 py-3 mx-auto sm:px-6 sm:py-5 lg:px-8">

            <ul className="grid gap-4 mt-7 sm:grid-cols-2 lg:grid-cols-4">
                {categoryData.map((item, index) => (
                    <ProductItem key={item.id} item={item} animate={animate} category={category}/>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
