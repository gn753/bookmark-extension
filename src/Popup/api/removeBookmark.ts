const removeBookmark = async (id: string) => {
  await chrome.bookmarks.remove(id);
};

export default removeBookmark;
