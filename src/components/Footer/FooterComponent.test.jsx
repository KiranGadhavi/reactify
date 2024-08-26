import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FooterComponent from "@/components/Footer/FooterComponent";

describe("FooterComponent", () => {
  it("renders correctly", () => {
    render(<FooterComponent />);
    const footerElement = screen.getByText("Find us on:"); // Adjust based on actual content
    expect(footerElement).toBeInTheDocument();
  });
});
