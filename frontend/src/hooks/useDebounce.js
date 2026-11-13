/**
 * useDebounce.js
 * A generic custom React hook that delays updating a value
 * until the user stops typing for a specified duration.
 *
 * @param {any} value   - The value to debounce (e.g. the search input string)
 * @param {number} delay - Delay in milliseconds (default: 300ms)
 * @returns {any} The debounced value
 */

import { useState, useEffect } from "react";

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay ends
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
