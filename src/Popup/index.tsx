import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Bookmark from "./components/Bookmark";
import { BookmarkTree } from "./type/index";

const Popup: React.VFC = () => {
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
  console.log(bookmarkTree, "bookmarkTree");

  return (
    <Wrap>
      <Bookmark bookmarkTree={bookmarkTree} />
    </Wrap>
  );
};

export default Popup;

const Wrap = styled.main`
  width: 400px;
  height: 100%;
`;
