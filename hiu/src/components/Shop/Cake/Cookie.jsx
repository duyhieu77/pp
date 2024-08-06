// src/components/Shop/Cookie/Cookie.jsx
import React, { useState } from "react";
import ChocolateCookie from "../../../assets/Web/ChocolateCookie.png";
import OatmealRaisin from "../../../assets/Web/OatmealRaisin.png";
import PeanutButter from "../../../assets/Web/PeanutButter.png";
import Snickerdoodle from "../../../assets/Web/Snickerdoodle.png";
import donut from "../../../assets/Web/donut.png";

const CookiesData = [
  {
    id: 1,
    img: ChocolateCookie,
    name: "Chocolate Chip Cookie",
    price: 4.50,
    aosDelay: "100",
    description: "Classic chocolate chip cookies with a soft and chewy center.",
    ingredients: ["Flour", "Sugar", "Chocolate chips", "Eggs", "Butter"],
  },
  {
    id: 2,
    img: OatmealRaisin,
    name: "Oatmeal Raisin Cookie",
    price: 4.50,
    aosDelay: "300",
    description: "Oatmeal cookies with plump raisins and a hint of cinnamon.",
    ingredients: ["Oats", "Raisins", "Flour", "Sugar", "Butter"],
  },
  {
    id: 3,
    img: PeanutButter,
    name: "Peanut Butter Cookie",
    price: 4.50,
    aosDelay: "500",
    description: "Rich and creamy peanut butter cookies with a slight crunch.",
    ingredients: ["Peanut butter", "Flour", "Sugar", "Eggs", "Butter"],
  },
  {
    id: 4,
    img: Snickerdoodle,
    name: "Snickerdoodle Cookie",
    price: 4.50,
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

const Cookie = ({ onProductClick }) => {
  const [showMore, setShowMore] = useState(false);
  

  // Số lượng sản phẩm hiển thị mặc định
  const defaultDisplayCount = 3;

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20">
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
                    AddToCart(cookie);
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

export default Cookie;
