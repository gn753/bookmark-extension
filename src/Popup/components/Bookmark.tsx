import styled from "@emotion/styled";
import { BookmarkTree } from "../../Popup/type/index";

export default function Bookmark({ ...item }: BookmarkTree) {
  return <Item key={item.id}>{item.title}</Item>;
}

const Item = styled.div`
  background-color: red;
`;
