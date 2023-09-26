import styled from '@emotion/styled';

export const Header = styled.h1`
  display: flex;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const NoticePage = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.color.white};
`;

export const ReadButtonContainer = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.color.white800};
  border-radius: 10px;
  ${({ theme }) => theme.style.flexCenter};
  font-weight: 300;
  &:hover {
    background-color: ${({ theme }) => theme.color.white900};
  }
`;
