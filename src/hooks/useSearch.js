import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatSearchQuery } from "../utils/formatSearchQuery";
import { getNormalSearch } from "../api/normalSearch";
import { getImageSearch } from "../api/imageSearch";
import { getNewsSearch } from "../api/newsSearch";

/**
 * Hooks for making request to google search API based on current query params URL
 * @param {string} type accepts NORMAL_SEARCH || IMAGE_SEARCH || NEWS_SEARCH
 * @returns state object with "loading" and "data" property
 */
export const useSearch = (type) => {
  const [searchParams] = useSearchParams();
  const query = formatSearchQuery(searchParams.get("q"));
  const navigate = useNavigate();

  const [state, setState] = useState({ status: "pending", data: null });

  useEffect(() => {
    // If someone directly edit the query search params URL in the browser.
    if (!query) {
      navigate("/");
      return;
    }

    let searchApi;
    switch (type) {
      case "IMAGE_SEARCH":
        searchApi = getImageSearch;
        break;
      case "NEWS_SEARCH":
        searchApi = getNewsSearch;
        break;
      case "NORMAL_SEARCH":
      default:
        searchApi = getNormalSearch;
        break;
    }

    setState((state) => ({ ...state, status: "pending" }));
    searchApi(query)
      .then((data) => {
        setState({ status: "resolved", data });
        console.log(data);
      })
      .catch((error) =>
        setState((state) => ({ ...state, status: "rejected" }))
      );
  }, [query, type, navigate]);

  return { loading: state.status === "pending", data: state.data };
};
