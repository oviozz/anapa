
import React, {useState} from 'react';
import { useShoppingCart } from "../ShoppingCartProvider/ShoppingCartContext.jsx";
import {Link} from "react-router-dom";

function ShoppingCartList() {

    const { cartItems, removeFromCart, clearCart } = useShoppingCart();
    const [hoverText, setHoverText] = useState('Checkout');


    const handleRemoveItem = (item) => {
        removeFromCart(item);
    };

    return (
        <section>
            <div className="px-5 py-8 sm:px-6 sm:py-12 lg:px-10 animate-fade-down">
                <div className="">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                    </header>

                    <div className="">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-[calc(50vh)] bg-white">
                                <p className="text-xl mb-8">Your cart is empty.</p>
                                <Link
                                    to={'/'}
                                    className="px-4 py-2 bg-black text-white border-2 border-black transition duration-300 hover:bg-white hover:text-black"
                                >
                                    Go Home
                                </Link>
                            </div>
                        ) : (
                            <>
                                <ul className="space-y-4">
                                    {cartItems.map((item, index) => (
                                        <li key={index} className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={`Product image of ${item.name}`}
                                                className="h-20 w-20 rounded object-cover"
                                            />

                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{item.category}</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600 text-sm">
                                                    <div>
                                                        <dt className="inline">Size: </dt>
                                                        <dd className="inline">{item.size || 'Default'}</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline">Quantity: </dt>
                                                        <dd className="inline">{item.quantity}</dd>
                                                    </div>
                                                </dl>
                                            </div>

                                            <div className="flex flex-1 items-center justify-end gap-2">
                                                <form>
                                                    <label htmlFor={`Line${index + 1}Qty`} className="sr-only"> Quantity </label>
                                                    <label
                                                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-1xl text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                    >$ {item.price}</label>
                                                </form>

                                                <button className="text-gray-600 transition hover:text-red-600" onClick={() => handleRemoveItem(item)}>
                                                    <span className="sr-only">Remove item</span>

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <h1
                                    className="mt-8 text-red-700 text-right hover:underline cursor-pointer"
                                    onClick={clearCart}>
                                    Remove all items
                                </h1>

                                <div className="flex justify-end border-t border-gray-100 pt-8">
                                    <div className="w-screen max-w-lg space-y-4">
                                        <dl className="space-y-0.5 text-sm text-gray-700">
                                            <div className="flex justify-between">
                                                <dt>Subtotal</dt>
                                                <dd>${calculateSubtotal(cartItems).toFixed(2)}</dd>
                                            </div>

                                            <div className="flex justify-between !text-base font-medium">
                                                <dt>Total</dt>
                                                <dd>${calculateTotal(cartItems).toFixed(2)}</dd>
                                            </div>
                                        </dl>

                                        <div className="flex justify-end">
                                            <a
                                                href="#"
                                                className={` ${hoverText === 'You\'re Broke :(' && 'bg-red-500 text-white'} block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition `}
                                                onMouseEnter={() => setHoverText('You\'re Broke :(')}
                                                onMouseLeave={() => setHoverText('Checkout')}
                                            >
                                                {hoverText}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShoppingCartList;

// Helper functions for calculating subtotal and total
function calculateSubtotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotal(cartItems) {
    // Add logic for taxes, shipping, and other costs if needed
    return calculateSubtotal(cartItems);
}