import { FaHome, FaBars, FaClipboardList,FaLocationArrow } from 'react-icons/fa';
export const menuLinks = [
    { title:'Home',icon: <FaHome/>,path:'/'},
    { title:'Menu',icon: <FaBars/>,path:'/menu'},
    { title:'Orders',icon: <FaClipboardList/>,path:'/orders',locations:[{name:"St.Johns",address:"14a Arrowrd"},{name:"Mt Pearl",address:"34a CtRoad"}]},
{title:"location",icon:<FaLocationArrow/>,path:"/location",locations:[{name:"St.Johns",address:"14a Arrowrd"},{name:"Mt Pearl",address:"34a CtRoad"}]
}]

export const menus = [
    {
        category: "BREAKFAST",
        items: [
            {
                id: 1,
                name: "Pancakes",
                price: 5,
                image: process.env.PUBLIC_URL + "/images/bf1.jpg",
                bgCpolor: "white"
            },
            {
                id: 2,
                name: "Egg Sandwich",
                price: 4,
                image: process.env.PUBLIC_URL + "/images/bf2.jpg",
                bgCpolor: "white"
            }
        ]
    },
    {
        category: "SNACKS",
        items: [
            {
                id: 3,
                name: "Hot Dog",
                price: 3,
                image: process.env.PUBLIC_URL + "/images/f1.jpg",
                bgCpolor: "black"
            },
            {
                id: 4,
                name: "French Fries",
                price: 2,
                image: process.env.PUBLIC_URL + "/images/f2.jpg",
                bgCpolor: "black"
            }
        ]
    },
    {
        category: "LUNCH",
        items: [
            {
                id: 5,
                name: "Grilled Chicken Salad",
                price: 8,
                image: process.env.PUBLIC_URL + "/images/f3.jpg",
                bgCpolor: "white"
            },
            {
                id: 6,
                name: "Vegetable Pasta",
                price: 7,
                image: process.env.PUBLIC_URL + "/images/f4.jpg",
                bgCpolor: "white"
            }
        ]
    },
    {
        category: "DINNER",
        items: [
            {
                id: 7,
                name: "Steak",
                price: 12,
                image: process.env.PUBLIC_URL + "/images/f5.jpg",
                bgCpolor: "black"
            },
            {
                id: 8,
                name: "Salmon Fillet",
                price: 10,
                image: process.env.PUBLIC_URL + "/images/f6.jpg",
                bgCpolor: "black"
            }
        ]
    },
    {
        category: "SPECIAL_OCCASIONS",
        items: [
            {
                id: 9,
                name: "Fancy Dessert",
                price: 6,
                image: process.env.PUBLIC_URL + "/images/f7.jpg",
                bgCpolor: "white"
            },
            {
                id: 9,
                name: "Fancy Dessert",
                price: 6,
                image: process.env.PUBLIC_URL + "/images/f7.jpg",
                bgCpolor: "white"
            }
        ]
    },
    {
        category: "FESTIVE_SEASONS",
        items: [
            {
                id: 10,
                name: "Holiday Roast",
                price: 15,
                image: process.env.PUBLIC_URL + "/images/f8.jpg",
                bgCpolor: "black"
            },
            {
                id: 10,
                name: "Holiday Roast",
                price: 15,
                image: process.env.PUBLIC_URL + "/images/f8.jpg",
                bgCpolor: "black"
            }
        ]
    }
];

