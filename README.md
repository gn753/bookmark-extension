# EZ/Bk-manger

<div style="display:flex;justify-content:space-between">

- FE-Bookmark는 크롬기반의 북마크 탐색 확장 프로그램입니다.
- 웹 페이지의 북마크를 팝업버튼 한번으로 편리하게 탐색과 삭제가 가능합니다.
- 더 이상 여러 경로를 거쳐서 북마크를 찾지마세요!

<img src="public/img/logo-128.png "/>

</div>


## 사용방법

다음 방법을 통해 사용이 가능합니다.

- 프로젝트 Build 폴더를 다운받습니다.
- 크롬 도구 더보기에서 확장 프로그램으로 들어가주세요.
- 우측 최상단에 개발자 모드를 체크해주세요.
- 마지막으로 좌측 상단 "압축해재된 확장프로그램 로드"버튼 클릭 해 빌드 폴더를 올리면 완료입니다


## 사용기술

- React
- Typescript
- Recoil
- CSS in JS Emotion

## 구조

- 공통 컴포넌트는 Commn폴더에 잘게 쪼개 재사용성과 가독성을 높였습니다.

```
├── Popup
│ ├── api 크롬 확장프로그램 API
│ │ ├── fetchBookmarkTree.ts
│ │ ├── fetchSearchBookmark.ts
│ │ └── removeBookmark.ts
│ ├── components
│ │ ├── InfinityBookmakList
│ │ │ ├── BookmarkList.tsx
│ │ │ ├── FolderOrBookmarkRender.tsx
│ │ │ └── index.tsx
│ │ ├── SearchFormBookamrk
│ │ │ ├── SearchInput.tsx
│ │ │ ├── SearchList.tsx
│ │ │ └── index.tsx
│ │ └── common
│ │ ├── Bookmark
│ │ │ ├── BookmarkItem
│ │ │ │ └── index.tsx
│ │ │ └── common
│ │ │ ├── BookmarkFavicon.tsx
│ │ │ ├── BookmarkRemoveButton.tsx
│ │ │ └── BookmarkTitle.tsx
│ │ ├── Folder
│ │ │ ├── FolderItem
│ │ │ │ └── index.tsx
│ │ │ └── common
│ │ │ ├── FolderActiveIcon.tsx
│ │ │ ├── FolderBgColorAnimation.tsx
│ │ │ └── FolderTitle.tsx
│ │ └── Icon
│ │ ├── ArrowDownIcon.tsx
│ │ ├── FolderIcon.tsx
│ │ ├── MinusIcon.tsx
│ │ ├── PlusIcon.tsx
│ │ └── RemoveIcon.tsx
│ ├── hooks 커스텀 훅
│ │ ├── useGetBookmarkTree.ts
│ │ ├── useGetSearchBookmarkList.ts
│ │ └── useOutSideClick.ts
│ ├── index.tsx
│ ├── recoil 전역
│ │ └── atoms
│ │ └── searchInputTextState.tsx
│ └── type 공통 타입
│ └── index.ts
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── style
└── index.ts

```

## 소개 영상

[![유튜브 영상](http://img.youtube.com/vi/yjP81YMyfsE/0.jpg)](https://youtu.be/yjP81YMyfsE?t=0s)
