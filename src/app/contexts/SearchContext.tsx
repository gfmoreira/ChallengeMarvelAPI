import { createContext, useContext } from "react";

export type ContextProps = {
  search?: string;
  setSearch?: any;
};

export const SearchContext = createContext<ContextProps>({});

export const useSearchContext = () => useContext(SearchContext);
