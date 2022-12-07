import BookmarkParent from "./BookmarkParent";
import { BookmarkTree } from "../../type/index";
import styled from "@emotion/styled";

interface Props {
  bookmarkTreeData: BookmarkTree[];
}

export default function Bookmark({ bookmarkTreeData }: Props) {
  return (
    <Inner>
      <h1>북마크 앱입니다</h1>
      {bookmarkTreeData &&
        bookmarkTreeData.map((list: BookmarkTree) => (
          <BookmarkParent list={list} />
        ))}
    </Inner>
  );
}
const Inner = styled.div`
  padding: 20px;
`;
