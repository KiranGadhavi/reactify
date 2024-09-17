import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterComponent from "@/components/Footer/FooterComponent";

describe("FooterComponent", () => {
  it("renders correctly", () => {
    render(<FooterComponent />);

    // Use screen.debug() to inspect the rendered output
    screen.debug();

    // Check for the exact text
    const footerElement = screen.getByText("Find us on :"); // Ensure exact match
    expect(footerElement).toBeInTheDocument();
  });
});
