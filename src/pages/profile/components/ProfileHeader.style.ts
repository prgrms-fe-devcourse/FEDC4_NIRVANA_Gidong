import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  height: 82px;
`;

export const ProfileHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  > button {
    transition: all 0.2s ease-out;
    ${({ theme }) => theme.style.flexCenter};
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
    :hover {
      background-color: ${({ theme }) => theme.color.white900};
    }
  }
`;
