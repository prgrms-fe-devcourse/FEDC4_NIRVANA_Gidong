import styled from '@emotion/styled';

const NavContainer = styled.div`  
  ${({ theme }) => theme.style.flexCenter};
  position: relative;
  max-width: 500px;
  height: 28px;
  width: 80%;
  margin-top: 20px;

  > * {
    top: 50%;
    transform: translateY(-50%);
  }
`

const ThemePickerContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  justify-content: flex-start;
  position: absolute;


  & > button {
    margin-left: 5px;
    margin-right: 5px;
    flex-shrink: 0;
  }
`;

const PickerButtonContainer = styled.div`
  width: 45px;
  height: 45px;
  ${({ theme }) => theme.style.flexCenter};
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
  
`

const PickerPreviousButtonContainer = styled(PickerButtonContainer)`
  left: -50px;
`

const PickerNextButtonContainer = styled(PickerButtonContainer)`
  right: -50px;
`

export { NavContainer, ThemePickerContainer, PickerPreviousButtonContainer, PickerNextButtonContainer };
