import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@components/Button';
import {
  CommentAvatarContainer,
  CommentButtonContainer,
  CommentInput,
  CommentInputContainer,
  CommentInputForm,
  CommentInputSection
} from './PostCommentInput.style';
import { purifyContent } from '@pages/posting/utils';
import { Toast } from '@components/Toast';
import { Avatar } from '@components/Avatar';
import { postComment } from '@apis/comment';
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
  const [showCommentInputErrorToast, setShowCommentInputErrorToast] =
    useState(false);
  const commentRef = useRef(null);

  const { mutate } = useMutation(postComment, {
    onSuccess: (res) => {
      postNotifications(token, {
        notificationType: 'COMMENT',
        notificationTypeId: res._id,
        userId: userId,
        postId: res.post
      });
      refetch();
    }
  });

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      postId,
      comment: purifyContent(commentValue),
      token
    });
    commentRef.current.value = '';
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 500) {
      setShowCommentInputErrorToast(true);
    } else {
      setShowCommentInputErrorToast(false);
      setCommentValue(event.target.value);
    }
  };

  return (
    <CommentInputSection>
      {showCommentInputErrorToast && (
        <Toast
          content='500자 이내로 입력해주세요.'
          type='WARNING'
        />
      )}
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
