import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HowItWorksComponent from "./HowItWorksComponent";

// Mock the Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mock imgData props
const mockImgData = {
  src: "/test-image.jpg",
  alt: "Test image",
  width: 300,
  height: 300,
  tittle: "Test Title",
  content: "This is a test content",
};

describe("HowItWorksComponent", () => {
  test("renders the image and content correctly", () => {
    render(<HowItWorksComponent imgData={mockImgData} />);

    // Check if the image is rendered with correct attributes
    const image = screen.getByAltText(mockImgData.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockImgData.src);

    // Check if the title is rendered
    const title = screen.getByText(mockImgData.tittle);
    expect(title).toBeInTheDocument();

    // Check if the content is rendered
    const content = screen.getByText(mockImgData.content);
    expect(content).toBeInTheDocument();
  });
});
