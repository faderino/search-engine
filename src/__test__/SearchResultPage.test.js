import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchResultPage from "../pages/SearchResultPage";
import userEvent from "@testing-library/user-event";

describe("SearchResultPage", () => {
  test("should render correctly", () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/normal?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <SearchResultPage />
      </Router>
    );
  });

  test("should navigate to home when logo is clicked", () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/normal?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <SearchResultPage />
      </Router>
    );

    const logo = screen.getByRole("img", {
      name: /logo/i,
    });
    userEvent.click(logo);

    expect(history.location.pathname).toBe("/");
  });

  test("should handle submit when query exists", () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/normal?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <SearchResultPage />
      </Router>
    );

    const input = screen.getByRole("textbox");
    userEvent.type(input, " movie red");
    fireEvent.submit(input);

    expect(history.location.pathname).toBe("/search-result/normal");
    expect(history.location.search).toBe("?q=one+piece+movie+red");
  });

  test("should handle submit when query is empty", () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/normal?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <SearchResultPage />
      </Router>
    );

    const input = screen.getByRole("textbox");
    const clearInputBtn = screen.getByTestId("CloseIcon");
    userEvent.click(clearInputBtn);
    fireEvent.submit(input);
  });
});
