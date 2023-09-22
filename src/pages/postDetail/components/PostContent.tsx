import { Icon } from '@components/Icon';
import {
  PostContentSection,
  PostContentHeader,
  PostContentAvatarContainer,
  PostContentBody,
  PostContentMenuIconContainer,
  PostContentTime,
  PostContentUserInfo,
  PostContentUserName,
  PostContentMenu,
  PostEditConfirmButtonContainer
} from './PostContent.style';
import { User } from '@/types/User';
import { Avatar } from '@components/Avatar';
import { UserId, UserName } from '@components/UserText';
import { useState } from 'react';
import { deletePost, putPost } from '@apis/posts';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { Button } from '@components/Button';

interface PostContentProps {
  author: User;
  postId: string;
  token: string;
  createdAt: string;
  title: string;
}

const PostContent = ({
  author,
  postId,
  token,
  createdAt,
  title
}: PostContentProps) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [contentEditMode, setContentEditMode] = useState(false);
  const contentEditRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

  const {
    mutate: mutateDeletePost,
    data: deletedPostData,
    isSuccess
  } = useMutation(deletePost);
  // const { mutate: mutatePutPost } = useMutation(putPost);

  if (isSuccess) {
    console.log(deletedPostData);
  }

  const handleEditClick = () => {
    setContentEditMode(true);
    setMenuOpened(false);
    contentEditRef.current?.setAttribute('contenteditable', 'true');
    contentEditRef.current?.focus();
    // mutatePutPost({});
  };

  const handleDeleteClick = () => {
    mutateDeletePost({ postId, token });
  };

  const handleEditConfirmClick = () => {
    setContentEditMode(false);
    contentEditRef.current?.setAttribute('contenteditable', 'false');
  };

  return (
    <PostContentSection>
      <PostContentHeader>
        <PostContentAvatarContainer>
          <Avatar
            src={author?.image}
            alt={author?.fullName}
            size={39}
          />
        </PostContentAvatarContainer>
        <PostContentUserInfo>
          <PostContentUserName>
            <UserName>{author?.fullName}</UserName>
            <UserId email={author ? author.email : ''} />
          </PostContentUserName>
          <PostContentTime>{createdAt}</PostContentTime>
        </PostContentUserInfo>
        <PostContentMenuIconContainer
          opened={menuOpened}
          onClick={handleMenuClick}>
          <Icon
            size={24}
            name='menu'
          />
        </PostContentMenuIconContainer>
        <PostContentMenu opened={menuOpened}>
          <p onClick={handleDeleteClick}>삭제하기</p>
          <p onClick={handleEditClick}>수정하기</p>
        </PostContentMenu>
      </PostContentHeader>
      <PostContentBody ref={contentEditRef}>{title}</PostContentBody>
      <PostEditConfirmButtonContainer contentEditMode={contentEditMode}>
        <Button
          width={50}
          height={25}
          dark={true}
          fontSize={12}
          label='저장'
          handleClick={handleEditConfirmClick}
        />
      </PostEditConfirmButtonContainer>
    </PostContentSection>
  );
};

export default PostContent;
