import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  test("should renders component without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
