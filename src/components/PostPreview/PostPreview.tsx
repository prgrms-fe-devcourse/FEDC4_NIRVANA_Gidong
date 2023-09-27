import type { EditedPost } from '@/types';
import PostHeader from './PostHeader';
import {
  PostContent,
  PostContentContainer,
  PostHeaderContainer,
  PreviewContainer
} from './PostPreview.style';
import { Link } from '@components/Link';

interface PostPreviewProps {
  post: EditedPost;
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
  const { content, _id } = post;
  const previewContent = `${content.substring(0, 100)}${
    content.length > 100 ? '...' : ''
  }`;

  return (
    <PreviewContainer>
      <PostHeaderContainer>
        <PostHeader
          post={post}
          totalLikes={totalLikes}
          totalComments={totalComments}
          noneProfile={noneProfile}
          showCommentStatus={true}
        />
      </PostHeaderContainer>
      <PostContentContainer>
        <Link
          pageLink={`/posts/${_id}`}
          color='black'>
          <PostContent>{previewContent}</PostContent>
        </Link>
      </PostContentContainer>
    </PreviewContainer>
  );
};
export default PostPreview;
