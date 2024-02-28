import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "aasdfasd",
    photo:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    name: "Mackbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

function Cart() {
  const [coupenCode, setCoupenCode] = useState<string>("");
  const [isValidCoupenCode, setIsValidCoupenCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCoupenCode(true);
      } else {
        setIsValidCoupenCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCoupenCode(false);
    };
  }, [coupenCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, idx) => <CartItem key={idx} cartItem={item} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupen Code"
          value={coupenCode}
          onChange={(e) => setCoupenCode(e.target.value)}
        />

        {coupenCode &&
          (isValidCoupenCode ? (
            <span className="green">
              ₹{discount} off using the <code>{coupenCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupen Code <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
}

export default Cart;
