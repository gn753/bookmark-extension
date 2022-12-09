import { BookmarkTree } from "../../type/index";
import BookmarkChildren from "./BookmarkChildren";

interface Props {
  tree: chrome.bookmarks.BookmarkTreeNode;
}

export default function BookmarkParent({ tree }: Props) {
  const { children } = tree;

  return (
    <ul className="container">
      {children &&
        children.map((tree: BookmarkTree) => (
          <BookmarkChildren key={tree.id} tree={tree} />
        ))}
    </ul>
  );
}

