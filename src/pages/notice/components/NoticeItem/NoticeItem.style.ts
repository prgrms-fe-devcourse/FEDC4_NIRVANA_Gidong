import styled from '@emotion/styled';

const NoticeItemContainer = styled.div`
  cursor: pointer;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white800};
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.white900};
  }
  padding: 14px;
  line-height: 1.5;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  ${({ theme }) => theme.style.flexCenter};
`;

const NoticeContent = styled.div`
  width: calc(100% - 60px);
  height: 100%;
  flex-direction: column;
  align-self: center;
  line-height: 1.5;
`;

const Message = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.style.flexAlignCenter};
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`;

const MessagePreview = styled.div`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.color.greyLight};
`;

const MessageText = styled.span`
  margin-right: 2px;
`;

export {
  NoticeItemContainer,
  ProfileImage,
  NoticeContent,
  Message,
  MessagePreview,
  MessageText
};
