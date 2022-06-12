import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../components/SearchForm";

describe("SearchFrom", () => {
  const onSubmit = jest.fn();
  const setSearch = jest.fn();

  const setup = (search = "") =>
    render(
      <SearchForm onSubmit={onSubmit} search={search} setSearch={setSearch} />
    );

  test("should render properly", () => {
    setup();
  });

  test("reset search button should work", () => {
    setup();

    const closeButton = screen.getByTestId("CloseIcon");
    userEvent.click(closeButton);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("");
  });
});
