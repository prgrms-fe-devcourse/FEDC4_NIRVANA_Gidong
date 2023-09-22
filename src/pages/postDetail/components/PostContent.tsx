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
import { Confirm } from '@components/Confirm';
import { useNavigate } from 'react-router-dom';

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
  const [confirmOpened, setConfirmOpened] = useState(false);
  const [contentEditMode, setContentEditMode] = useState(false);
  const contentEditRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

  const navigate = useNavigate();
  const { mutate: mutateDeletePost, isSuccess: deletePostSuccess } =
    useMutation(deletePost);

  if (deletePostSuccess) {
    navigate('/posts');
  }

  const handleEditMenuClick = () => {
    setContentEditMode(true);
    setMenuOpened(false);
    contentEditRef.current?.setAttribute('contenteditable', 'true');
    contentEditRef.current?.focus();
  };

  const handleDeleteMenuClick = () => {
    setMenuOpened(false);
    setConfirmOpened(true);
  };

  const handleEditConfirmClick = () => {
    setContentEditMode(false);
    contentEditRef.current?.setAttribute('contenteditable', 'false');
  };

  const handleConfirmCancelClick = () => {
    setConfirmOpened(false);
  };

  const handleDeleteConfirmClick = () => {
    setConfirmOpened(false);
    mutateDeletePost({ postId, token });
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
          <p onClick={handleDeleteMenuClick}>삭제하기</p>
          <p onClick={handleEditMenuClick}>수정하기</p>
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
      {confirmOpened && (
        <Confirm
          emoji='❗'
          content='정말 게시글을 삭제하시겠습니까?'
          contentFontSize={14}
          CancelButton={
            <Button
              width={120}
              height={50}
              bold={true}
              dark={false}
              label={'취소'}
              handleClick={handleConfirmCancelClick}
            />
          }
          ConfirmButton={
            <Button
              width={120}
              height={50}
              bold={true}
              dark={true}
              label={'삭제'}
              handleClick={handleDeleteConfirmClick}
            />
          }
        />
      )}
    </PostContentSection>
  );
};

export default PostContent;
