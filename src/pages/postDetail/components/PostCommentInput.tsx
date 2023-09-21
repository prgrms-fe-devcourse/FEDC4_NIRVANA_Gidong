import { Button } from '@components/Button';
import {
  CommentAvatarContainer,
  CommentButtonContainer,
  CommentInputContainer,
  CommentInputSection,
  CommentInput,
  CommentInputForm
} from './PostCommentInput.style';
import { Avatar } from '@components/Avatar';
import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postComment } from '@apis/comment';

interface PostCommentInputProps {
  postId: string;
  token: string;
  avatarSrc: string;
  refetch: () => void;
}

const PostCommentInput = ({
  avatarSrc,
  token,
  postId,
  refetch
}: PostCommentInputProps) => {
  const COMMENT_PLACEHOLDER = '댓글을 달아보세요.';
  const commentRef = useRef(null);

  const { mutate, isSuccess } = useMutation(postComment);

  if (isSuccess) refetch();

  const handleCommentSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    mutate({
      postId,
      comment: commentRef.current.value,
      token
    });
    commentRef.current.value = '';
  };

  return (
    <CommentInputSection>
      <CommentAvatarContainer>
        <Avatar
          src={avatarSrc ? avatarSrc : ''}
          alt='케로로'
          size={39}
        />
      </CommentAvatarContainer>
      <CommentInputForm onSubmit={handleCommentSubmit}>
        <CommentInputContainer>
          <CommentInput
            ref={commentRef}
            name='comment'
            placeholder={COMMENT_PLACEHOLDER}
          />
        </CommentInputContainer>
        <CommentButtonContainer>
          <Button
            width={50}
            height={25}
            label='답글'
            fontSize={14}
            dark={true}
            borderRadius={5}
          />
        </CommentButtonContainer>
      </CommentInputForm>
    </CommentInputSection>
  );
};

export default PostCommentInput;
