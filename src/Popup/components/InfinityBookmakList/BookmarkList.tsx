import { BookmarkTree } from "../../type";
import { useState } from "react";
import styled from "@emotion/styled";
import Bookmark from "../common/Bookmark";
import Folder from "../common/Folder";

interface Props {
  tree: BookmarkTree;
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
          <li>
            <Folder title={tree.title} handleToggle={handleToggle} />
            <ToggleEvent toggle={toggle}>
              {tree.children?.map((child: BookmarkTree) => (
                <BookmarkList key={child.id} tree={child} indent={15} />
              ))}
            </ToggleEvent>
          </li>
        </ul>
      ) : (
        <Bookmark
          key={tree.id}
          title={tree.title}
          url={tree.url}
          id={tree.id}
        />
      )}
    </>
  );
}

interface ToggleProps {
  toggle: boolean;
}

const ToggleEvent = styled.ul<ToggleProps>`
  height: ${(props) => (props.toggle ? "auto" : 0)};
  overflow: ${(props) => (props.toggle ? "visible" : "hidden")};
`;
