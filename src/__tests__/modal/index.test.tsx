import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../../components/modal";
// import { jest } from "@jest/globals";
import Button from "../../components/button";

describe("Modal Component", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    title: "Test Modal",
    onConfirm: mockOnConfirm,
    disabled: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the modal when isOpen is true", () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("renders children inside the modal", () => {
    render(
      <Modal {...defaultProps}>
        <p>Child Content</p>
      </Modal>
    );

    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("calls onClose when clicking outside the modal", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByRole("dialog"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when clicking the confirm button", () => {
    render(<Modal {...defaultProps} />);

    fireEvent.click(screen.getByTestId("button"));

    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("disables the confirm button when disabled is true", () => {
    render(<Modal {...defaultProps} disabled />);

    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
  });
});
