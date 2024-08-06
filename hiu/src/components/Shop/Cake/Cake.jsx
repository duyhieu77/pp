// src/components/Shop/Cake/Cake.jsx
import React, { useState, useContext } from "react";
import chocolate from "../../../assets/Web/chocolate.png";
import vanilla from "../../../assets/Web/vanilla.png";
import Strawberry from "../../../assets/Web/Strawberry.png";
import RedVelvet from "../../../assets/Web/RedVelvet.png";
import tiramisu from "../../../assets/Web/tiramisu.png";
import Matcha from "../../../assets/Web/Matcha.png";
import ChocolateCookie from "../../../assets/Web/ChocolateCookie.png";
import OatmealRaisin from "../../../assets/Web/OatmealRaisin.png";
import PeanutButter from "../../../assets/Web/PeanutButter.png";
import Snickerdoodle from "../../../assets/Web/Snickerdoodle.png";
import donut from "../../../assets/Web/donut.png";

import CartContext from "../../Context/CartContext";

const CakesData = [
  {
    id: 1,
    img: chocolate,
    name: "Chocolate Cake",
    price: 7,
    aosDelay: "100",
    description: "A moist and decadent chocolate cake layered with rich chocolate ganache and topped with chocolate shavings.",
    ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Chocolate"],
  },
  {
    id: 2,
    img: vanilla,
    name: "Vanilla Cake",
    price: 7,
    aosDelay: "300",
    description: "A classic vanilla cake made with real vanilla beans and topped with a light vanilla buttercream frosting.",
    ingredients: ["Flour", "Sugar", "Vanilla beans", "Eggs", "Butter", "Milk"],
  },
  {
    id: 3,
    img: Strawberry,
    name: "Strawberry Cake",
    price: 7,
    aosDelay: "500",
    description: "A light and fluffy cake infused with fresh strawberries and topped with strawberry cream.",
    ingredients: ["Flour", "Sugar", "Strawberries", "Eggs", "Butter", "Cream"],
  },
  {
    id: 4,
    img: RedVelvet,
    name: "Red Velvet Cake",
    price: 7,
    aosDelay: "200",
    description: "A rich and velvety cake with a hint of cocoa and cream cheese frosting.",
    ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Cream cheese"],
  },
  {
    id: 5,
    img: tiramisu,
    name: "Tiramisu",
    price: 4.70,
    aosDelay: "200",
    description: " A classic Italian dessert made with layers of coffee-soaked ladyfingers (savoiardi) and a creamy mascarpone cheese mixture.",
    ingredients: ["Flour", "Sugar", "Ladyfingers", "Eggs", "Mascarpone cheese", "Cocoa powder"],
  },
  {
    id: 6,
    img: Matcha,
    name: "Matcha Cake",
    price: 7,
    aosDelay: "200",
    description: "A rich and velvety cake with a hint of cocoa and cream cheese frosting.",
    ingredients: ["Flour", "Sugar", "Matcha green tea powder", "Eggs", "Milk"],
  },
];

const CookiesData = [
  {
    id: 1,
    img: ChocolateCookie,
    name: "Chocolate Chip Cookie",
    price: 3,
    aosDelay: "100",
    description: "Classic chocolate chip cookies with a soft and chewy center.",
    ingredients: ["Flour", "Sugar", "Chocolate chips", "Eggs", "Butter"],
  },
  {
    id: 2,
    img: OatmealRaisin,
    name: "Oatmeal Raisin Cookie",
    price: 3,
    aosDelay: "300",
    description: "Oatmeal cookies with plump raisins and a hint of cinnamon.",
    ingredients: ["Oats", "Raisins", "Flour", "Sugar", "Butter"],
  },
  {
    id: 3,
    img: PeanutButter,
    name: "Peanut Butter Cookie",
    price: 3,
    aosDelay: "500",
    description: "Rich and creamy peanut butter cookies with a slight crunch.",
    ingredients: ["Peanut butter", "Flour", "Sugar", "Eggs", "Butter"],
  },
  {
    id: 4,
    img: Snickerdoodle,
    name: "Snickerdoodle Cookie",
    price: 3,
    aosDelay: "700",
    description: "Soft cookies coated with a mixture of cinnamon and sugar.",
    ingredients: ["Flour", "Sugar", "Cinnamon", "Butter", "Eggs"],
  },
  {
    id: 5,
    img: donut,
    name: "Donut",
    price: 4.50,
    aosDelay: "700",
    description: "It is popular in many countries and is prepared in various forms as a sweet snack.",
    ingredients: ["Flour", "Sugar", "vanilla", "Baking powder", "Eggs"],
  },
];


const Cake = ({ onProductClick }) => {
  const [showMore, setShowMore] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  // Số lượng sản phẩm hiển thị mặc định
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
          <h1 className="text-4xl font-bold font-cursive text-gray-800">CaKe For You</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-5 place-items-center">
          {CakesData.slice(0, showMore ? CakesData.length : defaultDisplayCount).map((Cake) => (
            <div
              key={Cake.id}
              data-aos="fade-up"
              data-aos-delay={Cake.aosDelay}
              className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              onClick={() => onProductClick(Cake)}
            >
              <div className="h-[122px] relative">
                <img
                  src={Cake.img}
                  alt={Cake.name}
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{Cake.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {Cake.description}
                </p>
                <div className="p-4 flex items-center justify-between">
                  <p className="font-bold text-lg">
                    ${Cake.price.toFixed(2)}
                  </p>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-md border-2 border-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(CakesData);
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
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-primary hover:text-primary-dark underline"
          >
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
        <div className="text-center mb-20 mt-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Cookies For You
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-5 place-items-center">
          {CookiesData.slice(0, showMore ? CookiesData.length : defaultDisplayCount).map((cookie) => (
            <div
              key={cookie.id}
              data-aos="fade-up"
              data-aos-delay={cookie.aosDelay}
              className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              onClick={() => onProductClick(cookie)}
            >
              <div className="h-[122px] relative">
                <img
                  src={cookie.img}
                  alt={cookie.name}
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{cookie.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {cookie.description}
                </p>
                <div className="p-4 flex items-center justify-between">
                  <p className="font-bold text-lg">
                    ${cookie.price.toFixed(2)}
                  </p>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-md border-2 border-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(cookie);
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
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-primary hover:text-primary-dark underline"
          >
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cake;
