import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page"; // Adjust the import path if necessary
// import MainComponent from "@/components/Main/MainComponent";

// Mock MainComponent to ensure it is rendered by Home
jest.mock("@/components/Main/MainComponent", () => {
  const MockMainComponent = () => <div>MainComponent Mock</div>;
  MockMainComponent.displayName = "MainComponent";
  return MockMainComponent;
});

describe("Home Component", () => {
  it("renders the MainComponent", () => {
    render(<Home />);
    const mainComponent = screen.getByText("MainComponent Mock");
    expect(mainComponent).toBeInTheDocument();
  });
});
