import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import HomeSearch from "../containers/HomeSearch";

describe("HomeSearch", () => {
  test("should render properly", () => {
    render(<HomeSearch />, { wrapper: MemoryRouter });
  });

  test("should handle submit", async () => {
    render(<HomeSearch />, { wrapper: MemoryRouter });

    const form = screen.getByRole("search-form");
    fireEvent.submit(form);
  });

  describe("should display correct icons", () => {
    test("on normal search", () => {
      render(<HomeSearch />, { wrapper: MemoryRouter });

      const micIcon = screen.getByTestId("MicIcon");
      const cameraIcon = screen.queryByTestId("CameraAltIcon");
      const searchIcon = screen.getByTestId("SearchIcon");

      expect(micIcon).toBeInTheDocument();
      expect(cameraIcon).not.toBeInTheDocument();
      expect(searchIcon).toBeInTheDocument();
    });

    test("on image search", () => {
      const history = createMemoryHistory();
      history.push("/images");
      render(
        <Router location={history.location} navigator={history}>
          <HomeSearch />
        </Router>
      );

      const micIcon = screen.getByTestId("MicIcon");
      const cameraIcon = screen.getByTestId("CameraAltIcon");
      const searchIcon = screen.getAllByTestId("SearchIcon")[0];

      expect(micIcon).toBeInTheDocument();
      expect(cameraIcon).toBeInTheDocument();
      expect(searchIcon).toBeInTheDocument();
    });

    test("on news search", () => {
      const history = createMemoryHistory();
      history.push("/news");
      render(
        <Router location={history.location} navigator={history}>
          <HomeSearch />
        </Router>
      );

      const micIcon = screen.getByTestId("MicIcon");
      const cameraIcon = screen.queryByTestId("CameraAltIcon");
      const searchIcon = screen.getAllByTestId("SearchIcon")[0];

      expect(micIcon).toBeInTheDocument();
      expect(cameraIcon).not.toBeInTheDocument();
      expect(searchIcon).toBeInTheDocument();
    });
  });
});
