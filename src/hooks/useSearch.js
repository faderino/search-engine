import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatSearchQuery } from "../utils/formatSearchQuery";
import { getNormalSearch } from "../api/normalSearch";

export const useSearch = (type) => {
  const [searchParams] = useSearchParams();
  const query = formatSearchQuery(searchParams.get("q"));

  const [state, setState] = useState({ status: "pending", data: null });

  const fn = type === "NORMAL_SEARCH" ? getNormalSearch : getNormalSearch;

  useEffect(() => {
    setState((state) => ({ ...state, status: "pending" }));
    fn(query)
      .then((data) => {
        setState({ status: "resolved", data });
        console.log(data);
      })
      .catch((error) =>
        setState((state) => ({ ...state, status: "rejected" }))
      );
  }, [query, fn]);

  return { loading: state.status === "pending", data: state.data };
};
