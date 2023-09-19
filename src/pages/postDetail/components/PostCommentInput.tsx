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

interface PostCommentInputProps {
  avatarSrc: string;
}

const PostCommentInput = ({ avatarSrc }: PostCommentInputProps) => {
  const COMMENT_PLACEHOLDER = '댓글을 달아보세요.';
  const commentRef = useRef(null);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(commentRef.current.value);
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
