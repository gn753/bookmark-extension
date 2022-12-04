import { useEffect, useState } from "react";
import { BookmarkTree } from "../../Popup/type/index";
import Bookmark from "./Bookmark";

export default function Bookmarks({ ...items }: BookmarkTree) {
  const [pl, setPl] = useState<number>(0);
  const hasChildren = items.children && items.children.length > 0;
  // 종료 조건 item.children이 없어질 때까지 무한반복한다.

  useEffect(() => {
    const addPaddingLeftValue = () => {
      setPl((value) => value + 10);
    };
    addPaddingLeftValue();
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "blue" }}>
      <div style={{ paddingLeft: pl }}>
        {items.children?.map((child: chrome.bookmarks.BookmarkTreeNode) => (
          <Bookmark key={child.id} {...child} />
        ))}
      </div>
      '{" "}
      <div style={{ paddingLeft: pl }}>
        {hasChildren &&
          items.children?.map((child: chrome.bookmarks.BookmarkTreeNode) => (
            <Bookmarks key={child.id} {...child} />
          ))}
      </div>
    </div>
  );
}
