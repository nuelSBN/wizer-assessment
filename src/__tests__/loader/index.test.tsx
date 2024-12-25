import { render, screen } from "@testing-library/react";
import Loader from "../../components/loader";
// import Loader from "../../components/Loader";

describe("Loader Component", () => {
  it("should render a loader with the appropriate class", () => {
    render(<Loader />);
    const loaderElement = screen.getByRole("status");
    expect(loaderElement).toBeInTheDocument();
  });

  it("should have the correct size and border styles", () => {
    render(<Loader />);
    const loaderElement = screen.getByRole("status");
    expect(loaderElement.firstChild).toHaveClass(
      "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"
    );
  });
});
