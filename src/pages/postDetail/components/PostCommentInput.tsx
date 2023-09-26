import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
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
import { postComment } from '@apis/comment';
import { useState } from 'react';
import { postNotifications } from '@apis/notice';

interface PostCommentInputProps {
  postId: string;
  token: string;
  avatarSrc: string;
  userName: string;
  userId?: string;
  refetch: () => void;
}

const PostCommentInput = ({
  avatarSrc,
  userName,
  token,
  postId,
  userId,
  refetch
}: PostCommentInputProps) => {
  const COMMENT_PLACEHOLDER = '댓글을 달아보세요.';
  const [commentValue, setCommentValue] = useState(null);
  const commentRef = useRef(null);

  const { mutate, isSuccess } = useMutation(postComment, {
    onSuccess: (res) => {
      postNotifications(token, {
        notificationType: 'COMMENT',
        notificationTypeId: res._id,
        userId: userId,
        postId: res.post
      });
    }
  });

  if (isSuccess) refetch();

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(
      {
        postId,
        comment: commentValue,
        token
      },
      {
        onSuccess: () => refetch()
      }
    );
    commentRef.current.value = '';
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  return (
    <CommentInputSection>
      <CommentAvatarContainer>
        <Avatar
          src={avatarSrc ? avatarSrc : ''}
          alt={userName}
          size={39}
        />
      </CommentAvatarContainer>
      <CommentInputForm onSubmit={handleCommentSubmit}>
        <CommentInputContainer>
          <CommentInput
            ref={commentRef}
            name='comment'
            onChange={handleCommentChange}
            placeholder={COMMENT_PLACEHOLDER}
          />
        </CommentInputContainer>
        <CommentButtonContainer buttonDisabled={commentValue ? false : true}>
          <Button
            width={50}
            height={25}
            label='답글'
            fontSize={14}
            dark={true}
            borderRadius={5}
            disabled={commentValue ? false : true}
          />
        </CommentButtonContainer>
      </CommentInputForm>
    </CommentInputSection>
  );
};

export default PostCommentInput;
