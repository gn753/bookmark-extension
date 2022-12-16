const fetchBookmarkTree = async () => {
  const response = await chrome.bookmarks
    .getTree()
    .then((response) => (response ? response[0].children : []));
  return response;
};

export default fetchBookmarkTree;
