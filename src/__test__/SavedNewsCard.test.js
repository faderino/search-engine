import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SavedNewsCard from "../components/SavedNewsCard";

describe("SavedNewsCard", () => {
  const news = {
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
  };

  const removeFromReadingList = jest.fn();
  const setup = () =>
    render(
      <SavedNewsCard
        news={news}
        removeFromReadingList={removeFromReadingList}
      />
    );

  test("should render properly", () => {
    setup();
  });

  test("remove item from reading list should work", () => {
    setup();

    const removeButton = screen.getByTestId("BookmarkIcon");
    userEvent.click(removeButton);

    expect(removeFromReadingList).toBeCalledTimes(1);
    expect(removeFromReadingList).toBeCalledWith(news);
  });
});
