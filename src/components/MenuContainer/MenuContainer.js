import MenuIcons from '../../components/MenuIcons/MenuIcons';
import StyledMenuContainer from './MenuContainer.styled';
import PropTypes from 'prop-types';

const MenuContainer = ({ children, type, heading, handler }) => (
  <StyledMenuContainer>
    <StyledMenuContainer.Heading>{heading}</StyledMenuContainer.Heading>
    <StyledMenuContainer.Divider />
    <StyledMenuContainer.Content>{children}</StyledMenuContainer.Content>

    {type && <MenuIcons type={type} handler={handler} />}
  </StyledMenuContainer>
);

MenuContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  handler: PropTypes.object.isRequired,
  type: PropTypes.string,
};
export default MenuContainer;
