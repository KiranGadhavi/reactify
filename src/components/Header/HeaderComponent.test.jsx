import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "./HeaderComponent.jsx"; // Adjust the path if necessary

describe("HeaderComponent", () => {
  it("renders HeaderComponent with correct content", () => {
    render(<HeaderComponent />);

    // Check for text content in the header
    const headerText = screen.getByText("KReactify");
    expect(headerText).toBeInTheDocument();

    // Ensure the emoji is also present
    const emoji = screen.getByText("🖊️");
    expect(emoji).toBeInTheDocument();
  });

  test("header contains the menu button image", () => {
    render(<HeaderComponent />);

    // Verify the menu button image is present
    const menuButtonImage = screen.getByAltText("menu-button");
    expect(menuButtonImage).toBeInTheDocument();

    // Check that the image source contains part of the expected path
    const src = menuButtonImage.getAttribute("src");
    // Ensure the URL contains the expected path segment
    expect(src).toContain("menu-open-button.png");
  });

  test("header has correct CSS classes and structure", () => {
    render(<HeaderComponent />);

    // Check if the header has the correct classes
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("grid");
    expect(headerElement).toHaveClass("p-4");
    expect(headerElement).toHaveClass("fixed");
    expect(headerElement).toHaveClass("top-0");
    expect(headerElement).toHaveClass("left-0");
    expect(headerElement).toHaveClass("w-full");
    expect(headerElement).toHaveClass("z-10");
    expect(headerElement).toHaveClass("bg-white");
  });

  test("header contains a section with the correct structure", () => {
    render(<HeaderComponent />);

    // Check if the header contains a section with the expected structure
    const sectionElement = screen.getByRole("banner").querySelector("section");
    expect(sectionElement).toBeInTheDocument();

    const articles = sectionElement.querySelectorAll("article");
    expect(articles).toHaveLength(2);

    // Check if the articles have expected content
    expect(articles[0]).toHaveTextContent("KReactify");
    expect(articles[0]).toHaveTextContent("🖊️");

    const button = articles[1].querySelector("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(""); // Ensure button is empty or contains specific content if needed
  });
});
