import { formatMoney  } from "../../utils/money";

export default function PaymentSummary({ paymentSummary }) {
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary ? paymentSummary.totalItems : 0}):</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.productCostCents : 0)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.shippingCostCents : 0)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          {formatMoney(
            paymentSummary ? paymentSummary.totalCostBeforeTaxCents : 0
          )}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.taxCents : 0)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary ? paymentSummary.totalCostCents : 0)}
        </div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
}
