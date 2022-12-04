import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Bookmarks from "./components/Bookmarks";
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
  console.log(bookmarks);
  return (
    <Wrap>
      <Inner>
        <h1>북마크 앱입니다</h1>
        <div style={{ width: "100%", backgroundColor: "blue" }}>
          {bookmarks && bookmarks.map((it) => <Bookmarks {...it} />)}
        </div>
      </Inner>
    </Wrap>
  );
};

export default Popup;

const Wrap = styled.main`
  width: 400px;
  height: 100%;
`;

const Inner = styled.div`
  padding: 10px;
`;
