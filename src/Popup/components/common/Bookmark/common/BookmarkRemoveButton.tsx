import styled from "@emotion/styled";
import removeBookmark from "../../../../api/removeBookmark";
import useGetBookmarkTree from "../../../../hooks/useGetBookmarkTree";
import { RemoveIcon } from "../../Icon/RemoveIcon";

interface Props {
  id: string;
}

export default function BookmarkRemoveButton({ id }: Props) {
  const { getBookmarkTree } = useGetBookmarkTree();

  const handleRemoveConfirm = () => {
    if (window.confirm("북마크를 제거합니까?")) {
      removeBookmark(id);
      getBookmarkTree();
    } else return;
  };

  return (
    <Button onClick={handleRemoveConfirm}>
      <RemoveIcon />
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
`;
