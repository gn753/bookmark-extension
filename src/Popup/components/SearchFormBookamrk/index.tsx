import { useRecoilValue } from "recoil";
import { searchInputTextState } from "../../recoil/atoms/searchInputTextState";
import { useGetSearchBookmarkList } from "../../hooks/useGetSearchBookmarkList";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import styled from "@emotion/styled";

export default function SearchFormBookamrk() {
  const inputText = useRecoilValue(searchInputTextState);
  const { searchResults } = useGetSearchBookmarkList(inputText);

  const render = inputText.length > 0;

  return (
    <Wrap id="header">
      <SearchInput />
      {render && <SearchList searchResults={searchResults} />}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 8px 16px;
`;
