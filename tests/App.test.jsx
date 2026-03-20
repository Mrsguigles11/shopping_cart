import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from "../src/App";
import routes from "../src/routes.jsx";

describe("App component", () => {
  it("renders home page on page load", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"], // starting URL
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });
});
