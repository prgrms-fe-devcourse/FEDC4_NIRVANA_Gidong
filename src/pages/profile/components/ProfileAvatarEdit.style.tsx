import styled from '@emotion/styled';

export const EditIconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
  ${({ theme }) => theme.style.flexCenter};
  > span {
    ${({ theme }) => theme.style.absoluteCenter};
  }
`;
