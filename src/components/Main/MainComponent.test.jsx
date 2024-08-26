import { render, screen } from "@testing-library/react";
// setupTests.js or jest.setup.js
import "@testing-library/jest-dom";

import MainComponent from "@/components/Main/MainComponent";

// Do not mock MainComponent when directly testing it.

describe("MainComponent", () => {
  it("renders the image with the correct alt text", () => {
    render(<MainComponent />);
    const image = screen.getByAltText("seen");
    expect(image).toBeInTheDocument();
  });

  it('renders the "Book Consultation" button', () => {
    render(<MainComponent />);
    const button = screen.getByText("Book Consultation");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-orange-300");
  });

  it('renders the "SubPart" heading', () => {
    render(<MainComponent />);
    const heading = screen.getByText("SubPart");
    expect(heading).toBeInTheDocument();
  });

  // You don't need to duplicate this test
  // The first "renders the image with the correct alt text" test already covers this
});
