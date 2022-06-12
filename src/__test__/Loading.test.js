import { render } from "@testing-library/react";
import Loading from "../components/Loading";

describe("Loading", () => {
  test("should render correctly", () => {
    render(<Loading />);
  });
});
