import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
export default function DeliveryOptions({ deliveryOptions, setCart, cart, cartItem, selectedDeliveryOption }) {
    return (
        <div className="delivery-options">
                          <div className="delivery-options-title">
                            Choose a delivery option:
                          </div>
                          {deliveryOptions.map((deliveryOption) => {
                            return (
                              <div key={deliveryOption.id} className="delivery-option">
                                <input
                                  type="radio"
                                  onChange={() => {
                                    const updatedCart = cart.map((item) => {
                                      if (item.productId === cartItem.productId) {
                                        return {
                                          ...item,
                                          deliveryOptionId: deliveryOption.id,
                                        };
                                      }
                                      return item;
                                    });
                                    setCart(updatedCart);
                                  }}
                                  checked={
                                    deliveryOption.id === cartItem.deliveryOptionId
                                  }
                                  className="delivery-option-input"
                                  name={`delivery-option-${cartItem.productId}`}
                                />
                                <div>
                                  <div className="delivery-option-date">
                                    {selectedDeliveryOption
                                      ? dayjs(
                                          selectedDeliveryOption.estimatedDeliveryTimeMs
                                        ).format("dddd, MMMM D")
                                      : "No delivery option selected"}
                                  </div>
                                  <div className="delivery-option-price">
                                    {deliveryOption.priceCents === 0
                                      ? "FREE Shipping"
                                      : `${formatMoney(
                                          deliveryOption.priceCents
                                        )} - Shipping`}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
    );
}