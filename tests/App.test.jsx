import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";
import { Home } from "../src/components/home/Home";
import { Basket } from "../src/components/basket/Basket";
import { Shop } from "../src/components/shop/Shop";
import { MemoryRouter } from "react-router";

describe("App component", () => {
  
  it("renders home page on page load", () => {

beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: "hello" })
    })
  );
});
  
  const router = createMemoryRouter(
    [
      {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "basket", element: <Basket /> },
    ],
      }
    ],
    { initialEntries: ["/"] }
  );

  render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading").textContent).toMatch(/Home/i);  });
});
