import styled from '@emotion/styled';

export const PostContainer = styled.div`
  min-width: 330px;
  width: 80%;
  height: 450px;
  position: relative;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  height: 350px;
  line-height: 1.5;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  padding: 30px 15px;

  &:focus: {
    border: none;
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
`;
