const fetchSearchBookmark = async (text: string) => {
  const response = await chrome.bookmarks.search(text);
  return response;
};

export default fetchSearchBookmark
