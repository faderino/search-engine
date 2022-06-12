import axios from "axios";
import { getNewsSearch } from "../api/newsSearch";

jest.mock("axios");

describe("Image Search API", () => {
  axios.get.mockRejectedValue(new Error("Fetch error"));
  test("should throw error on failure", async () => {
    await expect(getNewsSearch("xd")).rejects.toThrow(expect.any(Object));
  });
});
