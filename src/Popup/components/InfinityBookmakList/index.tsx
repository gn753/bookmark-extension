import BookmarkList from "./BookmarkList";
import useGetBookmarkTree from "../../hooks/useGetBookmarkTree";
import styled from "@emotion/styled";

export default function InfinityBookmakList() {
  const { bookmarkTree } = useGetBookmarkTree();

  return (
    <Wrap id="main">
      <BookmarkList tree={bookmarkTree} />
    </Wrap>
  );
}

const Wrap = styled.main`
  padding: 0 8px;
`;
