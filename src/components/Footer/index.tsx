import styled from '@emotion/styled';
import Icon from '../Icon';
import Link from '../Link';

const StyledFooter = styled.footer`
  background-color: white;
  width: 320px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px ${({ theme }) => theme['greyLight']} solid;
  border-bottom: 1.5px ${({ theme }) => theme['black']} solid;
  border-left: 1.5px ${({ theme }) => theme['black']} solid;
  border-right: 1.5px ${({ theme }) => theme['black']} solid;
  padding: 0 35px;
`;

const iconInfos = [
  { name: 'home', size: 35 },
  { name: 'smart_display', size: 30 },
  { name: 'person', size: 30 }
];

const Footer = () => {
  return (
    <StyledFooter>
      {iconInfos.map((icon) => (
        <Link
          pageLink={'/'}
          key={icon.name}>
          <Icon
            name={icon.name}
            size={icon.size}
            color='black'
          />
        </Link>
      ))}
    </StyledFooter>
  );
};

export default Footer;
