import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatSearchQuery } from "../utils/formatSearchQuery";
import { getNormalSearch } from "../api/normalSearch";
import { getImageSearch } from "../api/imageSearch";

/**
 * Hooks for making request to google search API based on current query params URL
 * @param {string} type accepts NORMAL_SEARCH || IMAGE_SEARCH || NEWS_SEARCH
 * @returns state object with "loading" and "data" property
 */
export const useSearch = (type) => {
  const [searchParams] = useSearchParams();
  const query = formatSearchQuery(searchParams.get("q"));

  const [state, setState] = useState({ status: "pending", data: null });

  let searchApi;
  switch (type) {
    case "IMAGE_SEARCH":
      searchApi = getImageSearch;
      break;
    case "NORMAL_SEARCH":
    default:
      searchApi = getNormalSearch;
      break;
  }

  useEffect(() => {
    setState((state) => ({ ...state, status: "pending" }));
    searchApi(query)
      .then((data) => {
        setState({ status: "resolved", data });
        console.log(data);
      })
      .catch((error) =>
        setState((state) => ({ ...state, status: "rejected" }))
      );
  }, [query, searchApi]);

  return { loading: state.status === "pending", data: state.data };
};
