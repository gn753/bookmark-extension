export type BookmarkTree = chrome.bookmarks.BookmarkTreeNode;

export interface FolderCreateDetails {
  parentId: string;
  title: string;
}

export interface BookmarkCreateDetails {
  parentId: string;
  title: string;
  url: string;
}
