import styled from "@emotion/styled";
import useOutsideClick from "../../../../hooks/useOutSideClick";
import { Children } from "../../../../type";

export default function FolderBgColorAnimation({ children }: Children) {
  const { ref, handleInSideClick, isActive } = useOutsideClick(
    "#d3cbcb",
    "transparent"
  );

  return (
    <Wrap ref={ref} onClick={handleInSideClick} isActive={isActive}>
      {children}
    </Wrap>
  );
}

interface SProps {
  isActive: string;
}

const Wrap = styled.div<SProps>`
  display: block;
  background-color: ${(props) => props.isActive};
`;
