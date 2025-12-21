import { MemoryRouter } from "react-router";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import PaymentSummary from "./PaymentSummary";
import axios from "axios";
import { useLocation } from "react-router";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
const getSamplePaymentSummary = async () => {
  const response = await axios.get("http://localhost:3000/api/payment-summary");
  return response.data;
};

vi.mock("axios");

function Location() {
  const location = useLocation();
  return <div data-testid="url-path">{location.pathname}</div>
}

axios.get.mockImplementation(async (urlPath) => {
  if (urlPath === "http://localhost:3000/api/payment-summary") {
    return {
      data: {
        totalItems: 4,
        productCostCents: 4360,
        shippingCostCents: 0,
        totalCostBeforeTaxCents: 4360,
        taxCents: 436,
        totalCostCents: 4796,
      },
    };
  }
});


let paymentSummary;

let loadCart;

const user = userEvent.setup();

describe("PaymentSummary Component", () => {
  beforeEach(async () => {
    paymentSummary = await getSamplePaymentSummary();
    loadCart = vi.fn();
  });
  it("Displays the component correctly", () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("paymentCostDollars")).toHaveTextContent(
      "$43.60"
    );
    expect(screen.getByTestId("shippingCostDollars")).toHaveTextContent(
      "$0.00"
    );
    expect(screen.getByTestId("totalCostBeforeTaxDollars")).toHaveTextContent(
      "$43.60"
    );
    expect(screen.getByTestId("taxDollars")).toHaveTextContent("$4.36");
    expect(screen.getByTestId("totalCostDollars")).toHaveTextContent("$47.96");
  });

  it("'Place Order' button works", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        <Location />
      </MemoryRouter>
    );
    const placeOrderButton = screen.getByTestId("placeOrderButton");
    await user.click(placeOrderButton);
    expect(screen.getByTestId("url-path")).toHaveTextContent("/orders");
  })
});
