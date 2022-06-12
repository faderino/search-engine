import { render, screen } from "@testing-library/react";
import SearchStats from "../components/SearchStats";
import { round } from "../utils/numbering";

describe("SearchStats", () => {
  test("should render properly when result > 1", () => {
    const props = { total: 1, ts: 1.859 };
    render(<SearchStats {...props} />);

    const searchStats = screen.getByText(
      `About ${props.total} result (${round(props.ts, 2)} seconds)`
    );

    expect(searchStats).toBeInTheDocument();
  });

  test("should render properly when result is 1", () => {
    const props = { total: 10, ts: 1.859 };
    render(<SearchStats {...props} />);

    const searchStats = screen.getByText(
      `About ${props.total} results (${round(props.ts, 2)} seconds)`
    );

    expect(searchStats).toBeInTheDocument();
  });
});
