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
  });
  it("renders items in basket", async () => {
    const { user, router } = setup();

    const addToBasket = await waitFor(
      () =>
        screen.getAllByRole("button", {
          name: "Add to Basket",
        })[0],
    );

    await user.click(addToBasket);
    await router.navigate("/basket");

    await waitFor(() => {
      expect(screen.getByText("Subtotal (1 items)")).toBeInTheDocument();
    });
  });
  it("allows user to edit quantity of items", async () => {
    const { user, router } = setup();

    const addToBasket = await waitFor(
      () =>
        screen.getAllByRole("button", {
          name: "Add to Basket",
        })[0],
    );

    await user.click(addToBasket);
    await router.navigate("/basket");

    const increaseQuantity = await waitFor(() =>
      screen.getByRole("button", { name: "+" }),
    );
    await user.click(increaseQuantity);
    await waitFor(() => {
      expect(screen.getByText("Subtotal (2 items)")).toBeInTheDocument();
    });

    const decreaseQuantity = await waitFor(() =>
      screen.getByRole("button", { name: "-" }),
    );
    await user.click(decreaseQuantity);
    await waitFor(() => {
      expect(screen.getByText("Subtotal (1 items)")).toBeInTheDocument();
    });
  });
  it("allows user to remove items", async () => {
    const { user, router } = setup();

    const addToBasket = await waitFor(
      () =>
        screen.getAllByRole("button", {
          name: "Add to Basket",
        })[0],
    );

    await user.click(addToBasket);
    await router.navigate("/basket");

    const remove = await waitFor(() =>
      screen.getByRole("button", { name: "Remove" }),
    );
    await user.click(remove);

    await waitFor(() => {
      expect(
        screen.queryByText("Essence Mascara Lash Princess"),
      ).not.toBeInTheDocument();
    });
  });
});
