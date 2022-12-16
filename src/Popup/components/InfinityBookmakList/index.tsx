import { BookmarkTree } from "../../type";
import BookmarkList from "./BookmarkList";
import useGetBookmarkTree from "../../hooks/useGetBookmarkTree";

export default function InfinityBookmakList() {
  const { bookmarkTree } = useGetBookmarkTree();

  return (
    <ul>
      {bookmarkTree?.map((tree: BookmarkTree) => (
        <BookmarkList key={tree.id} tree={tree} />
      ))}
    </ul>
  );
}
