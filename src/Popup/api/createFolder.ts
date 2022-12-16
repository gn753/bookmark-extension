import { FolderCreateDetails } from "../type";
const createFolder = async (details: FolderCreateDetails) => {
  const response = await chrome.bookmarks.create(details);
  return response;
};

export default createFolder;
