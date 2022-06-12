import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  const setCurrentPage = jest.fn();
  const setup = (page) =>
    render(
      <Pagination
        currentPage={page}
        setCurrentPage={setCurrentPage}
        itemsPerPage={10}
        totalItems={100}
      />
    );

  test("previous button should work", () => {
    setup(10);

    const prevButton = screen.getAllByRole("button")[0];
    userEvent.click(prevButton);

    expect(setCurrentPage).toBeCalledTimes(1);
    expect(setCurrentPage).toBeCalledWith(9);
  });

  test("next button should work", () => {
    setup(1);

    const buttons = screen.getAllByRole("button");
    const nextButton = buttons[buttons.length - 1];
    userEvent.click(nextButton);

    expect(setCurrentPage).toBeCalledTimes(1);
    expect(setCurrentPage).toBeCalledWith(2);
  });

  test("jump to page button should work", () => {
    setup(1);

    const toPageFive = screen.getAllByRole("button")[5];
    userEvent.click(toPageFive);

    expect(setCurrentPage).toBeCalledTimes(1);
    expect(setCurrentPage).toBeCalledWith(5);
  });
});
