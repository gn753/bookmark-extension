import BookmarkParent from "./BookmarkParent";
import { BookmarkTree } from "../../type/index";
import styled from "@emotion/styled";
import BookmarkChildren from "./BookmarkChildren";

interface Props {
  bookmarkTree: BookmarkTree[];
}

export default function Bookmark({ bookmarkTree }: Props) {
  return (
    <Inner>
      <h1>북마크 앱입니다</h1>
      {bookmarkTree.map((tree: BookmarkTree) => (
        <ul className="containner">
          {tree.children &&
            tree.children.map((tree: BookmarkTree) => (
              <BookmarkChildren key={tree.id} tree={tree} />
            ))}
        </ul>
      ))}
    </Inner>
  );
}
const Inner = styled.div`
  padding: 20px;
`;
