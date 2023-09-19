import styled from '@emotion/styled';

const NavContainer = styled.div`
  max-width: 500px;
  width: 80%;
  height: 28px;
  margin-top: 20px;
  position: relative;
  > * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ThemePickerContainer = styled.div`
  display: flex;
  width: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  & > button {
    margin-left: 5px;
    margin-right: 5px;
    flex-shrink: 0;
  }
`;

const StyledPickerButton = styled.button`
  cursor: pointer;
  width: 45px;
  height: 45px;
  ${({ theme }) => theme.style.flexCenter};
  border-radius: 50%;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.black250};
  }
`;

const StyledPreviousButton = styled(StyledPickerButton)`
  left: -30px;
`;

const StyledNextButton = styled(StyledPickerButton)`
  right: -30px;
`;

export {
  NavContainer,
  ThemePickerContainer,
  StyledPreviousButton,
  StyledNextButton
};
