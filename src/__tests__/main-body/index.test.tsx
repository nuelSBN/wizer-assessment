import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Mainbody from "../../components/main-body";

describe("Mainbody Component", () => {
  it("renders children when provided", () => {
    render(
      <Mainbody>
        <div data-testid="child-element">Test Child</div>
      </Mainbody>
    );

    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent("Test Child");
  });

  it("renders the Outlet component when no children are provided", () => {
    render(
      <BrowserRouter>
        <Mainbody />
      </BrowserRouter>
    );

    const outletElement = screen.queryByTestId("child-element");
    expect(outletElement).not.toBeInTheDocument();
  });

  it("applies the correct classes", () => {
    render(
      <Mainbody>
        <div>Test</div>
      </Mainbody>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveClass("h-dvh w-full");
  });
});
