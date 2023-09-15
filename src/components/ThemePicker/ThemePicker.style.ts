import styled from '@emotion/styled';

const ThemePickerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  overflow: hidden;
  max-width: 500px;
  width: 80%;
  box-sizing: content-box;
  justify-content: flex-start;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & > button {
    margin-left: 5px;
    margin-right: 5px;
    flex-shrink: 0;
  }
`;

const PickerButtonContainer = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.style.flexCenter};
`

const PickerPreviousButtonContainer = styled(PickerButtonContainer)`
  box-shadow: 20px 0px 10px ${({ theme }) => theme.color.white};
`

const PickerNextButtonContainer = styled(PickerButtonContainer)`
  box-shadow: -20px 0px 10px ${({ theme }) => theme.color.white};
`

export { ThemePickerContainer, PickerPreviousButtonContainer, PickerNextButtonContainer };
