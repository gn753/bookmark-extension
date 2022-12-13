import { BookmarkTree } from "../../../type";
import { useState } from "react";
import styled from "@emotion/styled";
import Bookmark from "../../../common/Bookmark";
import Folder from "../../../common/Folder";

interface Props {
  tree: chrome.bookmarks.BookmarkTreeNode;
  indent?: number;
}

export default function BookmarkList({ tree, indent = 0 }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {tree.children ? (
        <ul
          style={{
            paddingLeft: indent,
          }}
        >
          <Folder title={tree.title} handleToggle={handleToggle} />
          <ToggleEvent toggle={toggle}>
            {tree.children?.map((child: BookmarkTree) => (
              <BookmarkList key={child.id} tree={child} indent={15} />
            ))}
          </ToggleEvent>
        </ul>
      ) : (
        <li>
          <Bookmark title={tree.title} url={tree.url} />
        </li>
      )}
    </>
  );
}

interface ToggleProps {
  toggle: boolean;
}

const ToggleEvent = styled.div<ToggleProps>`
  height: ${(props) => (props.toggle ? "auto" : 0)};
  overflow: ${(props) => (props.toggle ? "visible" : "hidden")};
`;
