import CartItemDetails from "./CartItemDetails.jsx";
import DeliveryOptions from "./DeliveryOptions.jsx";
import DeliveryDate from "./DeliveryDate.jsx";
import axios from "axios";

export default function OrderSummary({
  cart,
  deliveryOptions,
  setCart,
  loadCart,
}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          if (cartItem.quantity === 0) {
            return null;
          }
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );
          const deleteCartItem = async () => {
            axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate
                deliveryOptions={deliveryOptions}
                cartItem={cartItem}
                selectedDeliveryOption={selectedDeliveryOption}
              />

              <div className="cart-item-details-grid">
                <CartItemDetails
                  cartItem={cartItem}
                  deleteCartItem={deleteCartItem}
                  loadCart={loadCart}
                />

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  setCart={setCart}
                  cart={cart}
                  cartItem={cartItem}
                  selectedDeliveryOption={selectedDeliveryOption}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
