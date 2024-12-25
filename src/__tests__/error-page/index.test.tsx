import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "../../components/error-page";

describe("ErrorPage Component", () => {
  it("renders correctly with default message for 404 error", () => {
    render(
      <MemoryRouter>
        <ErrorPage errorCode={404} />
      </MemoryRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Page Not Found. The page you're looking for doesn't exist."
      )
    ).toBeInTheDocument();
  });

  it("renders correctly with default message for 400 error", () => {
    render(
      <MemoryRouter>
        <ErrorPage errorCode={400} />
      </MemoryRouter>
    );

    expect(screen.getByText("400")).toBeInTheDocument();
    expect(
      screen.getByText("Bad Request. Something went wrong.")
    ).toBeInTheDocument();
  });

  it("displays a custom error message", () => {
    const customMessage = "Custom Error Message.";
    render(
      <MemoryRouter>
        <ErrorPage errorCode={400} errorMessage={customMessage} />
      </MemoryRouter>
    );

    expect(screen.getByText("400")).toBeInTheDocument();
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});
