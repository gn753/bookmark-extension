import { useRecoilValue } from "recoil";
import { searchInputTextState } from "../../recoil/atoms/searchInputTextState";
import { useGetSearchBookmarkList } from "../../hooks/useGetSearchBookmarkList";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

export default function SearchFormBookamrk() {
  const inputText = useRecoilValue(searchInputTextState);
  const { searchResults } = useGetSearchBookmarkList(inputText);

  const render = inputText.length > 0;

  return (
    <>
      <div>
        <SearchInput />
        {render && <SearchList searchResults={searchResults} />}
      </div>
    </>
  );
}
