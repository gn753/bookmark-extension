import styled from "@emotion/styled";

interface Props {
  title: string;
  url: string | undefined;
}

// const baseUrl = "https://www.google.com/s2/favicons?domain=";
const baseUrl = "";

export default function BookmarkItem({ title, url }: Props) {
  // const favicon = "chrome://favicon/" + url;
  const favicon = baseUrl + url;
  return (
    <BookmarkColor>
      <a href={url} target="blank">
        <img src={favicon} alt="파비콘" />
        <span>{title}</span>
      </a>
    </BookmarkColor>
  );
}

const BookmarkColor = styled.li`
  margin-bottom: 7px;
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
