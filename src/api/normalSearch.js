import axios from "axios";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/search/q=";

const options = {
  method: "GET",
  headers: {
    "X-User-Agent": "desktop",
    "X-Proxy-Location": "EU",
    "X-RapidAPI-Key": "415be0d4d6mshaace395d76fd2c5p115db6jsnf38108f70b38",
    "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
  },
};

export const getNormalSearch = async (query) => {
  try {
    const { data } = await axios({ ...options, url: baseUrl + query });
    return { results: data.results, total: data.total, ts: data.ts };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
