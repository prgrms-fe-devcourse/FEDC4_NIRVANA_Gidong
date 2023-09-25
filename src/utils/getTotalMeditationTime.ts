import { Post } from '@/types/Post';

const getTotalMeditationTime = (posts: Post[]) => {
  return posts.reduce(
    (acc, cur) => acc + Number(JSON.parse(cur.title).meditationTime),
    0
  );
};

export default getTotalMeditationTime;
