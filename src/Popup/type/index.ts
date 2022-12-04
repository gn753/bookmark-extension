export type BookmarkTree = chrome.bookmarks.BookmarkTreeNode;

interface Common {
  children?: [];
}

export interface Ancestor extends Common {
  id: string;
  dateAdded: number;
  title: string;
}

export interface Children {
  dateAdded: number;
  dateGroupModified: number;
  id: string;
  index: number;
  parentId: string;
  title: string;
}

export interface Grandson {}

export interface Test {
  index?: number | undefined;
  /** Optional. When this node was created, in milliseconds since the epoch (new Date(dateAdded)).  */
  dateAdded?: number | undefined;
  /** The text displayed for the node. */
  title: string;
  /** Optional. The URL navigated to when a user clicks the bookmark. Omitted for folders.   */
  url?: string | undefined;
  /** Optional. When the contents of this folder last changed, in milliseconds since the epoch.   */
  dateGroupModified?: number | undefined;
  /** The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.  */
  id: string;
  /** Optional. The id of the parent folder. Omitted for the root node.   */
  parentId?: string | undefined;
  /** Optional. An ordered list of children of this node.  */
  children?: BookmarkTree;
}
// var list = [];
// chrome.bookmarks.getTree( function(bookmarks){ collectLinks( bookmarks[0] , list ); collectLinks( bookmarks[1] , list );} )
