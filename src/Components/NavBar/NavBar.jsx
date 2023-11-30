
import NavBarLists from "./NavBarLists.jsx";
import { IoCart } from "react-icons/io5";
import Badge from '@mui/joy/Badge';
import NavBarMobileLists from "./NavBarMobileLists.jsx";
import {Link} from "react-router-dom";
import {useShoppingCart} from "../ShoppingCartProvider/ShoppingCartContext.jsx";


export default function NavBar(){

    const { cartItems, removeFromCart, clearCart } = useShoppingCart();

    return (
        <div className={"relative text-black fixed top-0 left-0 right-0 bg-white z-50 flex justify-between items-center py-5 lg:px-10 px-5"}>
            <Link to={"/"} className={"font-bold text-4xl"}>anapa.</Link>

            <div className={"flex items-center"}>

                <div className={"lg:block hidden mr-10"}>
                    <NavBarLists />
                </div>

                <div className={"lg:hidden block mr-2"}>
                    <NavBarMobileLists />
                </div>

                <Link to={"/purchase"}>
                    <Badge badgeContent={cartItems.length} onClick={() => console.log(cartItems)}>
                        <IoCart size={30}/>
                    </Badge>
                </Link>

            </div>
        </div>
    )

}