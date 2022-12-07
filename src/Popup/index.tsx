import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Container from "./components/Bookmark";
import { BookmarkTree } from "./type/index";

const Popup: React.VFC = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkTree[]>();

  useEffect(() => {
    const getBookmarkTree = () => {
      chrome.bookmarks.getTree((bookmarktreeNode) => {
        setBookmarks(bookmarktreeNode);
      });
    };
    getBookmarkTree();
  }, []);
  console.log(bookmarks, "bookmarks");

  return <Wrap>{bookmarks && <Container bookmarkTreeData={bookmarks} />}</Wrap>;
};

export default Popup;

const Wrap = styled.main`
  width: 400px;
  height: 100%;
`;
