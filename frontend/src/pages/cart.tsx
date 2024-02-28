import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
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
      <main></main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em> - ₹{discount}</em>
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
      </aside>
    </div>
  );
}

export default Cart;
