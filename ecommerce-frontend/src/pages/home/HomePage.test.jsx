import { MemoryRouter } from "react-router";
import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import HomePage from "./HomePage";

vi.mock("axios");

describe("HomePage Component", () => {
  let loadCart;
  const user = userEvent.setup();
  beforeEach(() => {
    loadCart = vi.fn();
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === "api/products") {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87,
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"],
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127,
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"],
            },
          ],
        };
      }
    });
  });

  it("displays the products correct", async () => {
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );

    const productContainers = await screen.findAllByTestId("product-container");

    expect(productContainers.length).toBe(2);

    expect(
      within(productContainers[0]).getByText(
        "Black and Gray Athletic Cotton Socks - 6 Pairs"
      )
    ).toBeInTheDocument();
    const firstAddToCartButton = within(productContainers[0]).getByTestId(
      "add-to-cart-button"
    );

    const firstQuantitySelector = within(productContainers[0]).getByTestId(
      "quantitySelector"
    );

    await user.selectOptions(firstQuantitySelector, "2");
    expect(firstQuantitySelector).toHaveValue("2");
    await user.click(firstAddToCartButton);

    const secondAddToCartButton = within(productContainers[0]).getByTestId(
      "add-to-cart-button"
    );
    const secondQuantitySelector = within(productContainers[0]).getByTestId(
      "quantitySelector"
    );
    
    await user.selectOptions(secondQuantitySelector, "4");
    expect(secondQuantitySelector).toHaveValue("4");
    await user.click(secondAddToCartButton);

    expect(axios.post).toHaveBeenNthCalledWith(1, "/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    });
    expect(axios.post).toHaveBeenNthCalledWith(2, "/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 4,
    });
    expect(loadCart).toHaveBeenCalledTimes(2);
  });
});
