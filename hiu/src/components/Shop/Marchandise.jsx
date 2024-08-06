import React, { useState, useContext } from "react";
import mugs from "../../assets/Web/mugs.png";
import glass from "../../assets/Web/glass.png";
import cup from "../../assets/Web/cup.png";
import bluebags from "../../assets/Web/bluebags.png";
import bags from "../../assets/Web/bags.png";


import CartContext from "../Context/CartContext";

const Marchand = [
    {
        id: 1,
        img: mugs,
        name: "Mugs",
        price: 10.99,
        aosDelay: "100",
        description: "A refreshing fruit juice made from fresh fruits.",
        ingredients: [],
    },
    {
        id: 2,
        img: glass,
        name: "Glass",
        price: 10.99,
        aosDelay: "300",
        description: "A tangy and sweet lemonade made from lemons and sugar.",
        ingredients: [],
    },
    {
        id: 3,
        img: cup,
        name: "Cup",
        price: 10.99,
        aosDelay: "500",
        description: "A creamy smoothie made with blended fruits and yogurt.",
        ingredients: [],
    },
    {
        id: 4,
        img: bluebags,
        name: "Bluebags",
        price: 10.99,
        aosDelay: "200",
        description:"Is the second most popular beverage in the world. It is made by steeping the leaves, or twigs, of the tea plant in boiling water for a few minutes to a few hours.",
        ingredients: [],
    },
    {
        id: 5,
        img: bags,
        name: "Bags",
        price: 10.99,
        aosDelay: "200",
        description: "Most popular drink in the world.",
        ingredients: [],
    },
];

const Marchandise = ({ onProductClick }) => {
    const [showMore, setShowMore] = useState(false);
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
    };

    const defaultDisplayCount = 3;

    return (
        <div className="py-10 mt-20">
            <div className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md border-2 border-white cursor-pointer">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 " />
                    </svg>
                    <span>{cart.length}</span>
                </div>
            </div>
            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">Marchandise For You</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-5 place-items-center">
                    {Marchand.slice(0, showMore ? Marchand.length : defaultDisplayCount).map((Marchandise) => (
                        <div
                            key={Marchandise.id}
                            data-aos="fade-up"
                            data-aos-delay={Marchandise.aosDelay}
                            className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                            onClick={() => onProductClick(Marchandise)}
                        >
                            <div className="h-[122px] relative">
                                <img
                                    src={Marchandise.img}
                                    alt={Marchandise.name}
                                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="w-full"></div>
                                <h1 className="text-xl font-bold">{Marchandise.name}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{Marchandise.description}</p>
                                <div className="p-4 flex items-center justify-between">
                                    <p className="font-bold text-lg">${Marchandise.price.toFixed(2)}</p>
                                    <button
                                        className="bg-primary text-white px-4 py-2 rounded-md border-2 border-white"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToCart(Marchandise);
                                        }}
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <button onClick={() => setShowMore(!showMore)} className="text-primary hover:text-primary-dark underline">
                        {showMore ? "Show Less" : "View More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Marchandise;