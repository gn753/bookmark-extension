import MinusIcon from "../../Icon/MinusIcon";
import PlusIcon from "../../Icon/PlusIcon";

interface Props {
  isShow: boolean;
}
export default function FolderActiveIcon({ isShow }: Props) {
  return <>{isShow ? <MinusIcon /> : <PlusIcon />}</>;
}

