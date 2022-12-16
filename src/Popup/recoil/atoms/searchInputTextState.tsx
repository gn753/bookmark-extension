import { atom } from "recoil";

export const searchInputTextState = atom<string>({
  key: "searchInputFocusState",
  default: "",
});
