import Bookmark from "../../../common/Bookmark";

interface Props {
  searchResults: chrome.bookmarks.BookmarkTreeNode[];
}

export default function SearchList({ searchResults }: Props) {
  if (searchResults.length === 0) {
    return null;
  }

  return (
    <ul>
      {searchResults.map((data) => {
        return (
          <li>
            <Bookmark title={data.title} url={data.url} />
          </li>
        );
      })}
    </ul>
  );
}
