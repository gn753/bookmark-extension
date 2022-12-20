import styled from "@emotion/styled";
interface Props extends SProps {
  title: string;
}

interface SProps {
  size?: string;
}

export default function FolderTitle({ title, size = "15px" }: Props) {
  return <Title size={size}>{title}</Title>;
}

const Title = styled.span<SProps>`
  font-size: ${(props) => props.size};
  font-weight: 600;
`;
