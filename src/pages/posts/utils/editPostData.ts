import type { Post, EditedPost } from '@/types';

const editTimeForm = (time: string) => {
  return time.split('T')[0].split('-').join('.');
};

const splitTitleData = (title: string) => {
  const splitData = JSON.parse(title);

  return [splitData.title, splitData.meditationTime];
};

const editPostData = (posts: Post[]): EditedPost[] => {
  if (!posts) {
    return [];
  }
  const editedData = posts.map((post: Post) => {
    post.createdAt = editTimeForm(post.createdAt);
    post.updatedAt = editTimeForm(post.updatedAt);
    const [content, meditationTime] = splitTitleData(post.title);

    return { ...post, content, meditationTime };
  });

  return editedData;
};

export { editPostData };
