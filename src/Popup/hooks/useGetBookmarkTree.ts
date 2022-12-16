import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { atom } from "recoil";
import fetchBookmarkTree from "../api/fetchBookmarkTree";

type Response = chrome.bookmarks.BookmarkTreeNode[] | undefined;

export const bookmarkState = atom<Response>({
  key: "bookmarkState",
  default: [],
});

export default function useGetBookmarkTree() {
  const [bookmarkTree, setBookmarkTree] = useRecoilState(bookmarkState);

  const getBookmarkTree = useCallback(async () => {
    const bookmarkTreeData = await fetchBookmarkTree();
    setBookmarkTree(bookmarkTreeData);
  }, [setBookmarkTree]);

  useEffect(() => {
    getBookmarkTree();
  }, [getBookmarkTree]);

  return { bookmarkTree, getBookmarkTree };
}
