import styled from "@emotion/styled";
import { BookmarkTree } from "../../Popup/type/index";
import { useEffect, useState } from "react";

interface Props {
  width?: number;
  list: BookmarkTree;
}

export default function Bookmark({ width = 0, list }: Props) {
  const [pl, setPl] = useState<number>(width);
  const hasChildren = list.children && list.children.length > 0;
  useEffect(() => {
    const plusPaddingLeftValue = () => {
      setPl((value) => value + 10);
    };
    plusPaddingLeftValue();
  }, []);
  return (
    <>
      <FoloderOrBookmark key={list.id} props={list.dateGroupModified}>
        {list.title}
      </FoloderOrBookmark>
      <div style={{ paddingLeft: pl }}>
        {hasChildren &&
          list.children?.map((child: BookmarkTree) => (
            <Bookmark key={child.id} list={child} width={pl} />
          ))}
      </div>
    </>
  );
}

interface SProps {
  props: number | undefined | null;
}

const FoloderOrBookmark = styled.div<SProps>`
  background-color: ${(props) => (props.props ? "red" : "none")};
`;
