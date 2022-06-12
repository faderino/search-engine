import axios from "axios";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/image/q=";

const options = {
  method: "GET",
  headers: {
    "X-User-Agent": "desktop",
    "X-Proxy-Location": "US",
    // "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Key": "b05cc36db9msh2398722a58985b4p16bcbejsn7da686532dfd",
    "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
  },
};

export const getImageSearch = async (query) => {
  try {
    const { data } = await axios({ ...options, url: baseUrl + query });
    return data.image_results;
  } catch (error) {
    throw error;
  }
};
