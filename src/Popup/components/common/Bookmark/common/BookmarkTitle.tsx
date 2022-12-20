import styled from "@emotion/styled";

interface Props {
  title: string;
}

export default function BookmarkTitle({ title }: Props) {
  return <Title>{title}</Title>;
}
const Title = styled.span`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: normal;
  font-size: 14px;
`;
