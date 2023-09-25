import styled from '@emotion/styled';

const NoticeItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 0.5px solid ${({ theme }) => theme.color['greyLight']};
  margin-bottom: 10px;
`;

const ProfileImage = styled.div`
  width: 39px;
  height: 39px;
  margin-right: 20px;
  border-radius: 50%;
`;

const NoticeContent = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color['black']};
`;

const MessagePreview = styled.div`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.color['greyLight']};
`;

export {
  NoticeItemContainer,
  ProfileImage,
  NoticeContent,
  Message,
  MessagePreview
};
