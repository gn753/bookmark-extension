import styled from "@emotion/styled";

import BookmarkRemove from "./BookmarkRemove";

interface Props {
  title: string;
  url: string | undefined;
  id: string;
}

const faviconBaseUrl = "https://www.google.com/s2/favicons?domain=";

export default function Bookmark({ title, url, id }: Props) {
  const bookmarkUrl = url;
  const faviconUrl = faviconBaseUrl + bookmarkUrl;

  return (
    <Wrap>
      <a href={bookmarkUrl} target="blank">
        <img src={faviconUrl} alt="파비콘" />
        <span>{title}</span>
      </a>
      <BookmarkRemove id={id} />
    </Wrap>
  );
}

const Wrap = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 14px;
    text-decoration: none;
  }
  img {
    margin-right: 4px;
  }
  span {
    font-weight: normal;
    font-size: 14px;
  }
`;
