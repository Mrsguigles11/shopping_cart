import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import App from "../src/App";

describe("ShopItem", () => {
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
  it("changes basket quantity on button click", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={router} />);

    const button = screen.getAllByRole("button", { name: "Add to Basket" })[0];
    const basket = screen.getAllByRole("link")[2];
    await user.click(button);

    expect(basket.textContent).toMatch("Basket 1");
    expect(button).toBeInTheDocument();
  });
});
