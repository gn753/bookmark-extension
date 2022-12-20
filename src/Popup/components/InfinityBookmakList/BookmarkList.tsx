import { BookmarkTree } from "../../type";
import FolderOrBookmarkRender from "./FolderOrBookmarkRender";

interface Props {
  tree: BookmarkTree;
}

export default function BookmarkList({ tree }: Props) {
  return (
    <ul>
      {tree &&
        tree.map((treeItem) => <FolderOrBookmarkRender tree={treeItem} />)}
    </ul>
  );
}
