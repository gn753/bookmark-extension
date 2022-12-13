import { useState, useEffect } from "react";

export function useGetSearchBookmarkList(text: string) {
  const [searchResults, setSearchResults] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);

  useEffect(() => {
    const searchBookmarkList = (text: string) => {
      if (text.length > 0) {
        chrome.bookmarks.search(text, (results) => {
          setSearchResults(results);
        });
      }
    };
    searchBookmarkList(text);
  }, [text]);

  return { searchResults };
}
