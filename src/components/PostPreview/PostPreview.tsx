import { useSetRecoilState } from 'recoil';

import type { EditedPost } from '@/types';

import PostHeader from './PostHeader';
import { Link } from '@components/Link';
import { openSearch } from '@pages/layout/states/openSearch';
import { shortenString } from '@utils/index';
import {
  PostContent,
  PostContentContainer,
  PostHeaderContainer,
  PreviewContainer
} from './PostPreview.style';

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
  const previewContent = shortenString(content, 100);
  const setResultShown = useSetRecoilState(openSearch);
  const handlePreviewClick = () => {
    setResultShown(false);
  };

  return (
    <PreviewContainer onClick={handlePreviewClick}>
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
