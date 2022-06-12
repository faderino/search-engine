import axios from "axios";
import { getNormalSearch } from "../api/normalSearch";

jest.mock("axios");

describe("Image Search API", () => {
  axios.get.mockRejectedValue(new Error("Fetch error"));
  test("should throw error on failure", async () => {
    await expect(getNormalSearch("xd")).rejects.toThrow(expect.any(Object));
  });
});
