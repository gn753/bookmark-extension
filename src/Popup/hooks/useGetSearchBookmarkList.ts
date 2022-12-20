import { BookmarkTree } from "./../type/index";
import { useState, useEffect } from "react";
import fetchSearchBookmark from "../api/fetchSearchBookmark";

export function useGetSearchBookmarkList(text: string) {
  const [searchResults, setSearchResults] = useState<BookmarkTree>([]);

  useEffect(() => {
    const getSearchBookmarkList = async () => {
      if (text.length > 0) {
        const data = await fetchSearchBookmark(text);
        setSearchResults(data);
      }
    };
    getSearchBookmarkList();
  }, [text]);

  return { searchResults };
}
