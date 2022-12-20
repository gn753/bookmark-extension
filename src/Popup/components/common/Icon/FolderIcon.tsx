import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

interface Props {
  color?: string;
  size?: number;
  margin: string;
}
const normalColor = "#3182f6";

export default function FolderIcon({ color = normalColor, margin }: Props) {
  return (
    <IconWrap margin={margin}>
      <FontAwesomeIcon icon={faFolder} color={color} />
    </IconWrap>
  );
}

interface SProps {
  margin: string;
}

const IconWrap = styled.div<SProps>`
  margin: ${(props) => props.margin};
`;
