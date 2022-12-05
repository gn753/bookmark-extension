import { BookmarkTree } from "../../Popup/type/index";
import Bookmark from "./Bookmark";

interface Props {
  list: BookmarkTree;
}

export default function Bookmarks({ list }: Props) {
  return (
    <div>
      {list.children?.map((child: BookmarkTree) => (
        <Bookmark key={child.id} list={child} />
      ))}
    </div>
  );
}
