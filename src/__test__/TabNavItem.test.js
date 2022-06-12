import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabNavItem from "../components/TabNavItem";

describe("TabNavItem", () => {
  const navigate = jest.fn();
  const setup = (title, search, searchBy) =>
    render(
      <TabNavItem
        title={title}
        search={search}
        searchBy={searchBy}
        navigate={navigate}
      />
    );

  describe("should render all types of search", () => {
    test("normal search", () => {
      setup("All", "one piece", "normal");
    });

    test("image search", () => {
      setup("Images", "one piece", "image");
    });

    test("news search", () => {
      setup("News", "one piece", "news");
    });
  });

  describe("should switch search type on click", () => {
    test("normal search", () => {
      setup("All", "one piece", "normal");

      const navItem = screen.getByText(/all/i);
      userEvent.click(navItem);

      expect(navigate).toHaveBeenCalled();
    });

    test("image search", () => {
      setup("Images", "one piece", "image");

      const navItem = screen.getByText(/images/i);
      userEvent.click(navItem);

      expect(navigate).toHaveBeenCalled();
    });

    test("news search", () => {
      setup("News", "one piece", "news");

      const navItem = screen.getByText(/news/i);
      userEvent.click(navItem);

      expect(navigate).toHaveBeenCalled();
    });
  });
});
