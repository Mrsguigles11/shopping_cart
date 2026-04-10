import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import App from "../src/App";

describe("Home", () => {
  it("shop now button takes you to shop", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const shopNow = screen.getByRole("link", { name: "Shop Now" });
    await user.click(shopNow);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Red Lipstick" }),
      ).toBeInTheDocument(),
    );
  });
});
