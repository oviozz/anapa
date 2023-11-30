import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import {Cross as Hamburger} from 'hamburger-react'
import {useEffect, useRef, useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {category} from "../../ProductData/category.jsx";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBarMobileDropdown({closeDrawer}) {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

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


    const categoryRoute = (route) => {
        navigate(`category/${route}`)
        closeDrawer();
    }

    return (
        <div ref={dropdownRef} className={""}>
            <h1 onClick={toggleDropdown} className={"flex items-center gap-2 justify-center"}>Shop
                <span
                    className={`relative inline-flex items-center transition-transform transform`}
                >
                    <span className={`absolute ${isDropdownVisible ? 'rotate-180' : ''}`}>
                        <FaAngleUp size={15} />
                    </span>
                </span>
            </h1>

            {
                isDropdownVisible && (
                    <div className={`${
                        isDropdownVisible ? 'visible' : 'invisible'
                    }transition-all duration-300 mt-3 font-light `}
                         style={{
                             opacity: isDropdownVisible ? 1 : 0,
                             transform: `translateY(${isDropdownVisible ? '0' : '-10px'})`,
                         }}
                    >
                        {
                            category.map((categoryItem) => (
                                <a key={categoryItem.id} onClick={() => categoryRoute(categoryItem.route)}
                                   className="border-b block px-4 py-2 text-xl"
                                >
                                    {categoryItem.title}
                                </a>
                            ))
                        }

                    </div>
                )
            }

        </div>
    )
}

export default function NavBarMobileLists() {

    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>

            <div className={""} onClick={() => setOpen(true)}>
                <Hamburger direction="right" size={30} toggled={open} toggle={setOpen}/>
            </div>


            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        ml: 'auto',
                        mt: 1,
                        mr: 2,
                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        fontSize="sm"
                        sx={{cursor: 'pointer'}}
                    >
                        CLOSE
                    </Typography>

                    <Hamburger direction="right" size={20} toggled={open} toggle={setOpen}/>
                </Box>

                <ul className="mt-5 space-y-4 text-2xl">
                    <li>
                        <NavBarMobileDropdown closeDrawer={() => setOpen(false)}/>
                    </li>

                    <Link to={'/about'} className="flex items-center gap-2 justify-center">
                        About
                    </Link>
                </ul>

            </Drawer>
        </React.Fragment>
    );
}
