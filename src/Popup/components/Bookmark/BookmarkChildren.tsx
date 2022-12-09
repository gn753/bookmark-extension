import { BookmarkTree } from "../../type";
import { useCallback, useEffect, useState } from "react";
import Folder from "./Folder";
import BookmarkItem from "./BookmarkItem";
import styled from "@emotion/styled";

interface Props {
  tree: chrome.bookmarks.BookmarkTreeNode;
}

export default function BookmarkChildren({ tree }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {tree.children ? (
        <ul>
          <li>
            <Folder title={tree.title} handleToggle={handleToggle} />
            <ToggleEvent toggle={toggle}>
              {tree.children?.map((child: BookmarkTree) => (
                <BookmarkChildren key={child.id} tree={child} />
              ))}
            </ToggleEvent>
          </li>
        </ul>
      ) : (
        <BookmarkItem key={tree.id} title={tree.title} url={tree.url} />
      )}
    </>
  );
}

interface PlProps {
  pl: number;
}

const PaddingLeft = styled.li<PlProps>`
  padding-left: ${(props) => props.pl};
`;

interface ToggleProps {
  toggle: boolean;
}

const ToggleEvent = styled.div<ToggleProps>`
  height: ${(props) => (props.toggle ? "auto" : 0)};
  overflow: ${(props) => (props.toggle ? "visible" : "Hidden")};
`;
