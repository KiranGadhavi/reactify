import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import Jest DOM matchers
import MainComponent from "./MainComponent";

describe("MainComponent", () => {
  it("renders without crashing", () => {
    render(<MainComponent />);

    // Ensure there is an element with the role 'main'
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
