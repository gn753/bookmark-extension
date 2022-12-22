import styled from "@emotion/styled";
import FolderIcon from "../../Icon/FolderIcon";
import FolderActiveIcon from "../common/FolderActiveIcon";
import FolderBgColorAnimation from "../common/FolderBgColorAnimation";
import FolderTitle from "../common/FolderTitle";

interface Props extends SProps {
  title: string;
  isShow: boolean;
}

interface SProps {
  color?: string;
}

export default function FolderItem({ title, isShow }: Props) {
  return (
    <FolderBgColorAnimation>
      <FolderWrap>
        <FolderActiveIcon isShow={isShow} />
        <FolderIcon margin={"0px 5px 0 0"} />
        <FolderTitle title={title} />
      </FolderWrap>
    </FolderBgColorAnimation>
  );
}

const FolderWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;
  margin-bottom: 7px;
  cursor: pointer;
  :focus {
    background: rgb(245, 245, 245);
  }
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;
