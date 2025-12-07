import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from 'axios';
export default function DeliveryOptions({
  deliveryOptions,
  setCart,
  cart,
  cartItem,
  selectedDeliveryOption,
  loadCart
}) {
  
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((deliveryOption) => {

        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });

          await loadCart();
        };

        return (
          <div key={deliveryOption.id} className="delivery-option" onClick={updateDeliveryOption}>
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {selectedDeliveryOption
                  ? dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                      "dddd, MMMM D"
                    )
                  : "No delivery option selected"}
              </div>
              <div className="delivery-option-price">
                {deliveryOption.priceCents === 0
                  ? "FREE Shipping"
                  : `${formatMoney(deliveryOption.priceCents)} - Shipping`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
