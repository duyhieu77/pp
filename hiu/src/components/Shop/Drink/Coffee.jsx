// src/components/Shop/Coffee/Coffee.jsx
import React, { useState } from "react";
import americano from "../../../assets/Web/americano.png";
import Cappuccino from "../../../assets/Web/Cappuccino.png";
import latte from "../../../assets/Web/latte.png";
import espresso from "../../../assets/Web/espresso.png";
import blackcafe from "../../../assets/Web/blackcafe.png";
import macchiato from "../../../assets/Web/macchiato.png";
import ColdBrew from "../../../assets/Web/ColdBrew.png";
import Cortado from "../../../assets/Web/Cortado.png";
import Mocha from "../../../assets/Web/Mocha.png";
import Lemonade from "../../../assets/Web/Lemonade.png";
import FruitJuice from "../../../assets/Web/FruitJuice.png";
import Smoothie from "../../../assets/Web/Smoothie.png";
import Tea from "../../../assets/Web/Tea.png";
import water from "../../../assets/Web/water.png";

const OtherDrinkData = [
  {
    id: 1,
    img: FruitJuice,
    name: "Fruit Juice",
    price: 3.25,
    aosDelay: "100",
    description: "A refreshing fruit juice made from fresh fruits.",
    ingredients: ["Fresh fruits", "Sugar", "Water"],
  },
  {
    id: 2,
    img: Lemonade,
    name: "Lemonade",
    price: 2.25,
    aosDelay: "300",
    description: "A tangy and sweet lemonade made from lemons and sugar.",
    ingredients: ["Lemon", "Sugar", "Water"],
  },
  {
    id: 3,
    img: Smoothie,
    name: "Smoothie",
    price: 3.99,
    aosDelay: "500",
    description: "A creamy smoothie made with blended fruits and yogurt.",
    ingredients: ["Fruits", "Yogurt", "Honey"],
  },
  {
    id: 4,
    img: Tea,
    name: "Tea",
    price: 2.00,
    aosDelay: "200",
    description: "Is the second most popular beverage in the world. It is made by steeping the leaves, or twigs, of the tea plant in boiling water for a few minutes to a few hours.",
    ingredients: ["Tea leaves", "Boiling water", "Milk", "Sugar"],
  },
  {
    id: 5,
    img: water,
    name: "water",
    price: 0.10,
    aosDelay: "200",
    description: "Most popular drink in the world.",
    ingredients: ["Fresh Water"],
  },
];

const CoffeeData = [
  {
    id: 1,
    img: espresso,
    name: "Espresso",
    price: 3.99,
    aosDelay: "100",
    description: "A strong black coffee made by forcing steam through ground coffee beans.",
    ingredients: ["Coffee beans", "Water"],
  },
  {
    id: 2,
    img: americano,
    name: "Americano",
    price: 5.00,
    aosDelay: "300",
    description: "A coffee prepared by adding hot water to espresso, giving it a similar strength but different flavor from regular brewed coffee.",
    ingredients: ["Espresso", "Water"],
  },
  {
    id: 3,
    img: Cappuccino,
    name: "Cappuccino",
    price: 4.25,
    aosDelay: "500",
    description: "An Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and milk foam on top.",
    ingredients: ["Espresso", "Steamed milk", "Milk foam"],
  },
  {
    id: 4,
    img: latte,
    name: "Latte",
    price: 6.00,
    aosDelay: "200",
    description: "A coffee drink made with espresso and steamed milk, topped with a small amount of milk foam.",
    ingredients: ["Espresso", "Steamed milk", "Milk foam"],
  },
  {
    id: 5,
    img: blackcafe,
    name: "black coffe",
    price: 2.00,
    aosDelay: "200",
    description: "A coffee without sugar creamer or milk.",
    ingredients: ["Boiling water", "Coffee powder"],
  },
  {
    id: 6,
    img: macchiato,
    name: "macchiato",
    price: 3.25,
    aosDelay: "200",
    description: " Is an espresso coffee drink with a small amount of milk, usually foamed.",
    ingredients: ["Espresso", "Milk", "Vanilla, caramel, or other flavored syrups"],
  },
  {
    id: 7,
    img: ColdBrew,
    name: "Cold Brew",
    price: 5.25,
    aosDelay: "200",
    description: "Is the process of steeping coffee grounds in water at cool temperatures for an extended period. Coarse-ground beans are soaked in water for about 12 to 24 hours.",
    ingredients: ["Coarsely ground coffee", "Cold or room temperature water"],
  },
  {
    id: 8,
    img: Cortado,
    name: "Cortado",
    price: 4.50,
    aosDelay: "200",
    description: " Is a Spanish beverage consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity",
    ingredients: ["Espresso", "milk", "Siro", "Vanill or caramel."],
  },
  {
    id: 9,
    img: Mocha,
    price: 4.75,
    name: "Mocha",
    aosDelay: "200",
    description: "A popular blended coffee drink that combines espresso with milk and chocolate syrup.",
    ingredients: ["Espresso", "Milk", "Cacao", "Whipped cream "],
  },
];

const Coffee = ({ onProductClick }) => {
  const [showMore, setShowMore] = useState(false);

  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    setCart([...cart, product]);
  };

  const onCartClick = (cart) => {
    console.log(cart);
  };

  // Số lượng sản phẩm hiển thị mặc định
  const defaultDisplayCount = 3;


  return (
    <div className="py-10 mt-20 ">
      <div className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md border-2 border-white cursor-pointer" onClick={() => onCartClick(cart)}>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 " />
          </svg>
          <span>{cart.length}</span>
        </div>
      </div>
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">Coffee For You</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-5 place-items-center">
          {CoffeeData.slice(0, showMore ? CoffeeData.length : defaultDisplayCount).map((Coffee) => (
            <div key={Coffee.id} data-aos="fade-up" data-aos-delay={Coffee.aosDelay} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]" onClick={() => onProductClick(Coffee)}>
              <div className="h-[122px] relative">
                <img src={Coffee.img} alt={Coffee.name} className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{Coffee.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{Coffee.description}</p>
                <div className="p-4 flex items-center justify-between">
                  <p className="font-bold text-lg">${Coffee.price.toFixed(2)}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-md border-2 border-white" onClick={(e) => { e.stopPropagation(); AddToCart(Coffee); }}>Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button onClick={() => setShowMore(!showMore)} className="text-primary hover:text-primary-dark underline">
            {showMore ? "Show Less" : "View More"}</button>
        </div>

        <div className=" text-center mb-20 mt-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">Other Drinks For You</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-5 place-items-center">
          {OtherDrinkData.slice(0, showMore ? OtherDrinkData.length : defaultDisplayCount).map((drink) => (
            <div key={drink.id} data-aos="fade-up" data-aos-delay={drink.aosDelay} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]" 
            onClick={() => onProductClick(drink)}>
              <div className="h-[122px] relative">
                <img src={drink.img} alt={drink.name} className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{drink.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{drink.description}</p>
                <div className="p-4 flex items-center justify-between">
                  <p className="font-bold text-lg">${drink.price.toFixed(2)}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-md border-2 border-white" onClick={(e) =>
                     { e.stopPropagation(); AddToCart(drink); }}
                     > Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={() => setShowMore(!showMore)} className="text-primary hover:text-primary-dark underline">
            {showMore ? "Show Less" : "View More"}</button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
