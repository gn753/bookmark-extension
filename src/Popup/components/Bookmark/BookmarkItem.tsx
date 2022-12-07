import styled from "@emotion/styled";
interface Props {
  title: string;
  url: string | undefined;
}
export default function BookmarkItem({ title, url }: Props) {
  // const favicon = "chrome://favicon/" + url;
  const favicon = "https://www.google.com/s2/favicons?domain=" + url;
  console.log(favicon, "favicon");
  return (
    <BookmarkColor>
      <a href={url} target="blank">
        <img src={favicon} alt="파비콘" />
        <span>{title}</span>
      </a>
    </BookmarkColor>
  );
}

const BookmarkColor = styled.div`
  margin-bottom: 7px;
  a {
    font-weight: normal;
    font-size: 14px;
    color: red;
    text-decoration: none;
  }
  span {
    font-weight: normal;
    font-size: 14px;
  }
`;
