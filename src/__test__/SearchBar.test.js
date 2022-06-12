import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  const setSearch = jest.fn();
  const setup = (search = "", withSearchIcon = true) => {
    render(
      <SearchBar
        search={search}
        setSearch={setSearch}
        withSearchIcon={withSearchIcon}
      >
        <button>Search</button>
      </SearchBar>
    );
  };

  describe("should render properly", () => {
    test("with search icon", () => {
      const search = "one piece";
      setup(search);

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      expect(input).toHaveValue(search);
      expect(button).toHaveTextContent("Search");
    });

    test("without search icon", () => {
      const search = "one piece";
      setup(search, false);

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      expect(input).toHaveValue(search);
      expect(button).toHaveTextContent("Search");
    });
  });

  test("should call onChange when user types", async () => {
    setup();

    const input = screen.getByRole("textbox");
    const search = "one piece";
    userEvent.type(input, search);

    expect(setSearch).toHaveBeenCalled();
  });
});
