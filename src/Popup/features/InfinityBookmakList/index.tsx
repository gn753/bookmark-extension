import { BookmarkTree } from "../../type";
import BookmarkList from "./components/BookmarkList";
import useGetBookmark from "./hooks/useGetBookmark";

export default function InfinityBookmakList() {
  const { bookmarkTree } = useGetBookmark();

  return (
    <ul>
      {bookmarkTree.map((tree: BookmarkTree) => (
        <BookmarkList key={tree.id} tree={tree} />
      ))}
    </ul>
  );
}
