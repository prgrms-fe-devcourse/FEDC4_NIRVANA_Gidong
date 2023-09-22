import type { Post } from '@/types';

const editTimeForm = (time: string) => {
  return time.split('T')[0].split('-').join('.');
};

const splitTitleData = (title: string) => {
  const splitData = JSON.parse(title);

  return [splitData.title, splitData.meditationTime];
};

const editPostData = (posts: Post[]): Post[] => {
  if (!posts) {
    return [];
  }
  const editData = posts.map((post: Post) => {
    post.createdAt = editTimeForm(post.createdAt);
    post.updatedAt = editTimeForm(post.updatedAt);
    [post.title, post.meditationTime] = splitTitleData(post.title);

    return post;
  });

  return editData;
};

export { editPostData };
