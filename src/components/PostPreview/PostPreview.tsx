import type { Post } from '@/types';
import PostHeader from './PostHeader';
import {
  PreviewContainer,
  PostHeaderContainer,
  PostContent
} from './PostPreview.style';

interface PostPreviewProps {
  post: Pick<Post, 'image' | 'title' | 'author' | 'createdAt'>;
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
  // todo: 명상 시간 데이터는 아직 못받아왔으므로 추후에 제외시켜놓은 거 추가하기

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
      <PostContent>{previewTitle}...</PostContent>
    </PreviewContainer>
  );
};
export default PostPreview;
