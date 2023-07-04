import { createContext, useContext } from "react";

export type ContextProps = {
  search?: string;
  setSearch?: any;
  selectedCharactere?: string;
  setSelectedCharacter?: any;
  idComic?: string;
  setIdComic?: any;
};

export const SearchContext = createContext<ContextProps>({});

export const useSearchContext = () => useContext(SearchContext);
