import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import App from "../src/App";

// maybe try using a set up function

describe("Shop", () => {
  it("loads items on page load", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Mens Cotton Jacket")).toBeInTheDocument();
    });
  });
  it("changes basket quantity when adding item to basket", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });
    render(<RouterProvider router={router} />);

    const addToBasket = screen.getAllByRole("button", {
      name: "Add to Basket",
    })[0];
    expect(addToBasket).toBeInTheDocument();

    const basket = screen.getAllByRole("link")[2];
    await user.click(addToBasket);
    expect(basket.textContent).toMatch("Basket 1");
  });
  it("changes item quantity when using plus and minus buttons", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });
    render(<RouterProvider router={router} />);

    const addButton = screen.getAllByRole("button", { name: "+" })[0];
    const minusButton = screen.getAllByRole("button", { name: "-" })[0];
    const quantity = screen.getAllByText("1")[0];

    expect(quantity).toBeInTheDocument();

    await user.click(addButton);
    expect(quantity.textContent).toMatch("2");
    await user.click(minusButton);
    expect(quantity.textContent).toMatch("1");

  });
  it("changes basket quantity when adding multiple items to basket", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });
    render(<RouterProvider router={router} />);

    const addToBasket = screen.getAllByRole("button", {
      name: "Add to Basket",
    })[0];
    const addButton = screen.getAllByRole("button", { name: "+" })[0];
    expect(addButton).toBeInTheDocument();

    const basket = screen.getAllByRole("link")[2];
    await user.click(addButton);
    await user.click(addToBasket);
    expect(basket.textContent).toMatch("Basket 2");
  });
});
