import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ImageResult from "../containers/ImageResult";

describe("ImageResult", () => {
  test("should render loading, then render result", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/search-result/images?q=one+piece"],
    });
    render(
      <Router location={history.location} navigator={navigator}>
        <ImageResult />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"), {
      timeout: 5000,
    });
    const imageResult = screen.getByTestId("image-result");

    expect(imageResult).toBeInTheDocument();
  });
});
