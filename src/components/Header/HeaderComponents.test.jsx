import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "./HeaderComponent.jsx";

describe("HeaderComponent", () => {
  test("renders HeaderComponent with correct text", () => {
    render(<HeaderComponent />);
    const headerElement = screen.getByText("HeaderComponent");
    console.log(headerElement);
    expect(headerElement).toBeInTheDocument();
  });

  test("header has correct CSS classes", () => {
    render(<HeaderComponent />);
    const headerElement = screen.getByText("HeaderComponent");
    console.log(headerElement);
    expect(headerElement).toHaveClass("text-lg");
    expect(headerElement).toHaveClass("bg-green-700");
  });

  test("header is contained within a header tag", () => {
    render(<HeaderComponent />);
    const headerElement = screen.getByText("HeaderComponent");
    expect(headerElement.tagName).toBe("HEADER");
  });
});
