import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import NormalResult from "../containers/NormalResult";

describe("NormalResult", () => {
  test("should render loading, then render result", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/normal?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <NormalResult />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"), {
      timeout: 10000,
    });
    const normalResult = screen.getByTestId("normal-result");

    expect(normalResult).toBeInTheDocument();
  });

  test("should navigate to home page when query is omitted", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/normal?q="],
    });
    render(
      <Router location={history.location} navigator={history}>
        <NormalResult />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
  });
});
