export const filterData = [
  {
    name: 'Most Recent',
    value: 'mostRecent',
  },
  {
    name: 'Oldest',
    value: 'oldest',
  },
  {
    name: 'Popular',
    value: 'popular',
  },
];

export const applyFilter = (posts, filter) => {
  switch (filter) {
    case 'mostRecent':
      return posts;
    //This will be decommented when the backend fixes the date issue
    //   return posts.sort((a, b) =>
    //     a.date > b.date ? 1 : b.date > a.date ? -1 : 0,
    //   );
    case 'oldest':
      return posts;
    //This will be decommented when the backend fixes the date issue
    //     return posts.sort((a, b) =>
    //     a.date > b.date ? 1 : b.date > a.date ? -1 : 0,
    //   );
    case 'popular':
      return posts.sort((a, b) =>
        a.likes_count > b.likes_count
          ? 1
          : b.likes_count > a.likes_count
          ? -1
          : 0,
      );
  }
};
