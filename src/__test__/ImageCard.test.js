import { render, screen } from "@testing-library/react";
import ImageCard from "../components/ImageCard";

describe("ImageCard", () => {
  const props = {
    image: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwx1IucbGCcuw0g-QW1noXi4bYc4qBnUB6W0emUsqrgFlAxd9-1jvwRXNrYQ&s",
      alt: "",
    },
    link: {
      title: "Electric Cars, Solar",
      href: "https://www.google.com/url?q=https://www.tesla.com/&sa=U&ved=2ahUKEwjf0aDElaf4AhUQAjQIHfy1Br8Qr4kDegQIDRAC&usg=AOvVaw1zIPY0Q3FzfZEfM82jtIWa",
      domain: "Electric Cars, Solar &...   www.tesla.com",
    },
  };

  test("should display correct image", () => {
    render(<ImageCard {...props} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", props.image.src);
    expect(image).toHaveAttribute("alt", props.link.title);
  });

  test("should display correct title & url", () => {
    render(<ImageCard {...props} />);

    const splitTitle = (str) => {
      const [title, link] = str.split("... ");
      return [title + "...", link?.trim()];
    };

    const result = {
      title: splitTitle(props.link.title)[0],
      link: splitTitle(props.link.title)[1] ?? splitTitle(props.link.title)[0],
    };

    const title = screen.getAllByText(result.title)[0];
    const url = screen.getAllByText(result.link)[1];

    expect(title).toBeInTheDocument();
    expect(url).toBeInTheDocument();
  });

  test("should open a new tab with correct link when clicked", () => {
    render(<ImageCard {...props} />);

    const anchorTags = screen.getAllByRole("link");

    anchorTags.forEach((tag) => {
      expect(tag).toHaveAttribute("href", props.link.href);
      expect(tag).toHaveAttribute("rel", "noreferrer");
      expect(tag).toHaveAttribute("target", "_blank");
    });
  });
});
