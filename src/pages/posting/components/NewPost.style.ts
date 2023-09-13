import styled from '@emotion/styled';

export const PostContainer = styled.div`
  min-width: 330px;
  width: 80%;
  height: 450px;
  position: relative;
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 450px;
  border-radius: 10px;
  border: none;
  resize: none;
  font-size: 16px;
  padding: 30px 15px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
`