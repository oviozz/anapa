
import {category, shuffleCategoryData} from "../../ProductData/category.jsx";
import {Link} from "react-router-dom";
import {useRef} from "react";
import {useInView} from "framer-motion";


function TopCategoryDisplay(){

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section className={"mt-7"}>
            <div className={`${isInView ? 'animate-fade-down animate-duration-1000' : ''} px-4 mx-auto sm:px-6 lg:px-8`} ref={ref}>
                <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                    {
                        shuffleCategoryData().slice(0,3).map((categories) => (
                            <li key={categories.id}>
                                <div className="relative block group">
                                    <img
                                        src={categories.image}
                                        alt=""
                                        className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                    />

                                    <div
                                        className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                    >
                                        <h3 className="text-xl font-medium text-white">{categories.title}</h3>

                                        <Link to={`category/${categories.route}`}
                                            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>
    )

}

export default TopCategoryDisplay;