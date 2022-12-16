import styled from "@emotion/styled";
import ArrowDownIcon from "../Icon/ArrowDownIcon";
import FolderIcon from "../Icon/FolderIcon";

interface Props {
  title: string;
  handleToggle: () => void;
}

export default function Folder({ title, handleToggle }: Props) {
  return (
    <Button onClick={handleToggle}>
      <Poasitoon>
        <ArrowDownIcon />
      </Poasitoon>
      <Margin>
        <FolderIcon />
      </Margin>
      <span>{title}</span>
    </Button>
  );
}

const Button = styled.button`
  position: relative;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin-bottom: 7px;
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

const Poasitoon = styled.div`
  position: absolute;
  left: -15px;
`;
const Margin = styled.i`
  margin-right: 5px;
`;
