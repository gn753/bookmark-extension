import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { searchInputTextState } from "../../recoil/atoms/searchInputTextState";

export default function SearchInput() {
  const [text, setText] = useRecoilState(searchInputTextState);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <Input
        type="text"
        onChange={onChangeText}
        placeholder="Search your bookmarks"
        value={text}
      />
      <Hr />
    </>
  );
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: none;
  padding-left: 10px;
  font-size: 12px;
`;

const Hr = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #c0bebe;
  margin: 0 16px 8px;
`;
