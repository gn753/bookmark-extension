import { BookmarkCreateDetails } from "../type";
const createBookmark = async (CreateDetails: BookmarkCreateDetails) => {
  const response = await chrome.bookmarks.create(CreateDetails);
  return response;
};
export default createBookmark;
