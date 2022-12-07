import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  handleToggle: () => void;
}

export default function Folder({ title, handleToggle }: Props) {
  return (
    <FolderColor onClick={handleToggle}>
      <Poasitoon>
        <FontAwesomeIcon icon={faArrowDown} color={"lightgray"} />
      </Poasitoon>
      <Margin>
        <FontAwesomeIcon icon={faFolder} color={"black"} />
      </Margin>
      <span> {title} </span>
    </FolderColor>
  );
}

const FolderColor = styled.button`
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
