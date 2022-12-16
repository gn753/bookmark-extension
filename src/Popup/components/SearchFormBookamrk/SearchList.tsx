import Bookmark from "../common/Bookmark";
import { BookmarkTree } from "../../type";
interface Props {
  searchResults: BookmarkTree[];
}

export default function SearchList({ searchResults }: Props) {
  if (searchResults.length === 0) {
    return null;
  }

  return (
    <ul>
      {searchResults.map((data) => {
        return <Bookmark title={data.title} url={data.url} id={data.id} />;
      })}
    </ul>
  );
}
