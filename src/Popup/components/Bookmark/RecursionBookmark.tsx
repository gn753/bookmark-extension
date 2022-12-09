import { ReactNode, useEffect, useState } from "react";
import { BookmarkTree } from "../../type";
import Folder from "./Folder";
import styled from "@emotion/styled";
interface Props {
  children?: ReactNode;
  list: BookmarkTree;
  width?: number;
}

export default function RecursionBookmark({ list }: Props) {
  return (
    <ul>
      <li></li>
    </ul>
  );
}

interface SProps {
  pl: number;
  toggle: boolean;
}

const PaddingLeft = styled.ul<SProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: ${(props) => props.pl};
  height: ${(props) => (props.toggle ? 100 + "%" : 0)};
  overflow: ${(props) => (props.toggle ? "visible" : "Hidden")};
`;
