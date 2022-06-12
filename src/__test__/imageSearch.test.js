import axios from "axios";
import { getImageSearch } from "../api/imageSearch";

jest.mock("axios");

describe("Image Search API", () => {
  axios.get.mockRejectedValue(new Error("Fetch error"));
  test("should throw error on failure", async () => {
    await expect(getImageSearch("xd")).rejects.toThrow(expect.any(Object));
  });
});
