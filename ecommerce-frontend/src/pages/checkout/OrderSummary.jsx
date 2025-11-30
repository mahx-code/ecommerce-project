
import CartItemDetails from "./CartItemDetails.jsx";
import DeliveryOptions from "./DeliveryOptions.jsx";
import DeliveryDate from "./DeliveryDate.jsx";

export default function OrderSummary({ cart, deliveryOptions, setCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem} selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  setCart={setCart}
                  cart={cart}
                  cartItem={cartItem}
                  selectedDeliveryOption={selectedDeliveryOption}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
