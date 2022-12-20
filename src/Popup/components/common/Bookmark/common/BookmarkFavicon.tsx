import styled from "@emotion/styled";

const bookmarkFaviconBaseUrl = "https://www.google.com/s2/favicons?domain=";

interface Props {
  url: string | undefined;
}

export default function BookmarkFavicon({ url }: Props) {
  const faviconUrl = bookmarkFaviconBaseUrl + url;
  return <Favicon faviconUrl={faviconUrl} />;
}

interface SProps {
  faviconUrl: string;
}

const Favicon = styled.i<SProps>`
  display: block;
  width: 14px;
  height: 14px;
  margin-right: 4px;
  background-size: cover;
  background-image: url(${(props) => props.faviconUrl});
`;
