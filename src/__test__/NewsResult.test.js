import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import NewsResult from "../containers/NewsResult";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("NewsResult", () => {
  afterEach(() => {
    localStorageMock.removeItem("readingList");
  });

  test("should render loading, then render result", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/news?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <NewsResult />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"), {
      timeout: 5000,
    });
    const newsResult = screen.getByTestId("news-result");

    expect(newsResult).toBeInTheDocument();
  });

  test("navigate to reading list button should work", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/news?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <NewsResult />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"), {
      timeout: 5000,
    });
    const navigateButton = screen.getByRole("button", {
      name: "My Reading List",
    });
    expect(navigateButton).toBeInTheDocument();

    userEvent.click(navigateButton);

    expect(history.location.pathname).toBe("/reading-list");
  });

  test("add to reading list should work", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/news?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <NewsResult />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"), {
      timeout: 5000,
    });

    const addToReadingListBtn = screen.getAllByTestId(
      "BookmarkBorderOutlinedIcon"
    )[0];
    userEvent.click(addToReadingListBtn);
  });

  test("remove item from reading list should work", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/news?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={history}>
        <NewsResult />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"), {
      timeout: 5000,
    });
    const addToReadingListBtn = screen.getAllByTestId(
      "BookmarkBorderOutlinedIcon"
    )[0];
    await userEvent.click(addToReadingListBtn);

    const removeFromReadingListBtn = screen.getAllByTestId("BookmarkIcon")[0];
    userEvent.click(removeFromReadingListBtn);

    expect(localStorageMock.getItem("readingList")).toEqual("[]");
  });
});
