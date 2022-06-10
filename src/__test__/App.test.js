import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders search bar", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const searchBar = screen.getByRole("textbox");
  expect(searchBar).toBeInTheDocument();
});
