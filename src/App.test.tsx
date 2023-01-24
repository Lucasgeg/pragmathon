import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import { WrappedApp, App } from "./App";

import Router from "./Router";

describe("Router", () => {
  it("renders hello world", () => {
    // ARRANGE
    render(<Router />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello World");
  });
  it("Renders not found with bad url", () => {
    const badRoute = "/toto/wrongRoute";
    render(
      <MemoryRouter initialEntries={["/badRoute"]}>
        <Router />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Not Found"
    );
  });
});
