export type BookmarkTree = chrome.bookmarks.BookmarkTreeNode[] | undefined;
export type BookmarkTreeDetails = chrome.bookmarks.BookmarkTreeNode;
export interface FolderCreateDetails {
  parentId: string;
  title: string;
}

export interface BookmarkCreateDetails {
  parentId: string;
  title: string;
  url: string;
}

export interface Children {
  children: React.ReactNode;
}
