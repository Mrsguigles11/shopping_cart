import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import App from "../src/App";

function setup() {
  const user = userEvent.setup();

  const router = createMemoryRouter(routes, {
    initialEntries: ["/shop"],
  });
  render(<RouterProvider router={router} />);

  return { user };
}

describe("Shop", () => {
  it("loads items on page load", async () => {
    setup();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
    });
  });
  it("changes basket quantity when adding item to basket", async () => {
    const { user } = setup();

    const addToBasket = screen.getAllByRole("button", {
      name: "Add to Basket",
    })[0];
    const basket = screen.getAllByRole("link")[2];

    await user.click(addToBasket);
    expect(basket.textContent).toContain("1");
  });
  it("changes item quantity when using plus and minus buttons", async () => {
    const { user } = setup();

    const addButton = screen.getAllByRole("button", { name: "+" })[0];
    const minusButton = screen.getAllByRole("button", { name: "-" })[0];
    const quantity = screen.getAllByText("1")[0];

    await user.click(addButton);
    expect(quantity.textContent).toMatch("2");
    await user.click(minusButton);
    expect(quantity.textContent).toMatch("1");
  });
  it("changes basket quantity when adding multiple items to basket", async () => {
    const { user } = setup();

    const addToBasket = screen.getAllByRole("button", {
      name: "Add to Basket",
    })[0];
    const addButton = screen.getAllByRole("button", { name: "+" })[0];
    const basket = screen.getAllByRole("link")[2];

    await user.click(addButton);
    await user.click(addToBasket);
    expect(basket.textContent).toContain("2");
  });
});
