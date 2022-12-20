import styled from "@emotion/styled";
import BookmarkRemoveButton from "../common/BookmarkRemoveButton";
import BookmarkFavicon from "../common/BookmarkFavicon";
import BookmarkTitle from "../common/BookmarkTitle";

interface Props {
  title: string;
  url: string | undefined;
  id: string;
}

export default function BookmarkItem({ title, url, id }: Props) {
  console.log("북마크입니다");
  return (
    <Wrap>
      <BookmarkLink href={url} target="blank" role="button">
        <BookmarkFavicon url={url} />
        <BookmarkTitle title={title} />
      </BookmarkLink>
      <BookmarkRemoveButton id={id} />
    </Wrap>
  );
}

const Wrap = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  justify-content: space-between;
`;

const BookmarkLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;
