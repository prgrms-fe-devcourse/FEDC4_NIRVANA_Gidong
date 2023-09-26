import type { EditedPost } from '@/types';
import PostHeader from './PostHeader';
import {
  PreviewContainer,
  PostHeaderContainer,
  PostContentContainer,
  PostContent
} from './PostPreview.style';
import { Link } from '@components/Link';

interface PostPreviewProps {
  post: Pick<
    EditedPost,
    '_id' | 'image' | 'content' | 'author' | 'createdAt' | 'meditationTime'
  >;
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
  const previewContent = `${content?.substring(0, 100)}${
    content?.length > 100 ? '...' : ''
  }`;

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
