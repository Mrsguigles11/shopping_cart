import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";

function setup() {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/shop"],
  });
  render(<RouterProvider router={router} />);

  return { user, router };
}

describe("Basket", () => {
  it("show empty message when basket is empty", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/basket"],
    });
    render(<RouterProvider router={router} />);

    expect(
      screen.getByText(
        "Oops nothing here yet! Add items in the shop to review the basket",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "0" }).textContent).toMatch("0");
  });
  it("shows item added to basket", async () => {
    const {user} = setup();

    const addToBasket = screen.getAllByRole("button", {
      name: "Add to Basket",
    })[0];
    const basket = screen.getAllByRole("link")[2];

    await user.click(addToBasket);
    expect(basket.textContent).toMatch("Basket 1");
    // await router.navigate('/basket');

    // await waitFor(() => {
    //   expect(
    //     screen.getByRole("heading", { name: "109.95" }).textContent,
    //   ).toMatch("109.95");
    // });
//     await waitFor (() => {expect(
//       screen.getByText(
//         "Oops nothing here yet! Add items in the shop to review the basket",
//       ),
//     ).toBeInTheDocument();
// })
  });
});
