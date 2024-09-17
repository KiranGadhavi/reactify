import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "./HeaderComponent.jsx"; // Adjust the path if necessary

describe("HeaderComponent", () => {
  it("renders the header with correct initial content and toggles menu visibility", () => {
    render(<HeaderComponent />);

    // Check for initial header content
    const headerText = screen.getByText("KReactify");
    expect(headerText).toBeInTheDocument();

    const emoji = screen.getByText("🖊️");
    expect(emoji).toBeInTheDocument();

    // Check for menu button
    const menuButton = screen.getByAltText("menu-button");
    expect(menuButton).toBeInTheDocument();

    // Check initial structure (menu should be hidden initially)
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    // Simulate button click to show the menu
    fireEvent.click(menuButton);

    // Check if the menu is now visible
    const menuList = screen.getByRole("list");
    expect(menuList).toBeInTheDocument();

    // Check for close button after clicking the menu button
    const closeButton = screen.getByAltText("close-menu-button");
    expect(closeButton).toBeInTheDocument();

    // Check the content of the menu
    expect(menuList).toHaveTextContent("Home");
    expect(menuList).toHaveTextContent("Founder Page");
    expect(menuList).toHaveTextContent("Booking Consultation");
    expect(menuList).toHaveTextContent("Service");

    // Simulate clicking the close button
    fireEvent.click(closeButton);

    // Check that the menu is hidden again
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
