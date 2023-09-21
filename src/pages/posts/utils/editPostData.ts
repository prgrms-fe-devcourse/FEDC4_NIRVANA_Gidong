import type { Post } from '@/types';

const editTimeForm = (time: string) => {
  return time.split('T')[0].split('-').join('.');
};

const editPostData = (posts: Post[]): Post[] => {
  const editData = posts.map((post: Post) => {
    post.createdAt = editTimeForm(post.createdAt);
    post.updatedAt = editTimeForm(post.updatedAt);
    return post;
  });

  return editData;
};

export { editPostData };
