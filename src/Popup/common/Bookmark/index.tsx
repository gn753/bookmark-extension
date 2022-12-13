import styled from "@emotion/styled";

interface Props {
  title: string;
  url: string | undefined;
}

const faviconBaseUrl = "https://www.google.com/s2/favicons?domain=";

export default function Bookmark({ title, url }: Props) {
  const linkUrl = url;
  const faviconUrl = faviconBaseUrl + linkUrl;
  return (
    <Wrap>
      <a href={linkUrl} target="blank">
        <img src={faviconUrl} alt="파비콘" />
        <span>{title}</span>
      </a>
    </Wrap>
  );
}

const Wrap = styled.div`
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
