import { useMutation } from '@tanstack/react-query';

import type { User } from '@/types/User';
import { Link } from '@components/Link';
import { Avatar } from '@components/Avatar';
import {
  PostCommentContainer,
  PostCommentAvatarContainer,
  PostCommentUserContainer,
  PostCommentContentContainer,
  PostCommentDeleteContainer
} from './PostComment.style';
import { UserId, UserName } from '@components/UserText';
import { deleteComment } from '@apis/comment';

interface PostCommentProps {
  author: User;
  text: string;
  token: string;
  myComment: boolean;
  id: string;
  refetch: () => void;
}

const PostComment = ({
  author,
  text,
  token,
  myComment,
  id,
  refetch
}: PostCommentProps) => {
  const { mutate, isSuccess } = useMutation(deleteComment);

  if (isSuccess) refetch();

  const handleCommentDeleteClick = async () => {
    mutate({ id, token });
  };

  return (
    <>
      <PostCommentContainer>
        <PostCommentAvatarContainer>
          <Link
            setActiveStyle={false}
            pageLink={`/profile/${author._id}`}>
            <Avatar
              size={40}
              src={author.image ? author.image : ''}
              alt={author.fullName}
            />
          </Link>
        </PostCommentAvatarContainer>
        <PostCommentContentContainer>
          <PostCommentUserContainer>
            <UserName>{author.fullName}</UserName>
            <UserId email={author.email} />
          </PostCommentUserContainer>
          {text}
        </PostCommentContentContainer>
        <PostCommentDeleteContainer>
          {myComment && <p onClick={handleCommentDeleteClick}>삭제</p>}
        </PostCommentDeleteContainer>
      </PostCommentContainer>
    </>
  );
};

export default PostComment;
