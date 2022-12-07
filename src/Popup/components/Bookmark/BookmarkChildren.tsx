import { BookmarkTree } from "../../type";
import { useEffect, useState } from "react";
import Folder from "./Folder";
import BookmarkItem from "./BookmarkItem";

interface Props {
  width?: number;
  list: BookmarkTree;
}

export default function BookmarkChildren({ width = 0, list }: Props) {
  const [pl, setPl] = useState<number>(width);
  const [toggle, setToggle] = useState<boolean>(false);
  const hasChildren = list.children && list.children.length > 0;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const plusPaddingLeftValue = () => {
      setPl((value) => value + 5);
    };
    plusPaddingLeftValue();
  }, []);

  return (
    <>
      {!list.dateGroupModified ? (
        <BookmarkItem key={list.id} title={list.title} url={list.url} />
      ) : (
        <Folder title={list.title} handleToggle={handleToggle} />
      )}
      <div style={{ paddingLeft: pl }}>
        {hasChildren &&
          toggle &&
          list.children?.map((child: BookmarkTree) => (
            <BookmarkChildren key={child.id} list={child} width={pl} />
          ))}
      </div>
    </>
  );
}
