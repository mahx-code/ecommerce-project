import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export default function CartItemDetails({
  cartItem,
  deleteCartItem,
  loadCart,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {isUpdating ? (
              <input
                onChange={(event) => {
                  setQuantity(Number(event.target.value));
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setQuantity(Number(event.target.value));
                     const setTheQuantity = async () => {
                      if (isUpdating === false) {
                        setIsUpdating(true);
                      } else {
                        await axios.put(
                          `https://ecommerce-project-backend-omega.vercel.app/api/cart-items/${cartItem.productId}`,
                          {
                            quantity,
                          }
                        );
                        setIsUpdating(false);
                        await loadCart();
                      }
                    };
                    setTheQuantity();
                  } else if (event.key === "Escape") {
                    setQuantity(cartItem.quantity);
                    setIsUpdating(false);
                  }
                }}
                value={quantity}
                type="text"
                style={{ width: "50px", marginLeft: "5px", marginRight: "5px" }}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={async () => {
              if (isUpdating === false) {
                setIsUpdating(true);
              } else {
                await axios.put(`/api/cart-items/${cartItem.productId}`, {
                  quantity,
                });
                setIsUpdating(false);
                await loadCart();
              }
            }}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
