import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useNavigate } from "react-router";

export default function PaymentSummary({ paymentSummary, loadCart }) {
  const navigate = useNavigate()
  const createOrder = async () => {
    await axios.post("/api/orders");
    await loadCart();
    navigate('/orders')
  };
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary ? paymentSummary.totalItems : 0}):</div>
        <div data-testid="paymentCostDollars" className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.productCostCents : 0)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div
          data-testid="shippingCostDollars"
          className="payment-summary-money"
        >
          {formatMoney(paymentSummary ? paymentSummary.shippingCostCents : 0)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div data-testid="totalCostBeforeTaxDollars" className="payment-summary-money">
          {formatMoney(
            paymentSummary ? paymentSummary.totalCostBeforeTaxCents : 0
          )}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div data-testid="taxDollars" className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.taxCents : 0)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div data-testid="totalCostDollars" className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.totalCostCents : 0)}
        </div>
      </div>

      <button
        data-testid="placeOrderButton"
        className="place-order-button button-primary"
        onClick={createOrder}
      >
        Place your order
      </button>
    </div>
  );
}
