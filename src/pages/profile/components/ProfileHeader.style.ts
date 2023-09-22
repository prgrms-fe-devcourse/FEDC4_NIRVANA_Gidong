import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  height: 82px;
`;

export const ProfileHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  > button {
    ${({ theme }) => theme.style.flexCenter};
    margin-right: 6px;
    &:first-of-type {
      > span {
        margin-left: 3px;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
