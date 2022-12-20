import Bookmark from "../common/Bookmark/BookmarkItem";
import { BookmarkTree } from "../../type";
interface Props {
  searchResults: BookmarkTree;
}

export default function SearchList({ searchResults }: Props) {
  if (searchResults && searchResults.length === 0) {
    return null;
  }

  return (
    <ul>
      {searchResults &&
        searchResults.map((data) => {
          return <Bookmark url={data.url} id={data.id} title={data.title} />;
        })}
    </ul>
  );
}
