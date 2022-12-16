import { BookmarkCreateDetails } from "../../../type/index";
import PlusIcon from "../Icon/PlusIcon";
import createBookmark from "../../../api/createBookmark";

export default function BookmarkCreate({
  parentId,
  title,
  url,
}: BookmarkCreateDetails) {
  return (
    <div role="button" onClick={() => createBookmark({ parentId, title, url })}>
      <PlusIcon />
    </div>
  );
}
