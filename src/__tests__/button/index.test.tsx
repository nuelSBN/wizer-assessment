import { render, screen } from "@testing-library/react";
import Button from "../../components/button";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the primary variant styles by default", () => {
    render(<Button label="Primary Button" />);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass(
      "bg-[#8158F3]",
      "text-white",
      "hover:bg-[#9B7AF5]"
    );
  });

  it("applies the secondary variant styles when specified", () => {
    render(<Button label="Secondary Button" variant="secondary" />);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass(
      "bg-white",
      "border-gray-300",
      "text-gray-900",
      "hover:bg-gray-100"
    );
  });

  it("renders the button with the correct size", () => {
    render(<Button label="Small Button" size="small" />);
    const button = screen.getByText("Small Button");
    expect(button).toHaveClass("p-[8px_16px]", "text-sm");

    render(<Button label="Medium Button" size="medium" />);
    expect(screen.getByText("Medium Button")).toHaveClass(
      "p-[10px_18px]",
      "text-base"
    );

    render(<Button label="Large Button" size="large" />);
    expect(screen.getByText("Large Button")).toHaveClass(
      "px-6",
      "py-3",
      "text-lg",
      "w-full"
    );
  });

  it("disables the button when the disabled prop is true", () => {
    render(<Button label="Disabled Button" disabled />);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "bg-gray-400",
      "text-white",
      "cursor-not-allowed"
    );
  });

  it("renders fullWidth styles when fullWidth is true", () => {
    render(<Button label="Full Width Button" fullWidth />);
    const button = screen.getByText("Full Width Button");
    expect(button).toHaveClass("w-full");
  });
});
