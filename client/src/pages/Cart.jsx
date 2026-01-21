import { useCart } from "../components/CartContext";

export default function Cart() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center text-2xl mt-20 text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white shadow rounded-xl p-4 mb-4"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>Qty: {item.qty}</p>
          </div>
          <span>{item.price}</span>
        </div>
      ))}

      
      <button className="w-full mt-6 bg-orange-500 text-white py-4 rounded-xl text-xl font-semibold hover:bg-orange-600">
        Place Order 🍽️
      </button>
    </div>
  );
}
