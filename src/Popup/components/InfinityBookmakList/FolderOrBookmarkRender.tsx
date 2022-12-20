import { BookmarkTreeDetails } from "../../type";
import { useState } from "react";
import styled from "@emotion/styled";
import BookmarkItem from "../common/Bookmark/BookmarkItem";
import FolderItem from "../common/Folder/FolderItem";
import BookmarkList from "./BookmarkList";

interface Props {
  tree: BookmarkTreeDetails;
}

export default function FolderOrBookmarkRender({ tree }: Props) {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShowBookmarkList = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {tree.children ? (
        <li onClick={handleShowBookmarkList}>
          <FolderItem key={tree.id} title={tree.title} isShow={isShow} />
        </li>
      ) : (
        <BookmarkItem
          key={tree.id}
          url={tree.url}
          id={tree.id}
          title={tree.title}
        ></BookmarkItem>
      )}
      {tree.children && (
        <ShowList isShow={isShow}>
          <BookmarkList tree={tree.children} />
        </ShowList>
      )}
    </>
  );
}

interface isShowProps {
  isShow: boolean;
}

const ShowList = styled.ul<isShowProps>`
  padding-left: 15px;
  height: ${(props) => (props.isShow ? "auto" : 0)};
  overflow: ${(props) => (props.isShow ? "visible" : "hidden")};
`;
