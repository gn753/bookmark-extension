import { BookmarkTree } from "../../type/index";
import BookmarkChildren from "./BookmarkChildren";

interface Props {
  list: BookmarkTree;
}

export default function BookmarkParent({ list }: Props) {
  return (
    <div>
      {list.children?.map((child: BookmarkTree) => (
        <BookmarkChildren key={child.id} list={child} />
      ))}
    </div>
  );
}
