
import { clothesData } from "./clothesData.jsx";
import { shoesData } from "./shoesData.jsx";
import {suitsData} from "./suitsData.jsx";
import {pantsData} from "./pantsData.jsx";

export const category = [
    { id: 1, title: 'Shoes', route: 'Shoes', image: 'https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', data: shoesData },
    { id: 2, title: 'Pants', route: 'Pants', image: 'https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',data: pantsData  },
    { id: 3, title: 'Clothes', route: 'Clothes', image: 'https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', data: clothesData },
    { id: 4, title: 'Suits', route: 'Suits', image: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',data: suitsData  },

];

export const shuffleCategoryData = () => {
    const shuffledCategory = [...category];

    for (let i = shuffledCategory.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCategory[i], shuffledCategory[j]] = [shuffledCategory[j], shuffledCategory[i]];
    }

    return shuffledCategory;
};



export const getCategoryData = (title) => {
    const categoryItem = category.find(item => item.title === title);
    return categoryItem ? categoryItem.data : null;
};