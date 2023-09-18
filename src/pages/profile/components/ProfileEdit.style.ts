import styled from '@emotion/styled';

export const ProfileEditSection = styled.section`
  margin-top: 100px;
  height: 100%;
`;

export const ProfileEditContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter}
`;

export const ProfileEditForm = styled.form`
  > button {
    float: right;
  }
`;
