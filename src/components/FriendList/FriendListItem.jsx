import { StyledItem, IsOnlineColor } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      <IsOnlineColor isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p style={{ marginLeft: '5px' }}>{name}</p>
    </StyledItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
