import type { EditedPost, Post, RawTitleData } from '@/types';

const editTimeForm = (time: string) => {
  return time.split('T')[0].split('-').join('.');
};

const splitTitleData = (rawTitle: string) => {
  const { content, meditationTime } = JSON.parse(rawTitle) as RawTitleData;

  return { content, meditationTime };
};

const editPostData = (posts: Post[]): EditedPost[] => {
  if (!posts) {
    return [];
  }
  return posts.map((post: Post) => {
    post.createdAt = editTimeForm(post.createdAt);
    post.updatedAt = editTimeForm(post.updatedAt);
    const { content, meditationTime } = splitTitleData(post.title);

    if (content.length === 0) {
      return { ...post, content: '내용이 없습니다.', meditationTime };
    }

    return { ...post, content, meditationTime };
  });
};

export { editPostData };
