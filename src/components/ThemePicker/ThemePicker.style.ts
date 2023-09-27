import styled from '@emotion/styled';

const NavContainer = styled.div`
  max-width: 500px;
  width: 80%;
  height: 28px;
  position: relative;

  > * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ThemePickerContainer = styled.div`
  display: inline-flex;
  width: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  & > button {
    margin: 0px 5px;
    flex-shrink: 0;
  }

  & > button:last-child {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: -20px;
      width: 20px;
      height: 20px;
    }
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
