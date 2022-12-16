import styled from "@emotion/styled";
import removeBookmark from "../../../api/removeBookmark";
import useGetBookmarkTree from "../../../hooks/useGetBookmarkTree";
import { RemoveIcon } from "../Icon/RemoveIcon";

interface Props {
  id: string;
}

export default function BookmarkRemove({ id }: Props) {
  const { getBookmarkTree } = useGetBookmarkTree();

  const onRemoveConfirm = () => {
    if (window.confirm("북마크를 제거합니까?")) {
      removeBookmark(id);
      getBookmarkTree();
    }
  };

  return (
    <Button onClick={onRemoveConfirm}>
      <RemoveIcon />
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
`;
