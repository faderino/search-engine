import axios from "axios";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/search/q=";

const options = {
  method: "GET",
  headers: {
    "X-User-Agent": "desktop",
    "X-Proxy-Location": "US",
    // "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Key": "a6a0660255msh085c77e9ed6b087p1e3358jsn6109f5612c6c",
    "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
  },
};

export const getNormalSearch = async (query) => {
  try {
    const { data } = await axios({ ...options, url: baseUrl + query });
    return { results: data.results, total: data.total, ts: data.ts };
  } catch (error) {
    throw error;
  }
};
