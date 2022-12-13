import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchInputTextState } from "./features/SearchFormBookamrk/globalStore";

import InfinityBookmakList from "./features/InfinityBookmakList";
import SearchFormBookamrk from "./features/SearchFormBookamrk";

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
  width: 400px;
  height: 100%;
`;
