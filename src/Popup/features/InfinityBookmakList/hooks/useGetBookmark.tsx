import { useState, useEffect } from "react";

export default function useGetBookmark() {
  const [bookmarkTree, setBookmarkTree] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);

  useEffect(() => {
    const getBookmarkTree = () => {
      chrome.bookmarks.getTree((bookmarkTreeNodes) => {
        const bookmarkData = bookmarkTreeNodes[0].children;
        setBookmarkTree(bookmarkData ? bookmarkData : []);
      });
    };
    getBookmarkTree();
  }, []);

  return { bookmarkTree };
}
