import { render } from "@testing-library/react";
import TabNavigation from "../components/TabNavigation";
import { MemoryRouter } from "react-router-dom";

describe("TabNavigation", () => {
  const navigate = jest.fn();
  const setup = (search = "") =>
    render(<TabNavigation search={search} navigate={navigate} />, {
      wrapper: MemoryRouter,
    });

  test("should render properly", () => {
    setup("one piece");
  });
});
