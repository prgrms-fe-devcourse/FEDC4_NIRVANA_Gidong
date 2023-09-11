import styled from '@emotion/styled';

export const ProfileConfigContainer = styled.div`
  height: 82px;
`;

export const ProfileConfigButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  > button {
    ${({ theme }) => theme.style.flexCenter};
    margin-right: 6px;
    &:first-child {
      > span {
        margin-left: 3px;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
