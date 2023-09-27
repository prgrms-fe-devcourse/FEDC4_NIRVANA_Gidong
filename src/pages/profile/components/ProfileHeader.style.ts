import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  width: 100%;
`;

export const ProfileHeaderButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  ${({ theme }) => theme.style.flexCenter};
  > button {
    transition: all 0.2s ease-out;
    :active {
      background-color: ${({ theme }) => theme.color.white800};
      transform: scale(0.9);
    }
    :hover {
      background-color: ${({ theme }) => theme.color.white800};
      transform: scale(0.9);
    transition: all 0.3s ease-in-out;
    ${({ theme }) => theme.style.flexCenter};
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
