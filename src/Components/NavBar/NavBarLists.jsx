
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import {useEffect, useRef, useState} from "react";
import "./NavBar.css"
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {category} from "../../ProductData/category.jsx";
import {Link} from "react-router-dom";

function NavBarDropdown() {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        document.addEventListener('keydown', closeDropdown);

        return () => {
            document.removeEventListener('keydown', closeDropdown);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={toggleDropdown}
                className="flex gap-2 items-center  border-b-2 border-white hover:border-b-2 hover:border-black"
            >
                Shop
                <span
                    className={`transition-transform transform ${
                        isDropdownVisible ? 'rotate-180' : ''
                    }`}
                >
                    <FaAngleUp size={15} />
                </span>
            </button>

            <div
                className={`${
                    isDropdownVisible ? 'visible' : 'invisible'
                } absolute mt-2 w-48 bg-white shadow-md border transition-all duration-300 z-10`}
                style={{
                    opacity: isDropdownVisible ? 1 : 0,
                    transform: `translateY(${isDropdownVisible ? '0' : '-10px'})`,
                }}
            >
                {
                    category.map((categoryItem) => (
                        <Link key={categoryItem.id}
                            to={`category/${categoryItem.route}`}
                            className="border-b block px-4 py-2 text-gray-800 hover:bg-gray-200 "
                              onClick={() => setDropdownVisible(false)}
                        >
                            {categoryItem.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}


export default function NavBarLists() {

    const navLinks = [
        {text: 'About', url: '/about'},
    ];

    return (
        <ul className={"flex text-xl gap-10"}>
            <NavBarDropdown/>
            {
                navLinks.map((navItem, index) => (
                    <Link to={navItem.url} key={index} className={"border-b border-white hover:border-b-2 hover:border-black"}>
                        {navItem.text}
                    </Link>
                ))
            }
        </ul>
    )

}