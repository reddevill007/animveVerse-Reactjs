import { createContext } from "react";

export const SearchContext = createContext({
  animeData: [],
  animeDetail: [],
  search: () => {},
  setData: () => {},
  setDetail: () => {},
});
