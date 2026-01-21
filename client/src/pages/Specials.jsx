import React from "react";

const specials = [
 
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Creamy tomato gravy with soft paneer cubes",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Classic Beef Burger",
    description: "Loaded burger with cheese & house sauce",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center",
    price: "₹149",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    tag: "Must Try",
  },
 
  {
    id: 7,
    name: "Veg Momos",
    description: "Steamed dumplings served with spicy chutney",
    price: "₹129",
    image:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    tag: "Street Special",
  },
  {
    id: 8,
    name: "Cold Coffee",
    description: "Chilled coffee topped with creamy foam",
    price: "₹99",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    tag: "Refreshing",
  },
];


export default function Specials() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
     
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Today’s Specials 🍽️
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Hand-picked dishes by our chef, made fresh and served with love.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {specials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-orange-600">
                  {item.price}
                </span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
