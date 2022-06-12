import { useEffect, useState } from "react";

/**
 * Hooks to get and set value to local storage.
 * @param {string} key
 * @param {*} defaultValue
 * @returns {array} [state<any>, setState<function>]
 */
export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const inLocalStorage = window.localStorage.getItem(key);
    if (inLocalStorage) {
      return JSON.parse(inLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
