import styled from '@emotion/styled';

const NoticeItemContainer = styled.div`
  display: flex;
  padding: 14px;
  border-bottom: 0.5px solid ${({ theme }) => theme.color['greyLight']};
  line-height: 1.5;
`;

const ProfileImage = styled.div`
  width: 39px;
  height: 39px;
  margin-right: 20px;
  border-radius: 50%;
`;

const NoticeContent = styled.div`
  align-self: center;
`;

const Message = styled.div`
  font-weight: 700;
  font-size: 13px;
  color: ${({ theme }) => theme.color['black']};
`;

const MessagePreview = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.color['greyLight']};
`;

export {
  NoticeItemContainer,
  ProfileImage,
  NoticeContent,
  Message,
  MessagePreview
};
