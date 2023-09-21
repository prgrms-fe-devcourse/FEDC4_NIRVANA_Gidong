import type { Post } from '@/types';
import PostHeader from './PostHeader';
import {
  PreviewContainer,
  PostHeaderContainer,
  PostContent
} from './PostPreview.style';
import { Link } from '@components/Link';

interface PostPreviewProps {
  post: Pick<Post, '_id' | 'image' | 'title' | 'author' | 'createdAt'>;
  totalLikes: number;
  totalComments: number;
  noneProfile: boolean;
}

const PostPreview = ({
  post,
  totalLikes,
  totalComments,
  noneProfile = false
}: PostPreviewProps) => {
  const { title } = post;
  const previewTitle = title.substring(0, 100);

  return (
    <PreviewContainer>
      <PostHeaderContainer>
        <PostHeader
          post={post}
          totalLikes={totalLikes}
          totalComments={totalComments}
          noneProfile={noneProfile}
        />
      </PostHeaderContainer>
      <Link
        pageLink={`/post-detail/:${post._id}`}
        color='black'>
        <PostContent>{previewTitle}...</PostContent>
      </Link>
    </PreviewContainer>
  );
};
export default PostPreview;
