import { render } from "@testing-library/react";
import NormalCard from "../components/NormalCard";

describe("NormalCard", () => {
  const result = {
    title: "One Piece Wiki - Fandom",
    link: "https://onepiece.fandom.com/wiki/One_Piece_Wiki",
    description:
      "One Piece Encyclopedia is a database that anyone can edit about the Shonen Jump anime and manga series One Piece created by Eiichiro Oda, that features ...",
    cite: {
      domain: "https://onepiece.fandom.com › wiki › One_Piece_Wiki",
      span: "https://onepiece.fandom.com",
    },
  };

  test("should render properly everything is good :)", () => {
    render(<NormalCard result={result} />);
  });

  test("should render properly when description doesn't exist", () => {
    render(<NormalCard result={{ ...result, description: "" }} />);
  });

  test("should render properly when cite doesn't exist", () => {
    render(<NormalCard result={{ ...result, cite: [] }} />);
  });
});
