import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

function Card({ resData }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const Image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`;

const handleAdd = () => {
  addToCart({
    id: resData.id,
    hotelName: resData.name, // 🏨 restaurant
    itemName: resData.name,  // 🍽️ item
    price: resData.costForTwoMessage,
    image: Image,
  });
};


  return (
    <div className="flex justify-center m-4">
      <div className="w-80 rounded-2xl bg-[#3e0101] p-4 hover:scale-105 transition">

        <h3 className="text-cyan-300 text-2xl text-center mb-2">
          {resData.name}
        </h3>

        <img
          src={Image}
          alt="food"
          className="w-full h-48 object-cover rounded-xl"
        />

        <div className="flex justify-between items-center mt-4">
          <p className="text-white">{resData.costForTwoMessage}</p>

          <button
            onClick={handleAdd}
            className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold hover:bg-green-400"
          >
            + Add
          </button>
        </div>

        <p className="text-gray-300 mt-2">{resData.areaName}</p>
      </div>
    </div>
  );
}

export default Card;
