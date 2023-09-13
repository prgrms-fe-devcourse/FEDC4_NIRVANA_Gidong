import styled from '@emotion/styled';

export const EditIconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
  ${({ theme }) => theme.style.flexCenter};
  > span {
    ${({ theme }) => theme.style.absoluteCenter};
  }
`;
