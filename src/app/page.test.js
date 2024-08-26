import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page"; // Adjust the import path if necessary
// import MainComponent from "@/components/Main/MainComponent";

// Mock MainComponent to ensure it is rendered by Home
jest.mock("@/components/Main/MainComponent", () => () => (
  <div>MainComponent Mock</div>
));

describe("Home Component", () => {
  it("renders the MainComponent", () => {
    render(<Home />);
    // Check if the MainComponent is rendered
    const mainComponent = screen.getByText("MainComponent Mock");
    expect(mainComponent).toBeInTheDocument();
  });
});
