import { useCart } from "./CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
  } = useCart();

  // group by hotel
  const grouped = cartItems.reduce((acc, item) => {
    acc[item.hotelName] = acc[item.hotelName] || [];
    acc[item.hotelName].push(item);
    return acc;
  }, {});

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 border-b flex justify-between">
        <h2 className="text-xl font-bold">Your Cart 🛒</h2>
        <button onClick={onClose} className="text-xl">✕</button>
      </div>

      <div className="p-4 overflow-y-auto h-[75%]">
        {Object.keys(grouped).map((hotel) => (
          <div key={hotel} className="mb-6">
            <h3 className="font-bold text-lg mb-2">🏨 {hotel}</h3>

            <ul className="space-y-3">
              {grouped[hotel].map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
                >
                  <div>
                    <p className="font-semibold">{item.itemName}</p>
                    <p className="text-sm">{item.price}</p>

                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 bg-gray-300 rounded"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold">
          Place Order 🍽️
        </button>
      </div>
    </div>
  );
}
