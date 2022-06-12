import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ReadingListPage from "../pages/ReadingListPage";
import userEvent from "@testing-library/user-event";

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

const readingListData = [
  {
    title: 'One Piece Announces "Road To Laugh Tale" Project - GameRant',
    link: "https://gamerant.com/one-piece-announces-road-to-laugh-tale-project/",
    id: "1461414023",
    published: "Sat, 11 Jun 2022 23:30:00 GMT",
    source: { href: "https://gamerant.com", title: "GameRant" },
    sub_articles: [
      {
        url: "https://gamerant.com/one-piece-announces-road-to-laugh-tale-project/",
        title: 'One Piece Announces "Road To Laugh Tale" Project',
        publisher: "GameRant",
      },
      {
        url: "https://comicbook.com/anime/news/one-piece-day-major-announcements-summer-event/",
        title:
          "One Piece Day Sets Summer Date to Share Several Major Announcements",
        publisher: "ComicBook.com",
      },
      {
        url: "https://screenrant.com/one-piece-day-2022-july-manga-25th-anniversary/",
        title:
          "One Piece Day Celebrates the Manga's 25th Anniversary This July",
        publisher: "Screen Rant",
      },
      {
        url: "https://www.gameinformer.com/gamer-culture/2022/06/08/one-piece-sets-sail-on-its-final-saga-next-month",
        title: "One Piece Sets Sail On Its Final Saga Next Month",
        publisher: "Game Informer",
      },
      {
        url: "https://www.dualshockers.com/one-piece-month-long-break-confirms-the-final-saga/",
        title:
          "One Piece Author Announces Month-Long Break, Confirms the Manga Will be Back With Final Saga",
        publisher: "DualShockers",
      },
    ],
  },
];

describe("ReadingListPage", () => {
  afterEach(() => {
    window.localStorage.removeItem("readingList");
  });

  test("should render correctly", () => {
    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );
  });

  test("should navigate to home when logo is clicked", () => {
    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const logo = screen.getByRole("img", {
      name: /logo/i,
    });
    userEvent.click(logo);

    expect(history.location.pathname).toBe("/");
  });

  test("should render correctly when reading list is empty", () => {
    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const emptyReadingListImg = screen.getByRole("img", {
      name: /reading list is empty/i,
    });

    expect(emptyReadingListImg).toBeInTheDocument();
  });

  test("should render correctly with items in reading list", () => {
    localStorageMock.setItem("readingList", JSON.stringify(readingListData));

    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const emptyReadingListImg = screen.queryByRole("img", {
      name: /reading list is empty/i,
    });
    const readingListCount = screen.getByText(/reading list \(1\)/i);

    expect(emptyReadingListImg).not.toBeInTheDocument();
    expect(readingListCount).toBeInTheDocument();
  });

  test("click Search News button to focus on search input should work", () => {
    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const searchNewsBtn = screen.getByRole("button", { name: /search news/i });
    userEvent.click(searchNewsBtn);
    const input = screen.getByRole("textbox");

    expect(input).toHaveFocus();
  });

  test("should handle submit when query exists", () => {
    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const input = screen.getByRole("textbox");
    userEvent.type(input, "one piece");
    fireEvent.submit(input);

    expect(history.location.pathname).toBe("/search-result/news");
    expect(history.location.search).toBe("?q=one+piece");
  });

  test("should handle submit when query is empty", () => {
    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const input = screen.getByRole("textbox");
    fireEvent.submit(input);

    expect(history.location.pathname).toBe("/reading-list");
  });

  test("remove item from reading list should work", () => {
    localStorageMock.setItem("readingList", JSON.stringify(readingListData));

    const history = createMemoryHistory({ initialEntries: ["/reading-list"] });
    render(
      <Router location={history.location} navigator={history}>
        <ReadingListPage />
      </Router>
    );

    const removeFromReadingListBtn = screen.getByTestId("BookmarkIcon");
    userEvent.click(removeFromReadingListBtn);

    expect(localStorageMock.getItem("readingList")).toEqual("[]");
  });
});
