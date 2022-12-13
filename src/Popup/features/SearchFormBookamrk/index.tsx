import { useRecoilState } from "recoil";
import SearchList from "./components/SearchList";
import { searchInputTextState } from "./globalStore";
import { useGetSearchBookmarkList } from "./hooks/useGetSearchBookmarkList";

export default function SearchFormBookamrk() {
  const [text, setText] = useRecoilState(searchInputTextState);
  const { searchResults } = useGetSearchBookmarkList(text);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={onChangeText}
          placeholder="Search your bookmarks"
          value={text}
        />
        {text.length > 0 && <SearchList searchResults={searchResults} />}
      </div>
    </>
  );
}
