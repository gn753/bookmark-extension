import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { searchInputTextState } from "./recoil/atoms/searchInputTextState";
import InfinityBookmakList from "./components/InfinityBookmakList";
import SearchFormBookamrk from "./components/SearchFormBookamrk";

export default function Popup() {
  const searchInputext = useRecoilValue(searchInputTextState);
  const render = searchInputext.length === 0;

  return (
    <Wrap id="wrap">
      <SearchFormBookamrk />
      {render && <InfinityBookmakList />}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 260px;
  height: 500px;
`;
