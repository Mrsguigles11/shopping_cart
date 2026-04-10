import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import App from "../src/App";

function setup() {
  const user = userEvent.setup();

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);

  return { user };
}

describe("Header", () => {
  it("shop link takes you to shop", async () => {
    const { user } = setup();

    const shop = screen.getByRole("link", { name: "Shop" });
    await user.click(shop);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Red Lipstick" }),
      ).toBeInTheDocument(),
    );
  });
  it("basket link takes you to basket", async () => {
    const { user } = setup();

    const basket = screen.getByRole("link", { name: "Basket (0)" });
    await user.click(basket);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Basket" }),
      ).toBeInTheDocument(),
    );
  });
  it("home link takes you to home", async () => {
    const { user } = setup();

    const home = screen.getByRole("link", { name: "Home" });
    await user.click(home);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Welcome to the Odin Shop" }),
      ).toBeInTheDocument(),
    );
  });
});
