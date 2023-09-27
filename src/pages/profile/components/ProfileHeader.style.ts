import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  width: 100%;
`;

export const ProfileHeaderButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ theme }) => theme.style.flexCenter};
  > button {
<<<<<<< HEAD
    transition: all 0.2s ease-out;
    :active {
      background-color: ${({ theme }) => theme.color.white800};
    }
    :hover {
      background-color: ${({ theme }) => theme.color.white800};
=======
    transition: all 0.3s ease-in-out;
    ${({ theme }) => theme.style.flexCenter};
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
    :active {
      transform: scale(0.9);
>>>>>>> a20a74fdbfb510e43a6df37cf2af1283d351403d
    }
  }
`;
