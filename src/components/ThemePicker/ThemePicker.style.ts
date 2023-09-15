import styled from '@emotion/styled';

const NavContainer = styled.div`
  max-width: 500px;
  width: 80%;
  height: 28px;
  margin-top: 20px;
  position: relative;
  ${({ theme }) => theme.style.flexCenter};

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
  &::-webkit-scrollbar {
    display: none;
  }
  & > button {
    margin-left: 5px;
    margin-right: 5px;
    flex-shrink: 0;
  }
  scroll-behavior: smooth;
`;

const PickerButtonContainer = styled.div`
  cursor: pointer;
  width: 45px;
  height: 45px;
  ${({ theme }) => theme.style.flexCenter};
  border-radius: 50%;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.color.black250}
  }
`;

const PickerPreviousButtonContainer = styled(PickerButtonContainer)`
  left: -30px;
`;

const PickerNextButtonContainer = styled(PickerButtonContainer)`
  right: -30px;
`;

export {
  NavContainer,
  ThemePickerContainer,
  PickerPreviousButtonContainer,
  PickerNextButtonContainer
};
